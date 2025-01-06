import React from "https://esm.sh/react";

export default function HomeAbout({ comp }) {
  return (
    <section className="relative">
      <div>
        <img
          src="../../assets/vector/bulb_art.svg"
          alt="about"
          className="w-full"
        />
      </div>
      <div className="flex flex-col absolute top-1/4 right-12 bg-primary text-white text-center">
        <h2 className="hidden">About Us</h2>
        <p className="hidden">
          Blueprint strives to make technology accessible and useful for those
          who create communities and promote public welfare.
        </p>
        <comp.Button style="font-bold px-2 py-1" text="Learn More >" />
      </div>
    </section>
  );
}
