import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col min-h-[700px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white">
      <div className="flex px-6 md:px-12 lg:32 grow w-full justify-center pb-12">
        <img
          src="../../assets/vector/gear_left.svg" // FIXME: Avoid absolute path?
          alt="gear"
        />
      </div>
      <div className="px-6 md:px-12 lg:px-32 py-8 md:py-16 lg:py-0 w-full">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-center">
          Tech for Social Good
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-center lg:text-center">
          We're a team of students from Stevens Institute of Technology that
          provides technical solutions for non-profit organizations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center">
          <comp.Button
            style="py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text bg-white text-primary font-semibold text-base md:text-lg inline-flex hover:bg-primary hover:text-white"
            text="Work with us"
            redirect_url="/for-npos"
          />
          <comp.Button
            style="py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text bg-white text-primary font-semibold text-base md:text-lg inline-flex hover:bg-primary hover:text-white"
            text="Join our team"
            redirect_url="/students"
          />
          <comp.Button
            style="py-2 px-4 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text bg-white text-primary font-semibold text-base md:text-lg inline-flex hover:bg-primary hover:text-white"
            text="Support our mission"
            redirect_url="/partners"
          />
        </div>
      </div>
      <div className="flex px-6 md:px-12 lg:32 grow w-full justify-center pb-12">
        <img
          src="../../assets/vector/gear_left.svg" // FIXME: Avoid absolute path?
          alt="gear"
        />
      </div>
    </section>
  );
}
