import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="flex flex-col min-h-[700px] lg:flex-row lg:items-center overflow-hidden bg-primary text-white">
      <div className="px-6 md:px-12 lg:pl-32 xl:px-32 py-8 md:pt-16 lg:py-0 w-full flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-center lg:text-left">
          We are the Stevens Institute of Technology chapter of Blueprint that
          develops pro-bono software for non-profit organizations and promotes
          tech for social good.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-4 md:gap-6">
          <comp.Button
            style="bg-negative text-primary font-bold py-2 px-4 md:px-8 rounded-md min-w-max text-base md:text-lg inline-flex justify-center items-center"
            text="Follow our Instagram"
            redirect_url="https://instagram.com/stevensblueprint"
            openInNewTab
          />
          <comp.Button
            style="bg-negative text-primary font-bold py-2 px-4 md:px-8 rounded-md min-w-[191px] text-base md:text-lg inline-flex justify-center items-center"
            text="See our projects"
            redirect_url="/projects"
          />
        </div>
      </div>
      <div className="flex px-6 lg:pr-12 lg:pl-0 lg:py-0 xl:px-12 grow w-full justify-center xl:py-12 2xl:px-32 2xl:py-32 md:px-32 md:py-16">
        <image
          src="../assets/events/google_event_1.jpg"
          alt="A photo of Blueprint members at a Google Event in New York City"
          className="rounded-[20px]"
        />
      </div>
    </section>
  );
}
