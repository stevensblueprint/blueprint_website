export default ({ comp, values }) => (
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
        <section className="flex place-content-center" id="info">
          <div className="flex flex-col items-center p-20 max-lg:px-12 w-full max-md:px-4">
            <h1 className="leading-10 md:text-[40px] mb-14 text-6xl">
              <strong>Our Values</strong>
            </h1>
            <div className="flex flex-col items-center w-full md:space-y-12 space-y-20">
              {values.map((value, index) => (
                <comp.ValueCard key={index} value={value} />
              ))}
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
          <div className="flex flex-col items-center py-20 bg-[#D4EAFF]">
            <h1 className="lg:text-4xl text-6xl mb-12">
              <strong>Our Team</strong>
            </h1>
            <div className="flex flex-wrap gap-4 my-12 lg:px-24 lg:max-w-[75rem] px-24 justify-center">
              {
                <comp.MemberCard
                  key={1}
                  name={"Katie Ng"}
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
