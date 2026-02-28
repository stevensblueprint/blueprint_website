export default ({ comp, alumni, hero }) => (
  <html lang="en">
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link
        rel="preload"
        href="/assets/fonts/BPText-Regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint Alumni</title>
      <meta property="og:title" content="Alumni" />
      <meta property="og:url" content="https://sitblueprint.com/alumni/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <comp.Navbar />
        {hero && (
          <comp.Hero
            title={hero.title}
            description={hero.description}
            image={hero.image}
          />
        )}
        <comp.About.Team team={alumni} teamName={"Alumni"} className="mt-12" />
      </div>
      <comp.Footer />
    </body>
  </html>
);
