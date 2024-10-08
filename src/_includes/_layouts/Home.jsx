export default ({ comp, title }) => {
  return (
    <html>
      <head>
        <comp.OpenGraphCommon />
        <meta property="og:title" content="Stevens Blueprint" />
        <meta property="og:url" content="https://sitblueprint.com/" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="icon" href="assets/logos/logo.png" type="image/png"></link>
        <title>{title}</title>
      </head>
      <body>
        <div className="h-[90vh] flex flex-col bg-[#D4EAFF] relative">
          <comp.Navbar />
          {/* start of hero */}
          <div className="relative">
            <img
              className="absolute top-1/2 right-1/4 w-16 "
              src="../assets/vector/lamp.svg"
              alt="Lamp"
            />
          </div>
          <section className="grow flex flex-col lg:flex-row lg:items-center relative overflow-hidden">
            <div className="w-1/2 px-20 max-lg:w-full max-lg:flex-1 max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:pt-16 z-20">
              <h1 className="font-bold text-[2.9rem] leading-[1.3]  tracking-wide mb-1 max-lg:text-5xl max-lg:text-center max-lg:mb-8">
                Tech for Social Good
              </h1>
              <p className="text-[1.5rem] w-[32rem] leading-[1.3] mb-6 max-lg:w-full max-lg:text-center max-lg:text-4xl max-lg:mb-12 font-weight:400">
                We're a team of students from Stevens <br />
                Institute of Technology that develops software <br />
                solutions for non-profit organizations.
              </p>
              <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-8 max-lg:w-full max-lg:items-center">
                <comp.Button
                  style="px-8 py-4 rounded-lg bg-transparent border-2 border-[#00070E] text-[#00070E] font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
                  text="See our work"
                  redirect_url="projects"
                />
                <comp.Button
                  style="px-8 py-4 rounded-lg bg-transparent border-2 border-[#00070E] text-[#00070E] font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
                  text="Join our team"
                  redirect_url="community"
                />
              </div>
            </div>
            <div className="max-lg:hidden lg:absolute lg:bottom-0 lg:right-0 lg:full lg:max-w-[695px] flex items-end max-lg:flex-1">
              <img
                src="../assets/vector/new_hero_background.svg"
                alt="Background"
                className="w-full h-full object-cover lg:object-bottom"
              />
            </div>
            <div className="max-lg:hidden lg:absolute lg:bottom-0 lg:right-10 lg:w-5/12 max-lg:absolute max-lg:bottom-0 max-lg:left-0 max-lg:right-0">
              <img
                src="../assets/vector/new_hero_banner.svg"
                alt="Blueprint Persons"
                className="w-full h-full object-contain lg:object-bottom"
              />
            </div>
          </section>
        </div>
        {/* end of hero */}
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
          <div className="w-full grid grid-cols-2 gap-6 lg:px-40 px-20 max-lg:flex max-lg:flex-col justify-items-center">
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
        <comp.ContactUs />
        <comp.Footer />
      </body>
    </html>
  );
};
