export default ({ comp, values, team, alumni }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint Mission</title>
      <meta property="og:title" content="About Us" />
      <meta property="og:url" content="https://sitblueprint.com/about/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <comp.Hero
          title="About Us"
          description="We are the Stevens Institute of Technology chapter of Blueprint that
          develops pro-bono software for non-profit organizations and promotes
          tech for social good."
          button1={{
            text: "Follow our Instagram",
            url: "https://instagram.com/stevensblueprint",
          }}
          button2={{ text: "See Our Projects", url: "/projects" }}
          image={{
            src: "/assets/photos/eboard_fa2025_sp_2026.jpg",
            alt: "A photo of Blueprint members hard at work",
            className:
              "rounded-2xl w-full md:w-full lg:w-full h-auto md:h-96 lg:h-128 object-cover",
          }}
        />
        <comp.About.Mission />
        <comp.About.Values values={values} />
        <comp.About.Sponsors />
        <comp.About.Team team={team} teamName={"Our Team"} />
        <comp.About.Team team={alumni} teamName={"Alumni"} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
