import React from "https://esm.sh/react";

export default function ProjectCard({
  name_organization,
  image_url,
  description,
  project_tag,
}) {
  return (
    <figure className="flex-col flex w-full border border-black rounded-lg lg:p-5 p-8 lg:max-w-[445px]">
      <div className="h-36 flex justify-center items-center w-full">
        <img
          src={image_url}
          alt={`${name_organization} Image`}
          className="h-full object-contain lg:max-w-[315px]"
        />
      </div>
      <figcaption>
        <h1 className="font-semibold lg:text-2xl text-5xl mt-4 lg:my-3">
          {name_organization}
        </h1>
        <p className="bg-primary px-2 py-1 max-w-max my-3 rounded-md text-white lg:text-xs text-lg">
          {project_tag}
        </p>
        <p className="line-clamp-6 max-sm:w-full lg:text-xl text-3xl lg:leading-6">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}
