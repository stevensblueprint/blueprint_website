import React from "https://esm.sh/react";

export default function ProjectCard({
  name_organization,
  image_url,
  description,
  redirect_url,
}) {
  return (
    <figure className="flex flex-col w-fit p-4 max-sm:w-full">
      <div
        className={`bg-[url(${image_url})] bg-cover bg-center w-full h-80 rounded-xl relative`}
      >
        <div className="absolute top-0 right-0 m-4 bg-black/60 backdrop-blur-4xl text-white rounded-lg px-6 py-1 max-sm:left-0 max-sm:right-auto">
          Placeholder info
        </div>
      </div>
      <figcaption>
        <h1 className="font-bold my-2 text-2xl">{name_organization}</h1>
        <p className="w-80 line-clamp-3 max-sm:w-full">{description}</p>
      </figcaption>
      <div className="mt-2">
        <a className="text-primary font-semibold text-lg" href={redirect_url}>
          Read More
        </a>
      </div>
    </figure>
  );
}
