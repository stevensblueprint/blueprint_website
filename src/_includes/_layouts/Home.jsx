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
            <strong>What We Do</strong>
          </h1>
          <p className="text-center text-2xl lg:text-2xl text-2xl mb-4 lg:px-14 px-24 py-8">
            We collaborate with non-profit organizations and offer <br /> our
            expertise in software development , web design, <br /> and product
            management to bring ideas to life
          </p>
          <p className="text-center text-xl mb-8">
            Our most recent projects include...
          </p>
          <div className="w-full lg:grid lg:grid-cols-2 gap-6 lg:px-40 px-20 max-lg:flex max-lg:flex-col justify-items-center">
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
          <comp.Button
            style={
              "lg:px-6 px-12 lg:py-4 py-8 lg:rounded-lg rounded-3xl border-2 border-black mt-8 text-black font-bold w-fit lg:text-base text-4xl"
            }
            text={"View all projects"}
            redirect_url={"projects"}
          />
        </section>
        <section className="h-screen flex flex-col items-center justify-center py-32 gap-y-6 max-lg:h-fit">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Apply</strong>
          </h1>
          <p className="text-center lg:text-lg text-4xl mb-4 lg:px-14 px-24 py-8">
            With transparency and accessibility always top-of-mind, all of
            Blueprint's work is open source. We believe in building technology
            that makes our community more open and connected.
          </p>
          <div className="w-full grid grid-cols-2 gap-6 lg:px-40 px-20 max-lg:flex max-lg:flex-col">
            <comp.ApplyCard
              card_title={"Students"}
              image_url={"../assets/events/google_event_2.jpg"}
              description={
                "Join Blueprint to gain hands on experience and give back to the community."
              }
              redirect_url={"apply"}
            />
            <comp.ApplyCard
              card_title={"Nonprofits"}
              image_url={"../assets/events/git_workshop.jpg"}
              description={
                "Partner with Blueprint to meet your technology needs."
              }
              redirect_url={"apply"}
            />
          </div>
        </section>
        {/* <comp.ContactUs /> */}
        <comp.Footer />
      </body>
    </html>
  );
};
