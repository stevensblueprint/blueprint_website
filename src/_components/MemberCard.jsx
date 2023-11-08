import React from "https://esm.sh/react";

export default function MemberCard({ name, role, image_url }) {
  return (
    <figure className="flex flex-col">
      <img
        className="rounded-md mb-4 w-40 basis-full max-sm:w-32"
        src={image_url}
        alt="member image"
      />
      <div className="font-semibold">{name}</div>
      <div>{role}</div>
    </figure>
  );
}
