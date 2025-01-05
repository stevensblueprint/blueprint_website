import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="flex flex-col grow md:min-h-[700px] md:flex-row items-center justify-between bg-primary text-white p-6 md:p-0 overflow-hidden">
      <div className="hidden w-full md:flex md:items-center md:justify-start">
        <img src="../../assets/vector/gear.svg" alt="gear" className="pt-24" />
      </div>
      <div className="flex flex-col w-full items-center justify-center text-center md:mb-48">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl tracking-wide mb-4 md:mb-16">
          Tech for Social Good
        </h1>
        <p className="text-md sm:text-xl md:text-2xl mb-4 md:mb-14">
          We're a team of students from Stevens Institute of Technology that
          provides technical solutions for non-profit organizations.
        </p>
        <div className="flex space-x-2 md:space-x-4 pb-4">
          <comp.Button
            style="text-xs md:text-base text-center py-1 md:py-2 px-3 md:px-4 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
            text="Work with us"
            redirect_url="/for-npos"
          />
          <comp.Button
            style="text-xs md:text-base text-center py-1 md:py-2 px-3 md:px-4 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
            text="Join our team"
            redirect_url="/students"
          />
          <comp.Button
            style="text-xs md:text-base text-center py-1 md:py-2 px-3 md:px-4 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
            text="Support our mission"
            redirect_url="/partners"
          />
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
