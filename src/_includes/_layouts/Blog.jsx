export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>Blog</title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <comp.Footer />
      </>
    </body>
  </html>
);
