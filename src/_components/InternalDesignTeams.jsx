import React from "https://esm.sh/react";

export default function InternalDesignTeam({ comp }) {
  return (
    <section>
      <div className="flex items-start justify-center align-center pt-12 px-12 max-lg:px-12 max-md:w-full max-md:px-4 gap-14">
        <div>
          <img
            className="object-cover"
            src={"../../assets/clip_art/internal_teams.svg"}
            alt="Internal Teams"
          />
        </div>
        <div className="flex w-7/12 flex-col gap-6">
          <h2 className="font-bold text-3xl">Internal Teams</h2>
          <span className="bg-primary text-white self-start px-2 rounded-md text-xs">
            No Application
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
        <h1 className="text-[40px] text-center text-primary font-bold w-3/5 my-16">
          Have any questions? Reach out at sit.blueprint@gmail.com{" "}
          <img
            className="object-cover inline h-8 w-8"
            src={"../../assets/clip_art/AiOutlineMail.svg"}
            alt="Email"
          />
        </h1>
      </div>
    </section>
  );
}
