"use client";

import { useEffect, useRef, useState } from "react";

const STEP_LOCATION = {
  title: "STEP Computer Academy",
  description: "Computer Academy in Odesa",
  address: "Sadova St, 3, Odesa, Ukraine, 65000",
};

export interface StepMapProps {
  apiKey: string;
  zoom?: number;
  height?: string;
  className?: string;
}

declare global {
  interface Window {
    google?: typeof google;
    __initGoogleMaps?: () => void;
    gm_authFailure?: () => void;
  }
}

let googleMapsPromise: Promise<void> | null = null;

function geocodeAddress(
  geocoder: google.maps.Geocoder,
  address: string
): Promise<google.maps.LatLng> {
  return new Promise((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      const result = results?.[0];

      if (status !== "OK" || !result) {
        reject(
          new Error(
            `Google Maps could not find the address. Address: ${address}. Status: ${status}.`
          )
        );

        return;
      }

      resolve(result.geometry.location);
    });
  });
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window is not available."));
  }

  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById("google-maps-script");

    if (existingScript) {
      const checkGoogle = setInterval(() => {
        if (window.google?.maps) {
          clearInterval(checkGoogle);
          resolve();
        }
      }, 50);

      setTimeout(() => {
        clearInterval(checkGoogle);
        reject(
          new Error("Google Maps script loaded, but Maps API is not ready.")
        );
      }, 10000);

      return;
    }

    window.__initGoogleMaps = () => {
      resolve();
    };

    window.gm_authFailure = () => {
      reject(
        new Error(
          "Google Maps authentication failed. Check API key, billing, API restrictions, and localhost referrer."
        )
      );
    };

    const script = document.createElement("script");

    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&v=weekly&loading=async&callback=__initGoogleMaps`;

    script.async = true;
    script.defer = true;

    script.onerror = () => {
      reject(new Error("Google Maps script failed to load."));
    };

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

export default function DynamicMap({
  apiKey,
  zoom = 16,
  height = "500px",
  className = "",
}: StepMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function initMap() {
      try {
        setStatus("loading");
        setErrorMessage("");

        await loadGoogleMaps(apiKey);

        if (cancelled || !mapRef.current || !window.google?.maps) return;

        const { Map, InfoWindow } = (await window.google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;
        const { Geocoder } = (await window.google.maps.importLibrary(
          "geocoding"
        )) as google.maps.GeocodingLibrary;

        await window.google.maps.importLibrary("marker");

        const geocoder = new Geocoder();
        const position = await geocodeAddress(geocoder, STEP_LOCATION.address);

        const map = new Map(mapRef.current, {
          center: position,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          gestureHandling: "greedy",
        });

        const marker = new window.google.maps.Marker({
          position,
          map,
          title: STEP_LOCATION.title,
        });

        const infoWindow = new InfoWindow({
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 250px; padding: 4px;">
              <strong style="display: block; font-size: 15px; margin-bottom: 6px; color: #111827;">
                ${STEP_LOCATION.title}
              </strong>

              <p style="font-size: 13px; color: #4b5563; margin: 0 0 8px;">
                ${STEP_LOCATION.description}
              </p>

              <p style="font-size: 12px; color: #6b7280; margin: 0;">
                ${STEP_LOCATION.address}
              </p>
            </div>
          `,
        });

        infoWindow.open({
          map,
          anchor: marker,
          shouldFocus: false,
        });

        marker.addListener("click", () => {
          infoWindow.open({
            map,
            anchor: marker,
            shouldFocus: false,
          });
        });

        setStatus("ready");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Google Maps could not be loaded."
        );
      }
    }

    initMap();

    return () => {
      cancelled = true;
    };
  }, [apiKey, zoom]);

  return (
    <div
      style={{ height }}
      className={`rounded-xl border-gray-200 bg-gray-100 relative w-full overflow-hidden border ${className}`}
    >
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        className="h-full w-full"
      />

      {status === "loading" && (
        <div className="inset-0 bg-gray-100 text-sm text-gray-500 absolute flex items-center justify-center">
          Loading Google Map…
        </div>
      )}

      {status === "error" && (
        <div className="inset-0 bg-gray-100 px-6 text-sm text-red-500 absolute flex items-center justify-center text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
