import React from "react";

export default function ProjectTimeline({ projectTimeline }) {
  return (
    <section
      id="project-timeline"
      className="grow bg-neg text-black px-12 lg:px-40 pt-16 lg:pt-24 pb-8"
    >
      <div className="">
        <h1 className="text-4xl font-bold pb-8">Our Project Timeline</h1>
      </div>
      <div className="grid lg:grid-cols-3">
        {projectTimeline.map((phase, index) => {
          return (
            <div key={index} className="py-8 lg:pr-12">
              <h2 className="pb-4 text-3xl text-primary font-bold">
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
