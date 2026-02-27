export default ({ comp, values, team, alumni, hero, mission, sponsors }) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link
        rel="preload"
        href="/assets/fonts/BPText-Regular.woff2"
        as="font"
        type="font/woff2"
      />
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
          title={hero.title}
          description={hero.description}
          button1={hero.button1}
          button2={hero.button2}
          image={hero.image}
        />
        <comp.About.Mission mission={mission} />
        <comp.About.Values values={values} />
        <comp.About.Sponsors sponsors={sponsors} />
        <comp.About.Team team={team} teamName={"Our Team"} />
        <comp.About.Team team={alumni} teamName={"Alumni"} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
