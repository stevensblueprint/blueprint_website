export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Students</title>
      <meta property="og:title" content="Students" />
      <meta
        property="og:url"
        content="https://sitblueprint.com/community/students/"
      />
    </head>
    <body>
      <comp.Navbar />
      <comp.StudentsHero comp={comp} />
      <comp.StudentsTeams comp={comp} />
      <comp.Footer />
    </body>
  </html>
);
