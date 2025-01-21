import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="flex flex-col min-h-[700px] lg:flex-row lg:items-center bg-primary text-white">
      <div className="px-6 md:px-12 lg:px-32 py-8 md:py-16 lg:py-0 w-full">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
          Projects
        </h1>
        <p className="lg:text-2xl mb-12 lg:px-0 px-10 text-center lg:text-left">
          All of our work is open source to maintain transparency and
          accessiblity. We believe in the importance of building technology that
          connects and gives back to the community.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton
            redirect_url={"https://github.com/stevensblueprint/"}
            text={"View Our Github"}
          />
          <comp.HeroButton redirect_url={"/students"} text={"Work With Us"} />
        </div>
      </div>
      <div className="flex px-6 md:px-12 grow w-full justify-center pb-12">
        <img
          src="../../assets/logos/project-img.png"
          alt="projects-banner-image"
        />
      </div>
    </section>
  );
}
