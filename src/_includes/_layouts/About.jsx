export default ({
  comp,
  values,
  team,
  alumni,
  hero,
  mission,
  sponsors,
  title,
}) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link
        rel="preload"
        href="/assets/fonts/BPText-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
      <meta property="og:title" content="About Us" />
      <meta property="og:url" content="https://sitblueprint.com/about/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <div>
        <section className="relative flex flex-col min-h-[600px] overflow-hidden bg-primary text-white">
          <img
            src={hero.image.src}
            alt=""
            aria-hidden="true"
            fetchpriority={hero.image.fetchpriority || "high"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(24, 123, 229, 0.90) 38%, rgba(24, 123, 229, 0.75) 99%, rgba(24, 123, 229, 0.75) 100%)",
            }}
          />
          <div className="relative z-20">
            <comp.Navbar transparent={true} />
          </div>
          <div className="relative z-10 flex flex-col items-start text-left py-12 px-6 md:px-12 lg:px-32 max-w-3xl mr-auto flex-1 justify-center">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4 md:mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-8 md:mb-12">
              {hero.description}
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              {hero.button1 && (
                <comp.HeroButton
                  text={hero.button1.text}
                  redirect_url={hero.button1.url}
                />
              )}
              {hero.button2 && (
                <comp.HeroButton
                  text={hero.button2.text}
                  redirect_url={hero.button2.url}
                />
              )}
            </div>
          </div>
        </section>
        <comp.About.Mission mission={mission} />
        <comp.About.Values values={values} />
        <comp.About.Sponsors sponsors={sponsors} />
        <comp.About.Team team={team} teamName={"Our Team"} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
