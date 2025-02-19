import React from "react";

export default function Hero({
  comp,
  image_url,
  card_header,
  tags,
  time_posted,
  description,
  redirect_url,
}) {
  return (
    <section className="grow flex flex-col min-h-[700px] lg:flex-row lg:items-center overflow-hidden px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:w-1/2 lg:pr-20">
        <h1 className="font-bold text-primary text-3xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16">
          Stevens Blueprint Blog
        </h1>
        <div className="flex items-center">
          <img
            className="size-3"
            src="../assets/vector/clock.svg"
            alt="Clock"
          />
          <p className="text-base font-normal px-2">{time_posted}</p>
          <div className="flex gap-1 content-center">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-primary rounded-md px-3 text-sm font-semibold text-white text-center truncate"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xl sm:text-3xl font-semibold pb-4 pt-2">
          {card_header}
        </div>
        <p className="flex-auto text-lg sm:text-xl font-normal leading-7 text-balance overflow-hidden text-clip line-clamp-3">
          {description}
        </p>
        {/* This div may seem pointless, however it is needed to apply padding between the 
        button and the paragraph. If you add bottom padding to the paragraph, it causes a 
        visual gltich with the clamped lines */}
        <div className="pt-4">
          <comp.Button
            style="text-xs sm:min-w-[191px] md:text-base text-center py-1 md:py-2 px-3 md:px-4 rounded-md border bg-primary text-white font-semibold inline-flex items-center justify-center hover:bg-white hover:text-primary"
            text={"Read More"}
            redirect_url={redirect_url}
          />
        </div>
      </div>
      <div className="flex grow w-full lg:w-1/2 justify-center pb-8 md:pb-12">
        <image
          src={image_url}
          alt={`${card_header} Image`}
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
