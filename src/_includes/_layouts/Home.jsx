export default ({ comp, title }) => {
  return (
    <html>
      <head>
        <comp.OpenGraphCommon />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:title" content="Stevens Blueprint" />
        <meta property="og:url" content="https://sitblueprint.com/" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="icon" href="assets/logos/logo.png" type="image/png"></link>
        <title>{title}</title>
      </head>
      <body>
        <comp.Navbar />
        <comp.Home.Hero />
        <comp.Home.Impact />
        <section className="flex flex-col items-center justify-center py-32 gap-y-6 bg-white">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Our Projects</strong>
          </h1>
          <p className="text-center text-2xl lg:text-2xl text-2xl mb-4 lg:px-14 px-24">
            We collaborate with non-profit organizations and offer <br /> our
            expertise in software development , web design, <br /> and product
            management to bring ideas to life
          </p>
          <p className="text-center-2xl lg:text-2xl text-2xl text-primary hover:underline">
            <a href="projects">View all projects</a>
          </p>
          <div className="flex flex-row justify-between gap-x-6 lg:gap-x-12 lg:flex-wrap lg:gap-y-6">
            <comp.ProjectCard
              name_organization={"Asian American Dream"}
              image_url={"../assets/logos/aad_logo.png"}
              description={
                "Asian American Dream empowers underserved Asian American and Pacific Islander undergraduates through career-centric mentorship and professional development opportunities."
              }
              redirect_url={"/projects/asian-american-dream"}
              project_tag={"Volunteer Management"}
            />
            <comp.ProjectCard
              name_organization={"InReach"}
              image_url={"../assets/logos/inreach_logo.png"}
              description={
                "InReach provides verified services for LGBTQ+ asylum seekers, immigrants, refugees, BIPOC communities, TGNC individuals, LGBTQ+ youth, caregivers, and more."
              }
              redirect_url={"/projects/inreach"}
              project_tag={"Community Resources"}
            />
            <comp.ProjectCard
              name_organization={"NYC Mesh"}
              image_url={"../assets/logos/nycmesh_logo.png"}
              description={
                "NYC Mesh is dedicated to ending the digital divide and extending high-speed, reliable internet to all New Yorkers across the five boroughs."
              }
              redirect_url={"/projects/nyc-mesh"}
              project_tag={"Affordable Internet"}
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center py-10 gap-y-6 bg-white">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Get Involved</strong>
          </h1>
          <div className="flex flex-row justify-between gap-x-6 lg:gap-x-12 lg:flex-wrap lg:gap-y-6">
            <comp.GetInvolvedCard
              title={"Non-Profit Orgs"}
              description={
                "We can help you grow your organization with innovative software solutions, whether you have a specific project in mind or a curiosity of how Blueprint can support you!"
              }
              icon_url={"../assets/vectors/hands_blue.svg"}
              redirect_url={"/non-profits"}
            />
          </div>
        </section>
        <comp.ContactUs />
        <comp.Footer />
      </body>
    </html>
  );
};
