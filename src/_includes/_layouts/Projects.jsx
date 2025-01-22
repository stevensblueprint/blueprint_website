export default ({ comp, projects }) => (
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
        <section className="flex flex-col items-center justify-center pt-20 pb-10 gap-y-6 bg-white">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Project Gallery</strong>
          </h1>
          <p className="text-center text-2xl lg:text-2xl text-2xl mb-4 lg:px-14 px-24">
            Interested in collaborating with other peers at Stevens on a
            project? <br /> Check out our{" "}
            <a href="/students" className="underline">
              student opportunities
            </a>
            !
          </p>
        </section>
        <div className="container mx-auto px-4 py-10">
        <section className="flex justify-center mb-20">
          <comp.FilterButtons />
        </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
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
  </html>
  );