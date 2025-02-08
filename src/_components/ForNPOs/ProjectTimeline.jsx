import React from "react";

export default function ProjectTimeline({ projectTimeline }) {
  return (
    <section
      id="project-timeline"
      className="grow bg-neg text-black px-8 lg:px-40 pt-16 lg:pt-24 pb-8"
    >
      <div className="">
        <h1 className="text-3xl lg:text-4xl font-bold pb-4 lg:pb-8">
          Our Project Timeline
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-x-24">
        {projectTimeline.map((phase, index) => {
          return (
            <div key={index} className="py-8">
              <h2 className="pb-4 text-2xl lg:text-3xl text-primary font-bold">
                {phase.title}
              </h2>
              <p className="text-xl">{phase.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
