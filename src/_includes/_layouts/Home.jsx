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
          <div class="relative">
            <img
              class="absolute top-1/2 right-1/4 w-16 "
              src="../assets/vector/lamp.svg"
              alt="Lamp"
            />
          </div>
          <section className="grow flex items-center relative overflow-hidden">
            <div className="w-1/2 px-20 max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:items-center z-20">
              <h1 className="font-bold text-4xl tracking-wide mb-6">
                Tech for Social Good
              </h1>
              <p className="text-xl w-[28rem] mb-10 max-lg:w-full max-lg:text-center font-weight:400">
                We're a team of students from Stevens
                <br />
                Institute of Technology that develops software
                <br />
                solutions for non-profit organizations.
              </p>
              <div className="flex space-x-6">
                <comp.Button
                  style="px-6 py-3 rounded-lg bg-transparent border border-[#00070E] text-[#00070E] font-semibold"
                  text="See our work"
                  redirect_url="projects"
                />
                <comp.Button
                  style="px-6 py-3 rounded-lg bg-transparent border border-[#00070E] text-[#00070E] font-semibold"
                  text="Join our team"
                  redirect_url="community"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 full max-w-[695px] flex items-end">
              <img
                src="../assets/vector/new_hero_background.svg"
                alt="Background"
                className="w-full h-auto object-bottom"
              />
            </div>
            <div className="absolute bottom-0 right-10 w-5/12">
              <img
                src="../assets/vector/new_hero_banner.svg"
                alt="Blueprint Persons"
                className="w-full h-auto max-h-[80%]"
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
