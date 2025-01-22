import React from "react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex space-between flex-col min-h-[700px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white px-12 lg:px-40 ">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:pr-20">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
          Non-Profit Organizations
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-center lg:text-left">
          We are passionate about leveraging our technical and consulting skills
          to support your organization’s mission, free of charge!
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <comp.Button
            style="py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
            text="Email Us"
            redirect_url="mailto:sit.blueprint@gmail.com"
          />
          <comp.Button
            style="py-2 px-6 md:px-6 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
            text="See our Projects"
            redirect_url="../../projects" // FIXME: How can we avoid hardcoding the URL?
          />
        </div>
      </div>
      <div className="flex grow w-full justify-center pb-8">
        <img
          src="../../assets/vector/hands.svg" // FIXME: Avoid absolute path?
          alt="hands"
        />
      </div>
    </section>
  );
}
