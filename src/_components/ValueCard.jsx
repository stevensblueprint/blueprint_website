import React from "react";

export default function ValueCard({ value }) {
  return (
    <article className="w-full flex gap-5 flex-col text-center text-pretty lg:w-1/2 sm:w-3/4">
      <img src={value.icon} alt={value.header} className="w-1/8 mx-auto" />
      <h1 className="font-semibold uppercase md:text-3xl text-4xl">
        {value.header}
      </h1>
      <p className="md:leading-7 md:text-[25px] text-sm">{value.text}</p>
    </article>
  );
}
