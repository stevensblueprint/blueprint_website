export default ({
  comp,
  testimonial_inreach,
  testimonial_aad,
  pricing_tiers,
}) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Sponsors</title>
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
          title="Sponsors"
          description="Whether through sponsorships, recruiting events, or mentorship opportunities, 
            partnering with us means investing in the next generation of leaders. 
            Reach out to us today!"
          button1={{
            text: "Become A Sponsor",
            url: "/assets/documents/Blueprint-Corporate-Sponsorship-Package.pdf",
            openInNewTab: true,
          }}
          button2={{ text: "See Our Projects", url: "/projects" }}
          image={{
            src: "/assets/vector/partnership_handshake.svg",
            alt: "A graphic showing a handshake between two people",
          }}
        />
        <h1 className="font-bold text-4xl lg:text-5xl flex flex-col lg:items-center justify-center px-8 pt-16 lg:pt-24 gap-y-6">
          Support Our Mission
        </h1>
        <comp.Sponsors.SponsorInfo
          testimonial_1={testimonial_aad}
          testimonial_2={testimonial_inreach}
          pricing_tiers={pricing_tiers}
        />
        <comp.Footer />
      </div>
    </body>
  </html>
);
