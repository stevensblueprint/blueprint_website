export default ({ comp, values }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint Mission</title>
      <meta property="og:title" content="About Us" />
      <meta property="og:url" content="https://sitblueprint.com/about/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <comp.About.Hero />
        <section className="flex flex-col items-center justify-center pt-20 pb-10 gap-y-6 bg-white">
          <h1 className="lg:text-5xl text-7xl">
            <strong>Our Mission</strong>
          </h1>
          <p className="text-center text-5xl lg:text-3xl text-3xl mb-4 lg:px-14 px-24 py-8">
            At Blueprint, we strive to make technology <br /> accessible for
            those who promote public <br /> welfare and give back to our
            communities.
          </p>
        </section>
        <comp.Carousel
          array_of_images={[
            "../assets/events/google_event.jpg",
            "../assets/events/google_event_1.jpg",
            "../assets/events/ebm.jpeg",
            "../assets/events/google_event_2.jpg",
            "../assets/events/spring_kickoff.png",
          ]}
        />
        <section className="flex place-content-center" id="info">
          <div className="flex flex-col items-center py-20 max-lg:px-12max-md:px-4">
            <h1 className="leading-10 md:text-[40px] mb-14 text-6xl">
              <strong>Our Values</strong>
            </h1>
            <div className="flex flex-row items-center p-20 gap-10">
              {values.map((value, index) => (
                <comp.ValueCard key={index} value={value} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex place-content-center items-center justify-center">
          <div className="flex flex-col items-center p-8 max-lg:px-12 w-full max-md:px-4">
            <h1 className="leading-10 md:text-[40px] mb-14 text-6xl">
              <strong>Our Sponsors</strong>
            </h1>
            <p className="text-center text-2xl lg:text-2xl text-2xl mb-4 lg:px-14 px-12 py-8">
              We are grateful to our sponsors who provide us with <br /> the
              resources and support we need at Blueprint.
            </p>
            <comp.Button
              style={
                "lg:px-6 px-12 lg:py-4 py-8 lg:rounded-lg rounded-3xl border-2 border-black mt-8 text-black font-bold w-fit lg:text-base text-4xl"
              }
              text={"Become a sponsor"}
              redirect_url={"/partners"}
            />
            <div className="flex flex-row py-12 gap-5 ml-8">
              <img
                src="../assets/logos/notion.png"
                alt="notion"
                className="object-cover h-20 max-w-none "
              />
              <img
                src="../assets/logos/github.png"
                alt="github"
                className="object-cover h-20 max-w-none "
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center">
            <h1 className="lg:text-4xl text-6xl mb-8">
              <strong>Our Team</strong>
            </h1>
            <div className="flex flex-wrap gap-4 my-8 lg:px-24 lg:max-w-[75rem] px-24 justify-center">
              {
                <comp.MemberCard
                  key={1}
                  name={"Christian Apostol"}
                  role={"President"}
                  image_url={"../assets/eboard/president.png"}
                  linkedin={"https://www.linkedin.com/in/capostol/"}
                />
              }
              {
                <comp.MemberCard
                  key={2}
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
                  key={3}
                  name={"Ezri Zhu"}
                  role={"VP Technology"}
                  image_url={"../assets/eboard/vp_tech_1.png"}
                  linkedin={"https://www.linkedin.com/in/~ezri/"}
                />
              }
              {
                <comp.MemberCard
                  key={4}
                  name={"Audrey Yoo"}
                  role={"VP Design"}
                  image_url={"../assets/eboard/vp_design.png"}
                  linkedin={"https://www.linkedin.com/in/audrey-june-yoo/"}
                />
              }
              {
                <comp.MemberCard
                  key={5}
                  name={"Sahana Ali"}
                  role={"VP Design"}
                  image_url={"../assets/eboard/vp_design_1.png"}
                  linkedin={"https://www.linkedin.com/in/sahanaali/"}
                />
              }
              {
                <comp.MemberCard
                  key={6}
                  name={"Massimo Spina"}
                  role={"VP Finance"}
                  image_url={"../assets/eboard/vp_finance.png"}
                  linkedin={
                    "https://www.linkedin.com/in/massimo-spina-b47b12284/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={7}
                  name={"Justin Ferber"}
                  role={"VP Projects"}
                  image_url={"../assets/eboard/vp_projects.png"}
                  linkedin={
                    "https://www.linkedin.com/in/massimo-spina-b47b12284/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={8}
                  name={"Shawn Aviles"}
                  role={"Alumni Chair"}
                  image_url={"../assets/eboard/alumni_chair.png"}
                  linkedin={
                    "https://www.linkedin.com/in/massimo-spina-b47b12284/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={9}
                  name={"Emilio Cardillo"}
                  role={"Freshman Rep"}
                  image_url={"../assets/eboard/freshman_rep.png"}
                  linkedin={
                    "https://www.linkedin.com/in/massimo-spina-b47b12284/"
                  }
                />
              }
              {
                <comp.MemberCard
                  key={10}
                  name={"Chinli Ong"}
                  role={"Freshman Rep"}
                  image_url={"../assets/eboard/freshman_rep_1.png"}
                  linkedin={
                    "https://www.linkedin.com/in/massimo-spina-b47b12284/"
                  }
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
