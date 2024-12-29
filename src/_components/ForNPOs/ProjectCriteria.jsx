import React from "https://esm.sh/react";

export default function ProjectCriteria({ comp }) {
  return (
    <figure className="flex-col flex w-full lg:px-24 xl:px-64">
      <div className="m-24">
        <h1 className="text-4xl font-semibold pb-6">
          {" "}
          What We're Looking For{" "}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            {/* Left Side Content */}
            <div className="flex">
              <div>
                {" "}
                <img
                  className="size-1"
                  src="../../assets/vector/higlobealt.svg"
                  alt="Globe"
                />{" "}
              </div>
              <div className="font-semibold text-3xl text-primary">
                {" "}
                <p> {"Impact"} </p>{" "}
              </div>
            </div>
            <div>
              {" "}
              <p className="font-normal text-xl pb-2">
                {" "}
                {
                  "What is the purpose and goal of this project? Our team prioritizes projects that generate social impact and contribute to the greater community."
                }{" "}
              </p>{" "}
            </div>
            <div className="flex">
              <div>
                {" "}
                <img
                  className="size-1"
                  src="../../assets/vector/mdoutlinetimeline.svg"
                  alt="Clock"
                />{" "}
              </div>
              <div className="font-semibold text-3xl text-primary">
                {" "}
                <p> {"Scope"} </p>{" "}
              </div>
            </div>
            <div>
              {" "}
              <p className="font-normal text-xl pb-2">
                {" "}
                {
                  "Is this project feasible within our timeline? We want to adhere to your deadlines while delivering high-quality results in a reasonable time frame."
                }{" "}
              </p>{" "}
            </div>
            <div className="flex">
              <div>
                {" "}
                <img
                  className="size-1"
                  src="../../assets/vector/hilightbulb.svg"
                  alt="Clock"
                />{" "}
              </div>
              <div className="font-semibold text-3xl text-primary">
                {" "}
                <p> {"Challenge"} </p>{" "}
              </div>
            </div>
            <div>
              {" "}
              <p className="font-normal text-xl pb-2">
                {" "}
                {
                  "What technical areas of expertise does this project require? We love challenging ourselves and learning new skills, but we also want to ensure that our projects fit with our core capabilities."
                }{" "}
              </p>{" "}
            </div>
          </div>
          <div className="flex md:w-5/12 justify-center items-center">
            {/* Right Side Content */}
            <div className="pt-12 md:pt-0 md:pl-12 w-96 h-60">
              <div className="z-00 relative max-w-64 bg-primary rounded-2xl">
                <p className="text-white py-7 px-8">
                  {" "}
                  {
                    "Wow! Blueprint is amazing! Blueprint is amazing! Wow! Blueprint is amazing! Wow! Blueprint is amazing!"
                  }{" "}
                </p>
                <div className="-z-10 absolute left-24 -bottom-12 w-10/12 h-full bg-sky-100 rounded-2xl">
                  <p className="absolute bottom-4 left-6">
                    {" "}
                    {"- Definitely Real, NPO"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center pt-12 md:pt-20">
            <p className="text-center text-4xl font-semibold max-w-3xl text-primary">
              {" "}
              {
                "Want to get in touch with us? Reach out at sit.blueprint@gmail.com"
              }{" "}
            </p>
          </div>
          <div className="flex justify-center py-12">
            <comp.Button
              style={
                "block lg:px-8 px-8 lg:py-2 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"
              }
              text={"Download our proposal template"}
              redirect_url={"../../assets/docs/NPO_Project_Proposal.pdf"}
              download={"NPO_Project_Proposal.pdf"}
            />
          </div>
        </div>
      </div>
    </figure>
  );
}
