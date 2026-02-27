export default ({ comp, projects, hero, interested }) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <meta property="og:title" content="Stevens Blueprint Projects" />
      <meta property="og:url" content="https://sitblueprint.com/projects/" />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint</title>
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
        <comp.Projects.Interested interested={interested} />
        <comp.Projects.Gallery projects={projects} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
