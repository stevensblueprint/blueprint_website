export default ({ comp, title }) => {
  return (
    <html>
      <head>
	  <comp.OpenGraphCommon />
	  <meta property="og:title" content="Stevens Blueprint" />
	  <meta property="og:url" content="https://sitblueprint.com/" />
        <link rel="stylesheet" href="styles.css" />
        <title>{title}</title>
      </head>
      <body>
        <div className="h-screen flex flex-col">
          <comp.Navbar />
          <section className="grow flex items-center">
            <div className="px-20 max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:items-center z-20">
              <div className="flex items-center">
                <img
                  className="lg:w-20 w-32 mr-4"
                  src="../assets/logos/logo.png"
                />
                <span className="font-bold lg:text-6xl text-8xl tracking-wide h-fit">
                  blueprint
                </span>
              </div>
              <p className="lg:text-xl text-4xl w-[28rem] mb-10 max-lg:w-full max-lg:px-20 max-sm:px-0 lg:pt-4 pt-10 lg:pb-0 pb-8 font-light lg:text-left text-center">
                We're a team of Stevens students that develops software pro bono
                for nonprofits and promotes technology for social good.
              </p>
              <comp.Button
                style={
                  "lg:px-6 px-10 lg:py-4 py-6 lg:rounded-lg rounded-2xl bg-primary text-negative font-bold w-fit lg:text-base text-4xl"
                }
                text={"Read More"}
                redirect_url={"projects"}
              />
            </div>
            <div className="absolute flex inset-0 justify-end items-end max-lg:justify-center">
              <img
                src="../assets/vector/main_banner.svg"
                alt="Blueprint Vector"
                className="lg:w-3/5 lg:max-lg:w-80 w-3/5 z-10"
              />
            </div>
          </section>
          <img
            className="absolute bottom-0 right-0 z-0 lg:w-3/5 w-4/5"
            src="../assets/vector/hero_blob.svg"
          />
          <img
            className="absolute top-0 left-0 z-0 lg:w-3/5"
            src="../assets/vector/hero_lines.svg"
          />
        </div>
        <section className="flex flex-col items-center justify-center py-32 gap-y-6 bg-gray-50">
          <h1 className="lg:text-5xl text-7xl">
            <strong>About Us</strong>
          </h1>
          <p className="text-center lg:text-lg text-4xl mb-4 lg:px-14 px-24 py-8">
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
            style={
              "lg:px-6 px-12 lg:py-4 py-8 lg:rounded-lg rounded-3xl bg-primary text-negative font-bold w-fit lg:text-base text-4xl"
            }
            text={"Learn More"}
            redirect_url={"about"}
          />
        </section>
        <section className="h-screen flex flex-col items-center justify-center py-32 gap-y-6 max-lg:h-fit">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Projects</strong>
          </h1>
          <p className="text-center lg:text-lg text-4xl mb-4 lg:px-14 px-24 py-8">
            With transparency and accessibility always top-of-mind, all of
            Blueprint's work is open source. We believe in building technology
            that makes our community more open and connected.
          </p>
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
          <comp.Button
            style={
              "lg:px-6 px-12 lg:py-4 py-8 lg:rounded-lg rounded-3xl bg-primary text-negative font-bold w-fit lg:text-base text-4xl"
            }
            text={"See More"}
            redirect_url={"projects"}
          />
        </section>
        <section className="h-[17rem] bg-primary text-negative flex flex-col justify-evenly items-center justify-center py-16 max-lg:h-fit max-lg:gap-y-16 max-lg:py-16">
          <h1 className="lg:text-5xl text-6xl mb-12">
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
        <comp.Footer />
      </body>
    </html>
  );
};
