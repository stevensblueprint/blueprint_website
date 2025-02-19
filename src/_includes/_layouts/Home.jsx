export default ({ comp, title, about }) => {
  return (
    <html>
      <head>
        <comp.OpenGraphCommon />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:title" content="Stevens Blueprint" />
        <meta property="og:url" content="https://sitblueprint.com/" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="icon" href="assets/logos/logo.png" type="image/png"></link>
        <title>{title}</title>
      </head>
      <body>
        <comp.Navbar />
        <comp.Home.Hero />
        <comp.Home.AboutUs about={about} />
        <comp.Home.Impact />
        <comp.Home.OurProjects />
        <comp.Home.GetInvolved />
        <comp.Home.ContactUs />
        <comp.Footer />
      </body>
    </html>
  );
};
