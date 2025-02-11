import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col min-h-[700px] lg:flex-row lg:items-center overflow-hidden bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:w-1/2 lg:pr-20">
        <h1 className="font-bold text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-left">
          We are the Stevens Institute of Technology chapter of Blueprint that
          develops pro-bono software for non-profit organizations and promotes
          tech for social good.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton
            text="Follow our Instagram"
            redirect_url="https://instagram.com/stevensblueprint"
            openInNewTab
          />
          <comp.HeroButton text="See our projects" redirect_url="/projects" />
        </div>
      </div>
      <div className="flex grow w-full lg:w-1/2 justify-center pb-8 md:pb-12">
        <img
          src="/assets/photos/stock_photo_working.jpg"
          alt="A photo of Blueprint members hard at work"
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
