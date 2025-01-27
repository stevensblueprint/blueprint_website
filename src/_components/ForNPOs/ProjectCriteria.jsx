import React from "react";

export default function ProjectCriteria({ comp, testimonial }) {
  return (
    <figure className="flex-col flex w-full py-16 px-12 lg:px-40">
      <h1 className="text-4xl font-bold pb-6"> What We're Looking For </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2">
          {/* Left Side Content */}
          <div className="flex">
            <div>
              {" "}
              <img
                className="pr-3"
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
                className="pr-3"
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
                className="pr-3"
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
        <div className="flex sm:pt-8 sm:pb-24 md:w-1/2">
          {/* Right Side Content */}
          <div className="pt-12 sm:pt-0 sm:pl-24 w-3/4 h-60 justify-center items-center">
            <div className="z-00 relative bg-primary rounded-2xl md:w-full md:min-w-[400px]">
              <p className="text-white py-7 px-8 italic">{testimonial.text}</p>
              <div className="-z-10 absolute left-24 -bottom-12 w-11/12 h-full sm:w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
                <p className="absolute bottom-4 left-6 font-bold">
                  - {testimonial.npo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center pt-12 md:pt-20">
          <p className="text-center text-4xl font-semibold max-w-3xl text-primary">
            Want to get in touch with us? Reach out at{" "}
            <a href="mailto:sit.blueprint@gmail.com" className="block">
              sit.blueprint@gmail.com
              <img
                className="object-cover inline h-8 w-8 ml-2"
                src={"../../assets/clip_art/AiOutlineMail.svg"}
                alt="Email"
              />
            </a>
          </p>
        </div>
        <div className="flex justify-center pt-12">
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
    </figure>
  );
}
