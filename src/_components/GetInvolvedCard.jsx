import React from "react";

export default function GetInvolvedCard({
  title,
  description,
  icon_url,
  redirect_url,
}) {
  return (
    <a
      href={redirect_url}
      className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow md:w-1/3 rounded-lg lg:p-5 p-5 lg:h-[450px]"
    >
      <div className="h-36 flex justify-center items-center w-full shrink-0">
        <img
          src={icon_url}
          alt={`${title} Image`}
          className="h-full object-contain lg:max-w-[315px]"
        />
      </div>
      <figcaption className="flex flex-col flex-1">
        <div className="flex-1">
          <h1 className="font-semibold lg:text-2xl text-3xl mt-4 mb-3">
            {title}
          </h1>
          <p
            className="line-clamp-6 max-sm:w-full lg:text-xl text-md lg:leading-6 overflow-hidden"
            style={{ maxHeight: "6em" }}
          >
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-center-2xl lg:text-2xl text-2xl text-primary hover:underline hover:font-bold text-center py-4">
            Learn More
          </p>
        </div>
      </figcaption>
    </a>
  );
}
