import React from "https://esm.sh/react";

export default function InformationCard({
  image_url,
  card_header,
  description,
  redirect_url,
  redirect_url_text,
}) {
  return (
    <figure className="flex-col flex w-full border border-black rounded-lg lg:p-5 p-8 lg:max-w-[445px]">
      {image_url && (
        <div className="h-40 w-full flex justify-center items-center  max-lg:h-80">
          <img
            src={image_url}
            alt={`${card_header} Image`}
            className="h-full w-full -mx-96  object-cover rounded-xl lg:max-w-[315px]"
          />
        </div>
      )}
      <figcaption>
        <h1 className="font-semibold lg:text-2xl text-5xl my-4 lg:my-3">
          {card_header}
        </h1>
        <p className="line-clamp-6 max-sm:w-full lg:text-xl text-3xl lg:leading-6">
          {description}
        </p>
        <div className="lg:mt-5 mt-4 flex justify-center items-center">
          <a
            className="text-primary font-semibold lg:text-2xl text-4xl"
            href={redirect_url}
          >
            {redirect_url_text}
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
