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
        <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] bg-primary relative overflow-hidden">
          <div className="lg:w-7/12 lg:px-40 text-negative max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-large:items-center">
            <h1 className="lg:text-4xl text-7xl mb-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
              <strong>About The Club</strong>
            </h1>
            <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
              Stevens Blueprint is a community of passionate students at Stevens
              Institute of Technology who are committed to making a positive
              impact by developing software solutions for non-profit
              organizations. Our club members work on real-world projects,
              gaining valuable experience while giving back to the community.
            </p>
            <comp.Button
              style={
                "lg:p-4 lg:m-0 p-5 m-10 lg:rounded-sm rounded-xl bg-white text-text-color font-bold lg:text-base text-4xl tracking-wide max-lg:text-center"
              }
              redirect_url={"#info"}
              text={"Read More"}
            />
          </div>
          <div className="lg:w-5/12 lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center max-lg:mt-8 max-lg:px-10">
            <div className="max-lg:p-8 lg:w-full lg:max-w-[850px] lg:aspect-[4/3] lg:rounded-2xl lg:border-4 lg:border-solid lg:border-white lg:overflow-hidden">
              <image
                src="../assets/events/google_event_1.jpg"
                alt="A photo of Blueprint members at a Google Event in New York City"
                className="w-full lg:h-full lg:object-cover max-lg:h-auto max-lg:object-contain max-lg:rounded-2xl max-lg:border-4 max-lg:border-solid max-lg:border-white"
              />
            </div>
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
                  linkedin={"https://www.linkedin.com/in/katiexng/"}
                />
              }
              {
                <comp.MemberCard
                  key={2}
                  name={"Shawn Aviles"}
                  role={"VP Projects"}
                  image_url={"../assets/eboard/vp_projects.jpg"}
                  linkedin={"https://www.linkedin.com/in/shawn-aviles/"}
                />
              }
              {
                <comp.MemberCard
                  key={3}
                  name={"Christian Apostol"}
                  role={"VP Projects"}
                  image_url={"../assets/eboard/vp_projects_1.png"}
                  linkedin={"https://www.linkedin.com/in/capostol/"}
                />
              }
              {
                <comp.MemberCard
                  key={4}
                  name={"Daniel Kim"}
                  role={"VP Recruitment"}
                  image_url={"../assets/eboard/vp_recruiting.png"}
                  linkedin={"https://www.linkedin.com/in/daniel-kim-a8b525200/"}
                />
              }
              {
                <comp.MemberCard
                  key={5}
                  name={"Christa Ruiz"}
                  role={"VP Internal"}
                  image_url={"../assets/eboard/vp_internal.png"}
                  linkedin={"https://www.linkedin.com/in/christaruiz/"}
                />
              }
              {
                <comp.MemberCard
                  key={6}
                  name={"Andrew Krasinski"}
                  role={"VP External"}
                  image_url={"../assets/eboard/vp_external.jpg"}
                  linkedin={
                    "https://www.linkedin.com/in/andrew-krasinski-407a43224/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={7}
                  name={"Miguel Merlin"}
                  role={"VP Technology"}
                  image_url={"../assets/eboard/vp_tech.jpg"}
                  linkedin={
                    "https://www.linkedin.com/in/miguel-angel-merlin-arriola/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={8}
                  name={"Ezri Zhu"}
                  role={"VP Technology"}
                  image_url={"../assets/logos/logo.png"}
                  linkedin={"https://www.linkedin.com/in/~ezri/"}
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
