import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col min-h-[700px] lg:flex-row lg:items-center overflow-hidden bg-primary text-white">
      <div className="px-6 md:px-12 lg:pl-32 py-8 md:py-16 lg:py-0 w-full">
        <h1 className="font-bold text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
          About Us
        </h1>
        <p className="text-[25px] md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-left">
          We are the Stevens Institute of Technology chapter of Blueprint that
          develops pro-bono software for non-profit organizations and promotes
          tech for social good.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <comp.Button
            style="py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
            text="Follow our Instagram"
            redirect_url="https://instagram.com/stevensblueprint"
            openInNewTab
          />
          <comp.Button
            style="py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
            text="See our projects"
            redirect_url="/projects"
          />
        </div>
      </div>
      <div className="flex px-6 md:px-12 lg:32 grow w-full justify-center pb-12">
        <image
          src="/assets/events/google_event_1_cropped.jpg"
          alt="A photo of Blueprint members at a Google Event in New York City"
          className="rounded-[20px]"
        />
      </div>
    </section>
  );
}
