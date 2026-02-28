export default ({
  comp,
  testimonial_inreach,
  testimonial_aad,
  pricing_tiers,
  hero,
  sponsorInfo,
  title,
}) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
      <meta property="og:title" content="Sponsors" />
      <meta property="og:url" content="https://sitblueprint.com/sponsors/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <comp.Hero
          title={hero.title}
          description={hero.description}
          button1={hero.button1}
          button2={hero.button2}
          image={hero.image}
        />
        <h1 className="font-bold text-4xl lg:text-5xl flex flex-col lg:items-center justify-center px-8 pt-16 lg:pt-24 gap-y-6">
          {sponsorInfo.supportMissionTitle}
        </h1>
        <comp.Sponsors.SponsorInfo
          testimonial_1={testimonial_aad}
          testimonial_2={testimonial_inreach}
          pricing_tiers={pricing_tiers}
          sponsorInfo={sponsorInfo}
        />
        <comp.Footer />
      </div>
    </body>
  </html>
);
