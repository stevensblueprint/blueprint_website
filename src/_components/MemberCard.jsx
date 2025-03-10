import React from "react";

export default function MemberCard({ name, role, image_url, linkedin }) {
  const defaultImage = "../assets/logos/logo.png";
  return (
    <figure className="flex flex-col items-center lg:p-4">
      <img
        className="rounded-lg mb-4 object-cover object-center lg:w-32 lg:h-32 w-40 h-40"
        src={image_url ? image_url : defaultImage}
        alt="member image"
      />
      <figcaption className="text-center">
        <div className="font-semibold lg:text-base text-xl lg:w-32 w-40">
          {name}
        </div>
        <div className="lg:text-base text-xl">{role}</div>
      </figcaption>
      {linkedin && (
        <a href={linkedin} target="_blank">
          <img
            className="mb-4 mt-1 object-cover object-center w-8 h-8"
            src="../assets/logos/linkedin.png"
            alt="LinkedIn Logo"
          />
        </a>
      )}
    </figure>
  );
}
