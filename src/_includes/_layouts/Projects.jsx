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
        <section className="flex flex-col min-h-[700px] lg:flex-row lg:items-center bg-primary text-white">
          <div className="px-6 md:px-12 lg:px-32 py-8 md:py-16 lg:py-0 w-full">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 lg:mb-16 text-center lg:text-left">
              Projects
            </h1>
            <p className="lg:text-2xl mb-12 lg:px-0 px-10">
              All of our work is open source to maintain transparency and
              accessiblity. We believe in the importance of building technology
              that connects and gives back to the community.
            </p>
            <comp.Button
              style={
                "py-2 px-6 lg:mr-6 md:px-8 min-w-[191px] rounded-md border border-white text-white font-semibold justify-center items-center text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
              }
              redirect_url={
                "https://github.com/stevensblueprint/blueprint_website"
              }
              text={"View Our Github"}
            />

            <comp.Button
              style={
                "py-2 px-6 md:px-8 min-w-[191px] rounded-md border border-white text-white font-semibold justify-center items-center text-base md:text-lg inline-flex hover:bg-white hover:text-primary"
              }
              redirect_url={""}
              text={"Work With Us"}
            />
          </div>
          <div className="flex px-6 md:px-12 grow w-full justify-center pb-12">
            <img
              src="../../assets/logos/project-img.png"
              alt="projects-banner-image"
            />
          </div>
        </section>
        <section className="grid place-content-center">
          <div className="flex flex-col p-20 px-60 max-2xl:px-40 max-xl:px-20 max-md:px-8">
            <h1 className="lg:text-4xl text-6xl mb-12">
              <strong>Current Projects</strong>
            </h1>
            <div className="w-full grid grid-cols-2 gap-6 lg:px-40 px-20 max-lg:flex max-lg:flex-col">
              <comp.ProjectCard
                name_organization={"Asian American Dream"}
                image_url={"../assets/logos/aad_logo.png"}
                description={
                  "Asian American Dream is a New York City based organization aiming to empower and assist underserved AAPI undergraduates in their career goals. We are developing a platform that will help them manage their rapidly-growing Kin Mentorship Program."
                }
                redirect_url={"/projects/asian-american-dream"}
                project_tag={"Volunteer Management"}
              />
              <comp.ProjectCard
                name_organization={"NYC Mesh"}
                image_url={"../assets/logos/nycmesh_logo.png"}
                description={
                  "NYC Mesh is committed to providing reliable, high-speed, and affordable internet to communities throughout New York City. We are developing an interactive map that will help them their wireless sectors used to transport data across city blocks."
                }
                redirect_url={"/projects/nyc-mesh"}
                project_tag={"Affordable Internet"}
              />
            </div>
          </div>
        </section>
        <comp.Footer />
      </div>
    </body>
  </html>
);
