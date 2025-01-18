export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <meta property="og:title" content="Stevens Blueprint Projects" />
      <meta property="og:url" content="https://sitblueprint.com/projects/" />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint</title>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <comp.Projects.Hero />
        <comp.Projects.Projects />
        <comp.Footer />
      </div>
    </body>
  </html>
);
