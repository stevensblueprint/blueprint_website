export default ({ comp, title, hero, ourProjects, getInvolved, contactUs }) => {
  return (
    <html>
      <head>
        <comp.GoogleAnalytics />
        <comp.OpenGraphCommon />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:title" content="Stevens Blueprint" />
        <meta property="og:url" content="https://sitblueprint.com/" />
        <link
          rel="preload"
          href="/assets/fonts/BPText-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="styles.css" />
        <link rel="icon" href="assets/logos/logo.webp" type="image/png"></link>
        <title>{title}</title>
      </head>
      <body>
        <comp.Navbar />
        <comp.Home.Hero {...hero} />
        <comp.Home.GetInvolved getInvolved={getInvolved} />
        <comp.Home.OurProjects ourProjects={ourProjects} />
        <comp.Home.ContactUs contactUs={contactUs} />
        <comp.Footer />
      </body>
    </html>
  );
};
