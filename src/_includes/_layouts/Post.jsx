export default ({ title, comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <comp.Footer />
      </>
    </body>
  </html>
);
