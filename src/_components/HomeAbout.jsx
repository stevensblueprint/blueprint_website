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
      <div className="flex flex-col absolute top-1/4 right-1/4 md:top-28 md:right-44 bg-primary text-white text-center sm:w-1/4 sm:p-4 sm:px-12">
        <h2 className="hidden font-bold sm:block md:text-4xl md:mb-12 md:mt-24">
          About Us
        </h2>
        <p className="hidden sm:block md:text-lg md:mb-12">
          Blueprint strives to make technology accessible and useful for those
          who create communities and promote public welfare.
        </p>
        <comp.Button
          style="font-bold px-2 py-1 md:text-xl md:mb-24"
          text="Learn More >"
          redirect_url="/about"
        />
      </div>
    </section>
  );
}
