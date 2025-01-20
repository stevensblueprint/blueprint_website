import React from "https://esm.sh/react@19.0.0";

export default function ValueCard({ value }) {
  return (
    <article className="w-full flex gap-3 flex-col text-center text-pretty lg:w-1/2 sm:w-3/4">
      <h1 className="font-semibold uppercase md:text-3xl text-4xl">
        {value.header}
      </h1>
      <p className="md:leading-7 md:text-[25px] text-3xl">{value.text}</p>
    </article>
  );
}
