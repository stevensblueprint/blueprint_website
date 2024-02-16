import React from "https://esm.sh/react";

export default function MemberCard({ name, role, image_url }) {
  return (
    <figure className="flex flex-col items-center p-4">
      <img
        className="rounded-lg mb-4 object-cover object-center lg:w-32 lg:h-32 w-80 h-80"
        src={image_url}
        alt="member image"
      />
      <figcaption className="text-center">
        <div className="font-semibold lg:text-base text-3xl">{name}</div>
        <div className="lg:text-base text-3xl">{role}</div>
      </figcaption>
    </figure>
  );
}
