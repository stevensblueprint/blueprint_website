export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint</title>
    </head>
    <body>
      <div>
        {/* Navbar */}
        <section className="flex items-center h-[42rem] bg-primary">
          <div className="w-[60rem] px-60 text-negative max-lg:w-full max-lg:px-8">
            <h1 className="text-4xl mb-12">
              <strong>Our Projects</strong>
            </h1>
            <p className="text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi utaliquip ex ea commodo consequat.
            </p>
            <comp.Button
              style={"p-4 rounded-sm bg-white text-text-color font-bold"}
              redirect_url={
                "https://github.com/stevensblueprint/blueprint_website"
              }
              text={"View Our Github"}
            />
          </div>
        </section>
        <section className="grid place-content-center">
          <div className="flex flex-col p-20 px-60 max-xl:px-16 max-lg:px-12 max-md:w-full max-md:px-4">
            <h1 className="text-4xl mb-12">
              <strong>Current Projects</strong>
            </h1>
            <div className="w-full grid grid-cols-3 gap-6 max-md:flex max-md:flex-col">
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
              <comp.ProjectCard
                name_organization={"Peninsula Humane Society & SPCA"}
                image_url={"../assets/logos/logo.png"}
                description={
                  "Peninsula Humane Society & SCPA is dedicated to animal welfare and is one of the largest humane organizations in the US. PHS/SPCA supports animal rescue, rehabilitation, and adoption. "
                }
                redirect_url={"phs"}
              />
            </div>
          </div>
        </section>
        {/* Footer */}
      </div>
    </body>
  </html>
);
