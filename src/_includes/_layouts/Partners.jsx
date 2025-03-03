export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Partners</title>
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
        <comp.Hero
          title="Partners"
          description="Whether through sponsorships, recruiting events, or mentorship opportunities, 
            partnering with us means investing in the next generation of leaders. 
            Reach out to us today!"
          button1={{
            text: "Partner With Us",
            url: "mailto:sit.blueprint@gmail.com",
          }}
          button2={{ text: "See Our Projects", url: "/projects" }}
          image={{
            src: "/assets/vector/partnership_handshake.svg",
            alt: "A graphic showing a handshake between two people",
          }}
        />
        <comp.ForStudents.StudentsProjectTeam />
        <comp.Footer />
      </div>
    </body>
  </html>
);
