import React from "https://esm.sh/react";

export default function OurMission({ comp }) {
  return (
    <section>
      <section className="flex flex-col items-center justify-center pt-20 pb-10 gap-y-6 bg-white">
        <h1 className="lg:text-5xl text-7xl">
          <strong>Our Mission</strong>
        </h1>
        <p className="text-center text-5xl lg:text-3xl text-3xl mb-4 lg:px-14 px-24 py-8">
          At Blueprint, we strive to make technology <br /> accessible for those
          who promote public <br /> welfare and give back to our communities.
        </p>
      </section>
      <comp.Carousel
        array_of_images={[
          "../assets/events/google_event.jpg",
          "../assets/events/google_event_1.jpg",
          "../assets/events/ebm.jpeg",
          "../assets/events/google_event_2.jpg",
          "../assets/events/spring_kickoff.png",
        ]}
      />
    </section>
  );
}
