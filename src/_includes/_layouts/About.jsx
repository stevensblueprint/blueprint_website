export default ({ comp, values, team }) => (
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
        <comp.About.Hero />
        <comp.About.Mission />
        <comp.About.Values values={values} />
        <comp.About.Sponsors />
        <comp.About.Team team={team} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
