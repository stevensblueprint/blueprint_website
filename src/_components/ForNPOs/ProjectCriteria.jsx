import React from "react";

export default function ProjectCriteria({ projectCriteria, testimonial }) {
  return (
    <figure className="flex-col flex w-full px-12 py-8 lg:py-16 lg:px-40">
      <h1 className="text-4xl font-bold pb-6"> What We're Looking For </h1>
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
                <div className="font-semibold text-3xl text-primary">
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
        <div className="flex hidden md:block sm:pt-8 sm:pb-24 md:w-1/2">
          <div className="pt-12 sm:pt-0 sm:pl-24 w-3/4 h-60 self-center">
            <div className="z-00 relative bg-primary rounded-2xl md:min-w-[400px]">
              <p className="text-white py-7 px-8 italic">{testimonial.text}</p>
              <div className="-z-10 absolute sm:left-12 sm:-bottom-12 sm:w-11/12 h-full sm:w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
                <p className="absolute sm:bottom-4 sm:left-6 font-bold">
                  - {testimonial.npo}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial on small screen sizes*/}
        <div className="md:hidden pt-4">
          <div className="bg-primary rounded-2xl text-white p-8 italic">
            {testimonial.text}
          </div>
          <div className="bg-sky-100 rounded-2xl p-4 font-bold">
            - {testimonial.npo}
          </div>
        </div>
      </div>
    </figure>
  );
}
