import React from "https://esm.sh/react";

export default function ProjectTimeline() {
  return (
    <section className="grow min-h-[550px] bg-neg text-black lg:px-20 py-16">
      <div className="">
        <h1 className=" font-bold text-3xl pl-12 pb-8">Our Project Timeline</h1>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="px-12 py-8">
          <h2 className="pb-4 text-xl text-primary font-bold">
            Phase 1: Introductions
          </h2>
          <p>
            In the initial stages of our project timeline, we'd like to meet and
            discuss your organization's mission, the project idea, and what we
            can do to help. We ask that organizations provide a proposal that
            details the requested project. Not everything has to be fleshed out,
            since we are open to collaborative scoping, but we would like as
            much detail as possible so we can decide whether or not this project
            is feasible for our team.
          </p>
        </div>
        <div className="px-12 py-8 lg:border-x-[1px] border-black">
          <h2 className="pb-4 text-xl text-primary font-bold">
            Phase 2: Development
          </h2>
          <p>
            To start the development process, we pair our organizations with the
            teams that will deliver the project by the end of the timeline.
            There is one project team per organization, composed of technical
            leads, project managers, software developers, and user experience
            designers. Organization representatives can expect to receive status
            updates and feedback every 2 weeks during scheduled meetings
            throughout the year.
          </p>
        </div>
        <div className="px-12 py-8">
          <h2 className="pb-4 text-xl text-primary font-bold">
            Phase 3: Handoff
          </h2>
          <p>
            Once we reach the end of the timeline, our project teams would have
            created a minimum viable product (MVP) through a constant feedback
            loop between our team members and organization. The objective of the
            final phase is to provide instructions on how to deploy the provided
            software and conduct basic maintenance going forward. Blueprint is
            not responsible for maintaining the project after the collaboration
            period ends.
          </p>
        </div>
      </div>
    </section>
  );
}
