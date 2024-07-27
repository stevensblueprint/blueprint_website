import React from "https://esm.sh/react";

export default function InformationCard({
  image_url,
  card_header,
  description,
  redirect_url,
  redirect_url_text,
}) {
  return (
    <figure className="flex-col flex border border-black rounded-lg lg:p-5 lg:max-w-[575px] lg:h-[450px] p-8">
      {image_url && (
        <div className="h-[180px] w-full flex justify-center items-center max-lg:h-80">
          <img
            src={image_url}
            alt={`${card_header} Image`}
            className="h-full w-5/6 -mx-96  object-cover rounded-xl max-lg:w-full"
          />
        </div>
      )}
      <figcaption>
        <h1 className="font-semibold lg:text-2xl text-5xl my-4 lg:my-3">
          {card_header}
        </h1>
        <p className="line-clamp-6 max-sm:w-full pb-3 lg:text-2xl text-3xl lg:leading-6">
          {description}
        </p>
        <div className="lg:mt-5 mt-4 flex justify-center items-center">
          <a
            className="text-primary font-semibold lg:text-3xl text-4xl"
            href={redirect_url}
          >
            {redirect_url_text}
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
