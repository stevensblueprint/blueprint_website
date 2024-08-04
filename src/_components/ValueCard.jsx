import React from "https://esm.sh/react";

export default function ValueCard({ value }) {
  return (
    <article className="w-full flex gap-3 flex-col text-center text-pretty lg:w-1/2 sm:w-3/4">
      <h1 className="font-semibold uppercase lg:text-3xl text-5xl">
        {value.header}
      </h1>
      <p className="lg:leading-7 lg:text-[25px] text-3xl">{value.text}</p>
    </article>
  );
}
