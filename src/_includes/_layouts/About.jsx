export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint</title>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <section className="flex items-center h-[42rem] bg-primary">
          <div className="w-[60rem] px-60 text-negative max-lg:w-full max-lg:px-8">
            <h1 className="text-4xl mb-12">
              <strong>About The Club</strong>
            </h1>
            <p className="text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi utaliquip ex ea commodo consequat.
            </p>
            <comp.Button
              style={"p-4 rounded-sm bg-white text-text-color font-bold"}
              redirect_url={""}
              text={"Read More"}
            />
          </div>
        </section>
        <section className="grid place-content-center">
          <div className="flex flex-col items-center py-20 px-40 max-lg:px-20 max-md:w-full max-md:px-8">
            <h1 className="text-4xl mb-12">
              <strong>Our Mission</strong>
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi utaliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <section className="grid place-content-center">
          <div className="flex flex-col items-center p-20 max-lg:px-12 max-md:w-full max-md:px-4">
            <h1 className="text-4xl mb-12">
              <strong>Our Values</strong>
            </h1>
            <div className="w-full flex flex-wrap justify-evenly max-md:flex-nowrap max-md:flex-col">
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Value One
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Value Two
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Value Three
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Value Four
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Value Five
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <comp.Carousel
          array_of_images={[
            "../assets/events/google_event.jpg",
            "../assets/events/google_event_1.jpg",
            "../assets/events/ebm.jpeg",
          ]}
        />
        <section className="grid place-content-center">
          <div className="flex flex-col items-center py-20">
            <h1 className="text-4xl mb-12">
              <strong>Our Team</strong>
            </h1>
            <div className="grid grid-cols-5 gap-8 max-lg:grid-cols-3 max-lg:px-4">
              {
                <comp.MemberCard
                  key={1}
                  name={"Katie Nguyen"}
                  role={"President"}
                  image_url={"../assets/eboard/president.jpg"}
                />
              }
              {
                <comp.MemberCard
                  key={2}
                  name={"Shawn Aviles"}
                  role={"VP Projects"}
                  image_url={"../assets/eboard/vp_projects.jpg"}
                />
              }
              {
                <comp.MemberCard
                  key={3}
                  name={"Christian Apostol"}
                  role={"VP Projects"}
                  image_url={"../assets/eboard/vp_projects_1.png"}
                />
              }
              {
                <comp.MemberCard
                  key={4}
                  name={"Daniel Kim"}
                  role={"VP Recruitment"}
                  image_url={"../assets/eboard/vp_recruiting.png"}
                />
              }
              {
                <comp.MemberCard
                  key={5}
                  name={"Christa Ruiz"}
                  role={"VP Internal"}
                  image_url={"../assets/eboard/vp_internal.png"}
                />
              }
              {
                <comp.MemberCard
                  key={6}
                  name={"Andrew Krasinski"}
                  role={"VP External"}
                  image_url={"../assets/eboard/vp_external.jpg"}
                />
              }
              {
                <comp.MemberCard
                  key={7}
                  name={"Miguel Merlin"}
                  role={"VP Technology"}
                  image_url={"../assets/eboard/vp_tech.jpg"}
                />
              }
              {
                <comp.MemberCard
                  key={8}
                  name={"Ezri Zhu"}
                  role={"VP Technology"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
            </div>
          </div>
        </section>
        <comp.Footer />
      </div>
    </body>
  </html>
);
