export default ({ comp, description, children }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>Blog</title>
    </head>
    <body>
      <>
        <comp.Navbar />
        {description}
        {children}
        <comp.Footer />
      </>
    </body>
  </html>
);
