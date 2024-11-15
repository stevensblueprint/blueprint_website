import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] bg-primary relative overflow-hidden">
      <div className="lg:w-7/12 px-60 text-negative max-lg:w-full max-lg:px-8">
        <h1 className="lg:text-4xl text-7xl mb-12 lg:px-0 px-10">
          <strong>Projects</strong>
        </h1>
        <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10">
          All of our work is open source to maintain transparency and
          accessibility. We believe in the importance of building technology
          that connects and gives back to the community.
        </p>
        <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-8 max-lg:w-full max-lg:items-center">
          <comp.Button
            style={
              "lg:p-4 lg:m-0 p-5 m-10 lg:rounded-md rounded-xl bg-white text-primary font-bold lg:text-base text-4xl"
            }
            redirect_url={
              "https://github.com/stevensblueprint/blueprint_website"
            }
            text={"View Our Github"}
          />
          <comp.Button
            style={
              "lg:p-4 lg:m-0 p-5 m-10 lg:rounded-md rounded-xl bg-white text-primary font-bold lg:text-base text-4xl"
            }
            redirect_url="/community"
            text={"Work with us"}
          />
        </div>
      </div>
      <div className="lg:w-5/12 lg:pr-20 lg:pl-0 px-10 flex items-center justify-center py-8">
        <div className="max-lg:p-8 lg:rounded-2xl lg:overflow-hidden">
          <image
            src="../../assets/vector/projects_hero_clipart.svg"
            alt="A photo of student Blueprint members"
            className="w-full lg:h-full lg:object-cover max-lg:h-auto max-lg:object-contain max-lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
