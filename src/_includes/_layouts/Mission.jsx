export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint Mission</title>
      <meta property="og:title" content="Stevens Blueprint Mission" />
      <meta property="og:url" content="https://sitblueprint.com/mission/" />
    </head>
    <body>
      <div>
        <comp.Navbar />
        <section className="flex items-center h-[42rem] bg-primary">
          <div className="w-[60rem] px-60 text-negative max-lg:w-full max-lg:px-8">
            <h1 className="lg:text-4xl text-7xl mb-12 lg:px-0 px-10">
              <strong>About The Club</strong>
            </h1>
            <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10">
              Stevens Blueprint is a community of passionate students at Stevens
              Institute of Technology who are committed to making a positive
              impact by developing software solutions for non-profit
              organizations. Our club members work on real-world projects,
              gaining valuable experience while giving back to the community.
            </p>
            <comp.Button
              style={
                "lg:p-4 lg:m-0 p-5 m-10 lg:rounded-sm rounded-xl bg-white text-text-color font-bold lg:text-base text-4xl"
              }
              redirect_url={"#info"}
              text={"Read More"}
            />
          </div>
        </section>
        <section className="grid place-content-center" id="info">
          <div className="flex flex-col items-center py-20 px-40 max-lg:px-20 max-md:w-full max-md:px-8">
            <h1 className="lg:text-4xl text-6xl mb-12">
              <strong>Our Mission</strong>
            </h1>
            <p className="lg:text-2xl text-4xl">
              To make custom software that is accessible and beneficial to those
              dedicated to community building and advancing public welfare.
            </p>
          </div>
        </section>
        <section className="flex place-content-center">
          <div className="flex flex-col items-center p-20 max-lg:px-12 max-md:w-full max-md:px-4">
            <h1 className="lg:text-4xl text-6xl mb-12">
              <strong>Our Values</strong>
            </h1>
            <div className="flex flex-wrap gap-4 my-12 justify-center">
              <div className="flex flex-col items-center lg:w-1/4 m-4 p-4">
                <h2 className="font-bold lg:text-xl text-4xl text-primary mb-2">
                  Impact First
                </h2>
                <p className="lg:text-base text-3xl">
                  As Blueprint members, we come together to build something for
                  others. We succeed when the people and partners we serve
                  succeed. The positive impact we create through our collective
                  efforts is the main interest of Blueprint.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/4 m-4 p-4">
                <h2 className="font-bold lg:text-xl text-4xl text-primary mb-2">
                  Pursuing Growth
                </h2>
                <p className="lg:text-base text-3xl">
                  As Blueprint members, we seek to start and perpetuate cycles
                  of learning and teaching between peers. We value the academic,
                  social, and personal growth in all our members. We strive to
                  offer help to those in need and push each other towards
                  success.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/4 m-4 p-4">
                <h2 className="font-bold lg:text-xl text-4xl text-primary mb-2">
                  Cherish Each Other
                </h2>
                <p className="lg:text-base text-3xl">
                  As Blueprint members, we want to cherish our time spent
                  together. We develop meaningful relationships that extend well
                  beyond the scope of the organization. We value each other as
                  individuals and appreciate our differences.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/4 m-4 p-4">
                <h2 className="font-bold lg:text-xl text-4xl text-primary mb-2">
                  Seek Innovation
                </h2>
                <p className="lg:text-base text-3xl">
                  As Blueprint members, we recognize that change is both
                  inevitable and necessary. We are committed to innovate and
                  emphasize effective solutions as needed in order to remain
                  relevant - nothing is sacred. We welcome new ideas and diverse
                  thinking.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/4 m-4 p-4">
                <h2 className="font-bold lg:text-xl text-4xl text-primary mb-2">
                  Be Humble
                </h2>
                <p className="lg:text-base text-3xl">
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
            <h1 className="lg:text-4xl text-6xl mb-12">
              <strong>The Eboard</strong>
            </h1>
            <div className="flex flex-wrap gap-4 my-12 lg:px-24 lg:max-w-[75rem] px-24 justify-center">
              {
                <comp.MemberCard
                  key={1}
                  name={"Christian Apostol"}
                  role={"President"}
                  image_url={"../assets/eboard/Christian_Apostol.png"}
                />
              }
              {
                <comp.MemberCard
                  key={2}
                  name={"Justin Ferber"}
                  role={"VP Projects"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
              {
                <comp.MemberCard
                  key={3}
                  name={"Marcos Traverso"}
                  role={"VP Projects"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
              {
                <comp.MemberCard
                  key={4}
                  name={"Lucas Ha"}
                  role={"VP Recruitment"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
              {
                <comp.MemberCard
                  key={5}
                  name={"Massimo Spina"}
                  role={"VP Internal"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
              {
                <comp.MemberCard
                  key={6}
                  name={"Miguel Merlin"}
                  role={"VP Technology"}
                  image_url={"../assets/eboard/Miguel_Merlin.jpg"}
                />
              }
              {
                <comp.MemberCard
                  key={7}
                  name={"Ezri Zhu"}
                  role={"VP Technology"}
                  image_url={"../assets/eboard/Ezri_Zhu.png"}
                />
              }
              {
                <comp.MemberCard
                  key={8}
                  name={"Sahana"}
                  role={"VP Design"}
                  image_url={"../assets/logos/logo.png"}
                />
              }
              {
                <comp.MemberCard
                  key={9}
                  name={"Audrey Yoo"}
                  role={"VP Design"}
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
