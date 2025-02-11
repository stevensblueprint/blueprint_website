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
        <section className="flex flex-col lg:items-center justify-center pt-20 lg:pb-10 gap-y-2 lg:gap-y-6 bg-white px-8">
          <h1 className="text-4xl lg:text-5xl">
            <strong>Project Gallery</strong>
          </h1>
          <p className="lg:text-center text-xl lg:text-3xl lg:mb-4 max-w-4xl py-8">
            Interested in collaborating with other peers at Stevens on a
            project? <br /> Check out our{" "}
            <a href="/students" className="underline">
              student opportunities
            </a>
            !
          </p>
        </section>
        <div className="container mx-auto px-8 py-10 mb-16">
          <section className="flex justify-center mb-8 lg:mb-20">
            <comp.FilterButtons />
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <div key={idx} className="w-full flex justify-center">
                <comp.ProjectCard
                  name_organization={project.name_organization}
                  image_url={project.image_url}
                  status={project.status}
                  description={project.description}
                  redirect_url={project.redirect_url}
                  project_tag={project.project_tag}
                  year={project.year}
                />
              </div>
            ))}
          </div>
        </div>
        <comp.Footer />
      </div>
    </body>
  </html>
);
