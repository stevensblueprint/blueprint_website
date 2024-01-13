export default ({ comp, title }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>{title}</title>
      </head>
      <body>
        <comp.Navbar />
        <div className="h-screen flex flex-col">
          <section className="grow flex items-center">
            <div className="px-60 max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:items-center">
              <div className="flex items-center mb-6">
                <img className="w-20 mr-4" src="../assets/logos/logo.png" />
                <span className="font-bold text-6xl tracking-wide h-fit">
                  blueprint
                </span>
              </div>
              <p className="text-lg w-[28rem] mb-10 max-lg:w-full max-lg:px-20 max-sm:px-0">
                We're a team of Stevens students that develops software pro bono
                for nonprofits and promotes technology for social good.
              </p>
              <comp.Button
                style={
                  "px-6 py-4 rounded-lg bg-primary text-negative font-bold w-fit"
                }
                text={"Get Started"}
                redirect_url={""}
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
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
              "../assets/logos/logo.png",
            ]}
          />
          <comp.Button
            style={"px-6 py-4 rounded-lg bg-primary text-negative font-bold"}
            text={"Learn More"}
            redirect_url={"about"}
          />
        </section>
        <section className="h-screen flex flex-col items-center justify-center py-8 gap-y-4 max-lg:h-fit">
          <h1 className="text-5xl">
            <strong>Projects</strong>
          </h1>
          <p className="w-[50rem] text-center text-lg mb-12 max-lg:w-full max-lg:px-8">
            With transparency and accessibility always top-of-mind, all of
            Blueprint's work is open source. We believe in building technology
            that makes our community more open and connected.
          </p>
          <div className="w-full grid grid-cols-3 gap-6 px-40 max-lg:flex max-lg:flex-col max-lg:px-8">
            <comp.ProjectCard
              name_organization={"Test"}
              image_url={"../assets/logos/logo.png"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
              }
              redirect_url={"test"}
            />
            <comp.ProjectCard
              name_organization={"Test"}
              image_url={"../assets/logos/logo.png"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
              }
              redirect_url={"test"}
            />
            <comp.ProjectCard
              name_organization={"Test"}
              image_url={"../assets/logos/logo.png"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
              }
              redirect_url={"test"}
            />
          </div>
          <comp.Button
            style={"px-6 py-4 rounded-lg bg-primary text-negative font-bold"}
            text={"See More"}
            redirect_url={"projects"}
          />
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
            <comp.ProjectCard
              name_organization={"Students"}
              image_url={"../assets/logos/logo.png"}
              description={
                "Join Blueprint to gain hands on experience and give back to the community."
              }
              redirect_url={"apply"}
            />
            <comp.ProjectCard
              name_organization={"Nonprofits"}
              image_url={"../assets/logos/logo.png"}
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
