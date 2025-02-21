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
        <comp.Hero
          title="Projects"
          descr="All of our work is open source to maintain transparency and
          accessiblity. We believe in the importance of building technology that
          connects and gives back to the community."
          button1={{
            text: "View Our Github",
            url: "https://github.com/stevensblueprint/",
          }}
          button2={{ text: "Work With Us", url: "/students" }}
          image={{
            src: "/assets/clip_art/ProjectHeroIcon.svg",
            alt: "projects-banner-image",
          }}
        />
        <comp.Projects.Interested />
        <comp.Projects.Gallery projects={projects} />
        <comp.Footer />
      </div>
    </body>
  </html>
);
