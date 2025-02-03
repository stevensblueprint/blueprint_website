import React from "react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex space-between flex-col min-h-[700px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:pr-16">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
          Non-Profit Organizations
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-center lg:text-left">
          We are passionate about leveraging our technical and consulting skills
          to support your organization’s mission, free of charge!
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton
            text="Email Us"
            redirect_url="mailto:sit.blueprint@gmail.com"
          />
          <comp.HeroButton text="See our Projects" redirect_url="/projects" />
        </div>
      </div>
      <div className="flex grow w-full justify-center pb-8">
        <img src="../../assets/vector/hands.svg" alt="hands" />
      </div>
    </section>
  );
}
