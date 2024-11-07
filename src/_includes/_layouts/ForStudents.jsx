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
      <section>
        <h1 className="font-bold lg:text-5xl text-7xl flex flex-col items-center justify-center lg:pt-32 max-lg:py-32 gap-y-6">
          Our Teams
        </h1>
      </section>
      <comp.StudentsProjectTeam comp={comp} />
      <comp.Footer />
    </body>
  </html>
);
