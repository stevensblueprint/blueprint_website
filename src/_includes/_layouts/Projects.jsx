export default ({ comp, projects }) => (
  <html>
    <head>
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
        <comp.Projects.Hero />
        <comp.Projects.Interested />
        <comp.Projects.Gallery projects={projects} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
