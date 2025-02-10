import React from "https://esm.sh/react";

export default function Mission({ comp }) {
  return (
    <section>
      <section className="flex flex-col items-center justify-center pt-20 pb-10 gap-y-2 lg:gap-y-6 bg-white">
        <h1 className="text-4xl lg:text-5xl">
          <strong>Our Mission</strong>
        </h1>
        <p className="text-center text-xl lg:text-3xl mb-4 px-12 max-w-3xl py-8">
          At Blueprint, we strive to make technology accessible for those who
          promote public welfare and give back to our communities.
        </p>
      </section>
      <comp.Carousel
        array_of_images={[
          "../assets/photos/google_event.jpg",
          "../assets/photos/google_event_1.jpg",
          "../assets/photos/cs_carnival.jpg",
          // TODO: Add Eboard selfie, resize images
          "../assets/photos/google_event_2.jpg",
          "../assets/photos/stock_photo_working.jpg",
        ]}
      />
    </section>
  );
}
