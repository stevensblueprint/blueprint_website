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
        <section className="flex items-center h-[42rem] bg-primary">
          <div className="w-[60rem] px-60 text-negative max-lg:w-full max-lg:px-8">
            <h1 className="lg:text-4xl text-7xl mb-12 lg:px-0 px-10">
              <strong>Our Projects</strong>
            </h1>
            <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10">
              All of our work is open source to increase transparency and
              support our mission of providing accessible technology for Social
              Good.
            </p>
            <comp.Button
              style={
                "lg:p-4 lg:m-0 p-5 m-10 lg:rounded-sm rounded-xl bg-white text-text-color font-bold lg:text-base text-4xl"
              }
              redirect_url={
                "https://github.com/stevensblueprint/blueprint_website"
              }
              text={"View Our Github"}
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
