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
              Stevens Blueprint is a community of passionate students at Stevens
              Institute of Technology who are committed to making a positive
              impact by developing software solutions for non-profit
              organizations. Our club members work on real-world projects,
              gaining valuable experience while giving back to the community.
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
              To make custom software that is accessible and beneficial to those
              dedicated to community building and advancing public welfare.
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
                  Impact First
                </h2>
                <p>
                  As Blueprint members, we come together to build something for
                  others. We succeed when the people and partners we serve
                  succeed. The positive impact we create through our collective
                  efforts is the main interest of Blueprint.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Pursuing Growth
                </h2>
                <p>
                  As Blueprint members, we seek to start and perpetuate cycles
                  of learning and teaching between peers. We value the academic,
                  social, and personal growth in all our members. We strive to
                  offer help to those in need and push each other towards
                  success.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Cherish Each Other
                </h2>
                <p>
                  As Blueprint members, we want to cherish our time spent
                  together. We develop meaningful relationships that extend well
                  beyond the scope of the organization. We value each other as
                  individuals and appreciate our differences.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Seek Innovation
                </h2>
                <p>
                  As Blueprint members, we recognize that change is both
                  inevitable and necessary. We are committed to innovate and
                  emphasize effective solutions as needed in order to remain
                  relevant - nothing is sacred. We welcome new ideas and diverse
                  thinking.
                </p>
              </div>
              <div className="basis-1/4 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Be Humble
                </h2>
                <p>
                  As Blueprint members strive to remain humble, accept our
                  imperfections, and be receptive to feedback. We approach
                  challenges with an open mind and remember that anyone can
                  pursue social good, not just Blueprint.
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
        <section>
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
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
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
