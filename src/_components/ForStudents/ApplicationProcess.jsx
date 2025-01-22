import React from "react";

export default function ApplicationProcess({ comp, timelineContent }) {
  return (
    <section className="flex flex-col items-center px-12 pb-12 max-lg:px-12 max-md:w-full max-md:px-4">
      <h1 className="text-4xl text-center">
        <strong>Application Process</strong>
      </h1>
      {/* Web View */}
      <comp.ForStudents.ApplicationProcessTimeline
        comp={comp}
        timelineContent={timelineContent}
      />
      {/* Mobile View */}
      <comp.ForStudents.ApplicationProcessTimelineMobile
        comp={comp}
        timelineContent={timelineContent}
      />
    </section>
  );
}
