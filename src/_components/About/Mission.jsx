import React from "https://esm.sh/react";

export default function Mission({ comp }) {
  return (
    <section>
      <section className="flex flex-col px-8 lg:items-center justify-center gap-y-2 lg:gap-y-6 bg-white">
        <h1 className="text-4xl lg:text-5xl pt-16 lg:pt-24">
          <strong>Our Mission</strong>
        </h1>
        <p className="text-xl lg:text-3xl lg:text-center max-w-3xl py-8">
          At Blueprint, we strive to make technology accessible and useful for
          those who create communities and promote public welfare.
        </p>
      </section>
      <comp.Carousel
        array_of_images={[
          "../assets/photos/cs_carnival.jpg",
          "../assets/photos/google_event.jpg",
          "../assets/photos/eboard_merch.jpg",
          "../assets/photos/google_event_1.jpg",
        ]}
      />
    </section>
  );
}
