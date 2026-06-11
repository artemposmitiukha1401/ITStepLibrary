"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroImage = {
  id: number;
  src: string;
  title: string;
  description?: string;
};

const images: HeroImage[] = [
  {
    id: 1,
    src: "/1.png",
    title: "Explore New Experiences",
    description: "Discover something unforgettable today.",
  },
  {
    id: 2,
    src: "/2.png",
    title: "Feel the Adventure",
    description: "Step into a world full of emotions.",
  },
  {
    id: 3,
    src: "/3.png",
    title: "Create Real Memories",
    description: "Perfect moments start here.",
  },
  {
    id: 4,
    src: "/4.png",
    title: "Create Real Memories",
    description: "Perfect moments start here.",
  },
  {
    id: 5,
    src: "/5.png",
    title: "Create Real Memories",
    description: "Perfect moments start here.",
  },
  {
    id: 6,
    src: "/6.png",
    title: "Create Real Memories",
    description: "Perfect moments start here.",
  },
];

const HeroGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden rounded-3xl">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />

          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            {images[currentIndex].title}
          </h1>

          {images[currentIndex].description ? (
            <p className="mt-4 text-xl text-white/90 md:text-3xl">
              {images[currentIndex].description}
            </p>
          ) : null}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-2xl text-white backdrop-blur-md transition hover:bg-white/40"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-2xl text-white backdrop-blur-md transition hover:bg-white/40"
        aria-label="Next image"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroGallery;