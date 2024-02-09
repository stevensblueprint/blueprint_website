import React from "https://esm.sh/react";

export default function ProjectCard({
  name_organization,
  image_url,
  description,
  redirect_url,
  project_tag,
}) {
  return (
    <figure className="flex flex-col w-full max-sm:w-full">
      <div
        className={`bg-[url(${image_url})] bg-contain bg-no-repeat bg-center h-40 rounded-xl relative`}
      >
        <div className="absolute top-0 right-0 m-4 bg-black/60 backdrop-blur-4xl text-white rounded-lg px-6 py-1 max-sm:left-0 max-sm:right-auto">
          {project_tag}
        </div>
      </div>
      <div className="p-4">
        <figcaption>
          <h1 className="font-bold lg:my-2 my-4 lg:text-2xl text-5xl">
            {name_organization}
          </h1>
          <p className="line-clamp-6 max-sm:w-full lg:text-base text-3xl">
            {description}
          </p>
        </figcaption>
        <div className="mt-2">
          <a
            className="text-primary font-semibold lg:text-lg text-3xl"
            href={redirect_url}
          >
            Read More
          </a>
        </div>
      </div>
    </figure>
  );
}
