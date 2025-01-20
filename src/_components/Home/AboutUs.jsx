import React from "https://esm.sh/react";

export default function AboutUs({ comp, about_title, about_text }) {
  return (
    <section className="relative">
      <div>
        <img
          src="../../assets/vector/bulb_art.svg"
          alt="about"
          className="w-full"
        />
      </div>
      <div className="absolute right-[15%] top-[15%] w-[25%]">
        <div
          className="flex flex-col relative z-20
    rounded-xl
    bg-primary text-white text-center p-4"
        >
          <h2 className="hidden font-bold lg:block text-2xl md:text-4xl my-6 md:mb-12">
            {about_title}
          </h2>
          <p className="hidden lg:block text-base md:text-lg mb-6 md:mb-12">
            {about_text}
          </p>
          <comp.Button
            style="font-bold px-2 py-1 md:text-xl"
            text="Learn More >"
            redirect_url="/about"
          />
        </div>
        <div className="absolute -inset-6 rounded-xl blur-md bg-primary z-10"></div>
      </div>
    </section>
  );
}
