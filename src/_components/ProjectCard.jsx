import React from "https://esm.sh/react@19.0.0";

export default function ProjectCard({
  name_organization,
  image_url,
  description,
  project_tag,
  redirect_url,
}) {
  return (
    <figure className="flex-col flex w-full border border-black rounded-lg lg:p-5 p-8 lg:max-w-[445px]">
      <div className="h-36 flex justify-center items-center w-full">
        <img
          src={image_url}
          alt={`${name_organization} Image`}
          className="h-24 w-auto object-contain lg:max-w-[315px]"
        />
      </div>
      <figcaption className="flex flex-col justify-between h-full">
        <div>
          <h1 className="font-semibold lg:text-2xl text-5xl mt-4 lg:my-3">
            {name_organization}
          </h1>
          <p className="bg-primary px-2 py-1 max-w-max my-3 rounded-md text-white lg:text-xs text-lg font-medium">
            {project_tag}
          </p>
          <p
            className="line-clamp-6 max-sm:w-full lg:text-xl text-3xl lg:leading-6 overflow-hidden"
            style={{ maxHeight: "6em" }}
          >
            {description}
          </p>
        </div>
        <p className="text-center-2xl lg:text-2xl text-2xl text-primary hover:underline text-center py-4">
          <a href={redirect_url}>Learn More</a>
        </p>
      </figcaption>
    </figure>
  );
}
