export default ({ comp, title }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>{title}</title>
      </head>
      <body>
        <div className="h-screen flex flex-col">
          <comp.Navbar />
          <section className="grow flex items-center">
            <div className="px-20 max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:items-center">
              <div className="flex items-center">
                <img className="w-20 mr-4" src="../assets/logos/logo.png" />
                <span className="font-bold text-6xl tracking-wide h-fit">
                  blueprint
                </span>
                <div className="w-50 h-50">
                  <img
                    src="../assets/vector/main_banner.svg"
                    alt="Blueprint Vector"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-lg w-[28rem] mb-10 max-lg:w-full max-lg:px-20 max-sm:px-0">
                We're a team of Stevens students that develops software pro bono
                for nonprofits and promotes technology for social good.
              </p>
              <comp.Button
                style={
                  "px-6 py-4 rounded-lg bg-primary text-negative font-bold w-fit"
                }
                text={"Read More"}
                redirect_url={"projects"}
              />
            </div>
          </section>
        </div>
        <section className="h-screen flex flex-col items-center justify-center py-8 gap-y-6 bg-gray-50 max-lg:h-fit">
          <h1 className="text-5xl">
            <strong>About Us</strong>
          </h1>
          <p className="w-[50rem] text-center text-lg mb-4 max-lg:w-full max-lg:px-8">
            We are a group of students at Stevens Institute of Technology who
            have a passion technology and want to apply our talents towards
            social causes that can use our help.
          </p>
          <comp.Carousel
            array_of_images={[
              "../assets/events/google_event.jpg",
              "../assets/events/google_event_1.jpg",
              "../assets/events/ebm.jpeg",
            ]}
          />
          <comp.Button
            style={"px-6 py-4 rounded-lg bg-primary text-negative font-bold"}
            text={"Learn More"}
            redirect_url={"about"}
          />
        </section>
        <section className="h-screen flex flex-col items-center justify-center py-8 gap-y-6 max-lg:h-fit">
          <h1 className="text-5xl">
            <strong>Projects</strong>
          </h1>
          <p className="w-[50rem] text-center text-lg mb-12 max-lg:w-full max-lg:px-8">
            With transparency and accessibility always top-of-mind, all of
            Blueprint's work is open source. We believe in building technology
            that makes our community more open and connected.
          </p>
          <div className="w-full grid grid-cols-2 gap-6 px-40 max-lg:flex max-lg:flex-col max-lg:px-8">
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
            style={"px-6 py-4 rounded-lg bg-primary text-negative font-bold"}
            text={"See More"}
            redirect_url={"projects"}
          />
        </section>
        <section className="h-[25rem] bg-primary text-negative flex flex-col justify-evenly items-center justify-center py-8 max-lg:h-fit max-lg:gap-y-16 max-lg:py-16">
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl">
            <strong>Sponsors and Partners</strong>
          </h1>
          <div className="flex flex-wrap gap-x-6 justify-center px-8 max-lg:px-4 max-md:px-2">
            <img
              className="object-contain h-20 max-w-none mr-4"
              src="../assets/logos/github.png"
              alt="GitHub logo"
            />
            <img
              className="object-contain h-20 max-w-none mr-4"
              src="../assets/logos/notion.png"
              alt="Notion logo"
            />
          </div>
        </section>
        <section className="h-screen flex flex-col items-center justify-center py-8 gap-y-6 max-lg:h-fit">
          <h1 className="text-5xl">
            <strong>Apply</strong>
          </h1>
          <p className="w-[50rem] text-center text-lg mb-12 max-lg:w-full max-lg:px-8">
            With transparency and accessibility always top-of-mind, all of
            Blueprint's work is open source. We believe in building technology
            that makes our community more open and connected.
          </p>
          <div className="w-full grid grid-cols-2 gap-6 px-40 max-lg:flex max-lg:flex-col max-lg:px-8">
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
        <comp.Footer />
      </body>
    </html>
  );
};
