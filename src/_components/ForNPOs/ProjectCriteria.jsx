import React from "https://esm.sh/react";

export default function ProjectCriteria ({ comp }) {
  return (
    <figure className="flex-col flex w-full lg:p-5 lg:max-w-[1280px]">
      <div className="m-24">
        <h1 className="text-4xl font-semibold pb-6"> What We're Looking For </h1>
        <div className="flex">
          <div className="flex flex-col w-7/12 pr-12">
            {/* Left Side Content */}
            <div className="flex">
              <div> <img className="size-1" src="../../assets/vector/higlobealt.svg" alt="Globe" /> </div>
              <div className="font-semibold text-3xl text-primary"> <p> {"Impact"} </p> </div>
            </div>
            <div> <p className="font-normal text-xl pb-2"> {"What is the purpose and goal of this project? Our team prioritizes projects that generate social impact and contribute to the greater community."} </p> </div>
            <div className="flex">
              <div> <img className="size-1" src="../../assets/vector/mdoutlinetimeline.svg" alt="Clock" /> </div>
              <div className="font-semibold text-3xl text-primary"> <p> {"Scope"} </p> </div>
            </div >
            <div> <p className="font-normal text-xl pb-2"> {"Is this project feasible within our timeline? We want to adhere to your deadlines while delivering high-quality results in a reasonable time frame."} </p> </div>
            <div className="flex">
              <div> <img className="size-1" src="../../assets/vector/hilightbulb.svg" alt="Clock" /> </div>
              <div className="font-semibold text-3xl text-primary"> <p> {"Challenge"} </p> </div>
            </div>
            <div> <p className="font-normal text-xl pb-2"> {"What technical areas of expertise does this project require? We love challenging ourselves and learning new skills, but we also want to ensure that our projects fit with our core capabilities."} </p> </div>
          </div>
          <div className="flex grow relative justify-center items-center">
            {/* Right Side Content */}
            <div className="w-96 h-80">
              <div className="z-10 absolute w-72 h-44 bg-primary rounded-2xl"> 
                <p className="text-white py-7 px-8"> {"Wow! Blueprint is amazing! Wow! Blueprint is amazing! Wow! Blueprint is amazing! Wow! Blueprint is amazing! Wow! Blueprint is amazing!"} </p></div>
              <div className="z-0 absolute left-1/4 bottom-1/3 w-72 h-44 bg-sky-100 rounded-2xl"> 
                <div className="absolute bottom-3 left-8">
                <p> {"- Definitely Real, NPO"} </p></div>
                </div>
            </div>
          </div>
      </div>
      <div>
        <div className="flex justify-center pt-20">
          <p className="text-center text-4xl font-semibold max-w-3xl text-primary"> {"Want to get in touch with us? Reach out at sit.blueprint@gmail.com"} </p>
        </div>
        <div className="flex justify-center py-12">
            <comp.Button
              style={
                "block lg:px-8 px-8 lg:py-2 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"
              }
              text={"Download our proposal template"}
              redirect_url={"http://localhost:3000/projects/"}
            />
          </div>
      </div>
    </div>
  </figure>
  );
}
