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
            src: "/assets/photos/stock_photo.png",
            alt: "A photo of Blueprint members hard at work",
            className: "rounded-2xl w-full h-auto object-cover",
          }}
        />
        <comp.About.Mission />
        <comp.About.Values values={values} />
        <comp.About.Sponsors />
        <comp.About.Team team={team} teamName={"Executive Board"} />
        <comp.About.Team team={alumni} teamName={"Alumni"} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
