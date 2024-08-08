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
        <section
          className="flex flex-col lg:flex-row items-stretch min-h-[30rem] bg-[#D4EAFF] py-8 lg:py-0"
          id="about-us"
        >
          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-1/2 px-6 lg:px-12 text-black text-center lg:text-left flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl leading-tight lg:leading-[60px] font-bold mb-4 lg:mb-6">
                About Us
              </h1>
              <p className="text-2xl lg:text-2xl mb-8 lg:mb-0 max-w-prose mx-auto lg:mx-0 lg:w-full w-2/3">
                We believe in the importance of accessible technology and
                community engagement, which we strive to achieve through our
                partnership with organizations that promote public welfare.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-12">
              <img
                src="../assets/events/ebm.jpeg"
                alt="About Us"
                className="w-2/3 lg:w-4/5 h-64 lg:h-full max-h-[30rem] object-cover rounded-lg"
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
          <div className="flex flex-col items-center py-20">
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
