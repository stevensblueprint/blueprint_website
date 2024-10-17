import React from "https://esm.sh/react";

export default function BlogCard({ name_post, image_url, date, project_tag }) {
  return (
    <div>
      <div className="h-auto flex justify-center items-center w-full">
        <img
          src={image_url}
          alt={`${name_post} Image`}
          className="h-full rounded-lg"
        />
      </div>
      <div class="flex space-x-2">
        <h1 className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mt-4 lg:my-3">
          {name_post}
        </h1>
        <p className="bg-primary px-2 py-1 max-w-max my-4 rounded-md text-white lg:text-xs text-lg font-medium">
          {project_tag}
        </p>
      </div>
      <div class="flex space-x-2">
        <img
          src="../assets/vector/clock.svg"
          alt="clock"
          class="h-4 w-4 my-1"
        />
        <p className="mb-1">{date}</p>
      </div>
    </div>
  );
}
