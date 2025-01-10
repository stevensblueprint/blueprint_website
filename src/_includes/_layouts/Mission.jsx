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
        <comp.About.Hero />
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
