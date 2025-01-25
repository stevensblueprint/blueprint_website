export default ({ comp, values, team }) => (
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
            <h1 className="leading-10 justify-center md:text-[40px] mb-14 text-6xl">
              <strong>Our Values</strong>
            </h1>
            <div className="flex flex-col sm:flex-row p-20 gap-10">
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
                "lg:px-6 px-12 lg:py-4 py-8 lg:rounded-lg rounded-3xl border-2 border-black mt-8 text-black font-bold w-fit lg:text-base text-4xl hover:bg-primary hover:text-white"
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
              {team.map((member, index) => (
                <comp.MemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image_url={member.image_url}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </section>
        <comp.Footer />
      </div>
    </body>
  </html>
);
