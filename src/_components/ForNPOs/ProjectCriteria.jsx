import React from "react";

export default function ProjectCriteria({ projectCriteria, testimonial }) {
  return (
    <figure className="flex-col flex w-full py-8 lg:py-16 px-8 lg:px-40">
      <h1 className="text-3xl lg:text-4xl font-bold pb-6">
        {" "}
        What We're Looking For{" "}
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          {projectCriteria.map((criteria, index) => (
            <div key={index}>
              <div className="flex">
                <div>
                  <img
                    className="pr-3"
                    src={`../../${criteria.iconPath}`}
                    alt={criteria.title}
                  />
                </div>
                <div className="font-semibold text-2xl lg:text-3xl text-primary">
                  <p>{criteria.title}</p>
                </div>
              </div>
              <div>
                <p className="font-normal text-xl pb-2">
                  {criteria.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Side Content */}
        <div className="flex block sm:pt-8 pb-24 lg:pb-24 lg:w-1/2">
          <div className="pt-12 sm:pt-0 sm:pl-24 w-[calc(100%-48px)] sm:w-3/4 min-h-60 self-center">
            <div className="relative bg-primary rounded-2xl md:min-w-[400px]">
              <p className="text-white py-7 px-8 italic">{testimonial.text}</p>
              <div className="-z-10 absolute left-12 sm:-bottom-14 -bottom-20 h-full w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
                <p className="absolute bottom-4 left-6 font-bold p-1">
                  - {testimonial.npo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
