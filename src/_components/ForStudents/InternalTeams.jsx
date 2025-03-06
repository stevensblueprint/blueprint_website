import React from "react";

export default function InternalTeams() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start justify-center align-center pt-12 px-8 lg:px-40 gap-4 lg:gap-14">
        <img
          className="object-cover"
          src={"../../assets/clip_art/internal_teams.svg"}
          alt="Internal Teams"
        />
        <div className="flex lg:w-7/12 flex-col gap-6">
          <h2 className="font-bold text-3xl lg:text-4xl">Internal Teams</h2>
          <span className="bg-primary px-2 py-1 max-w-max rounded-md text-white text-lg font-medium">
            NO APPLICATION
          </span>
          <div>
            <h2 className="text-2xl mb-3.5 font-bold">Tech Team</h2>
            <p className="text-xl">
              <strong>Purpose: </strong>
              Apply your coding skills and support internal development
              projects!
            </p>
            <p className="text-xl">
              <strong>Goal: </strong>
              Help run Blueprint as an organization while also
              learning/improving programming skills!
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-3.5 font-bold">Design Team</h2>
            <p className="text-xl">
              <strong>Purpose: </strong>
              Support the design process in the tech team and project teams!
            </p>
            <p className="text-xl">
              <strong>Goal: </strong>
              Help strengthen collaboration between designers and developers
              while also learning/improving design skills!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-12 max-lg:px-12 max-md:w-full max-md:px-4">
        <h1 className="text-3xl lg:text-4xl text-center text-primary font-bold px-8 lg:px-0 lg:w-3/5 my-12 lg:my-16">
          Have any questions? Reach out at{" "}
          <a href="mailto:blueprint@stevens.edu" className="inline-block">
            blueprint@stevens.edu
            <img
              className="object-cover inline h-8 w-8 ml-2"
              src={"../../assets/clip_art/AiOutlineMail.svg"}
              alt="Email"
            />
          </a>
        </h1>
      </div>
    </section>
  );
}
