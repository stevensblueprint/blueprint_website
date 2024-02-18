export default ({ title, comp, children }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <article className="h-screen w-full flex justify-center">
          <div className="w-2/3">{children}</div>
        </article>
        <comp.Footer />
      </>
    </body>
  </html>
);
