import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col min-h-[700px] lg:flex-row lg:items-center overflow-hidden bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:w-1/2 lg:pr-20">
        <h1 className="font-bold text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16">
          Projects
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14">
          All of our work is open source to maintain transparency and
          accessiblity. We believe in the importance of building technology that
          connects and gives back to the community.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton
            redirect_url={"https://github.com/stevensblueprint/"}
            text={"View Our Github"}
          />
          <comp.HeroButton redirect_url={"/students"} text={"Work With Us"} />
        </div>
      </div>
      <div className="flex grow w-full lg:w-1/2 justify-center pb-8 md:pb-12">
        <img
          src="/assets/clip_art/ProjectHeroIcon.svg"
          alt="projects-banner-image"
        />
      </div>
    </section>
  );
}
