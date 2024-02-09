import React from "https://esm.sh/react";

export default function ApplyCard({
  card_title,
  image_url,
  description,
  redirect_url,
  project_tag,
}) {
  return (
    <figure className="flex flex-col w-full border border-black rounded-xl overflow-hidden">
      <div
        className={`bg-[url(${image_url})] bg-cover bg-no-repeat bg-center h-64 w-full rounded-t-xl border border-black relative`}
      >
        <div
          className={`${project_tag ? "" : "hidden"} absolute top-0 right-0 m-4 bg-black/60 backdrop-blur-md text-white rounded-lg px-6 py-1`}
        >
          {project_tag}
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <figcaption>
          <h1 className="font-bold lg:my-2 my-4 lg:text-3xl text-5xl">
            {card_title}
          </h1>
          <p className="line-clamp-6 lg:text-base text-2xl">{description}</p>
        </figcaption>
        <div className="mt-4">
          <a
            className="text-primary font-semibold lg:text-base text-2xl"
            href={redirect_url}
          >
            Read More
          </a>
        </div>
      </div>
    </figure>
  );
}
