"use client";

import dynamic from "next/dynamic";
import type { StepMapProps } from "@/components/DynamicMap/DynamicMap";

const DynamicMap = dynamic<StepMapProps>(
  () => import("@/components/DynamicMap/DynamicMap"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl bg-gray-100 text-sm text-gray-400 flex h-[500px] w-full items-center justify-center">
        Loading map…
      </div>
    ),
  }
);

interface MapClientProps {
  height?: string;
}

export default function MapClient({ height = "500px" }: MapClientProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div
        style={{ height }}
        className="rounded-xl bg-gray-100 text-sm text-red-500 flex w-full items-center justify-center"
      >
        Google Maps API key is missing.
      </div>
    );
  }

  return <DynamicMap apiKey={apiKey} zoom={16} height={height} />;
}