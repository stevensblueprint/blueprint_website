import React from "https://esm.sh/react";

export default function MemberCard({ name, role, image_url }) {
  return (
    <figure className="flex flex-col items-center">
      <img
        className="rounded-md mb-4 object-cover object-center w-32 h-32 max-sm:w-32 max-sm:h-32"
        src={image_url}
        alt="member image"
      />
      <figcaption className="text-center">
        <div className="font-semibold">{name}</div>
        <div>{role}</div>
      </figcaption>
    </figure>
  );
}