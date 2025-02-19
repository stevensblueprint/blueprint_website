import React from "react";

export default function Hero({ comp }) {
  const heroButtons = [
    { text: "Work with us", url: "/for-npos" },
    { text: "Join our team", url: "/students" },
    { text: "Support our mission", url: "/partners" },
  ];

  return (
    <section className="flex flex-col grow md:min-h-[700px] md:flex-row items-center justify-between bg-primary text-white p-6 md:p-0 overflow-hidden">
      <div className="hidden w-full md:flex md:items-center md:justify-start">
        <img src="../../assets/vector/gear.svg" alt="gear" className="pt-24" />
      </div>
      <div className="flex flex-col w-full items-center justify-center lg:text-center">
        <h1 className="font-bold text-4xl w-full lg:text-5xl tracking-wide mb-4 md:mb-16">
          Tech for Social Good
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-14">
          We're a team of students from Stevens Institute of Technology that
          provides technical solutions for non-profit organizations.
        </p>
        <div className="flex space-x-2 md:space-x-4 pb-4 w-full lg:w-auto">
          {heroButtons.map((button) => {
            return (
              <comp.HeroButton text={button.text} redirect_url={button.url} />
            );
          })}
        </div>
      </div>
      <div className="hidden w-full md:flex md:items-center md:justify-end">
        <img
          src="../../assets/vector/gear.svg"
          alt="gear"
          className="rotate-180 md:pt-72"
        />
      </div>
    </section>
  );
}
