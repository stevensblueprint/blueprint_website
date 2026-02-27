export default function Hero({
  comp,
  title,
  description,
  image,
  buttons,
  imageFetchpriority,
}) {
  return (
    <section className="flex flex-col grow md:min-h-[600px] md:flex-row items-center justify-between bg-primary text-white py-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center text-left pl-2 md:pl-8 lg:pl-12">
        <h1 className="font-bold w-full text-4xl md:text-7xl lg:text-8xl leading-snug md:leading-[1.2] tracking-wide mb-3 lg:mb-5">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-14">
          {description}
        </p>
        <div className="flex flex-col justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
          {buttons.map((button, index) => {
            return (
              <comp.HeroButton
                key={index}
                text={button.text}
                redirect_url={button.url}
              />
            );
          })}
        </div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={image}
          alt="blueprint stevens duck"
          className="relative z-10 max-w-[300px] md:max-w-full h-auto"
          fetchpriority={imageFetchpriority || "auto"}
          decoding="async"
        />
      </div>
    </section>
  );
}
