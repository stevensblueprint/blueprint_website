import React from "react";

export default function ValueCard({ value }) {
  return (
    <article className="w-full flex gap-5 flex-col lg:text-center text-pretty lg:w-1/2 sm:w-3/4">
      <img
        src={value.icon}
        alt={value.header}
        className="hidden lg:block w-1/8 mx-auto"
      />
      <h1 className="font-semibold uppercase text-2xl lg:text-3xl flex items-center lg:justify-center">
        {value.header}
        <img
          src={value.icon}
          alt={value.header}
          className="block lg:hidden h-10 ml-2"
        />
      </h1>
      <p className="lg:leading-7 lg:text-2xl text-xl">{value.text}</p>
    </article>
  );
}
