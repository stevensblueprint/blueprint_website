import React from "react";

export default function Hero({
  comp,
  title,
  description,
  button1,
  button2,
  image,
}) {
  return (
    <section className="grow flex space-between flex-col min-h-[600px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:pr-16">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6 lg:mb-16">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14">
          {description}
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton text={button1.text} redirect_url={button1.url} />
          <comp.HeroButton text={button2.text} redirect_url={button2.url} />
        </div>
      </div>
      <div className="flex sm:w-full lg:w-3/4 justify-center p-2 sm:p-16 lg:max-w-[600px] lg:max-h-[600px]">
        <img
          src={image.src}
          alt={image.alt}
          className={image.className ?? ""}
        />
      </div>
    </section>
  );
}
