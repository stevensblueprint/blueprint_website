export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title> For Non-Profits </title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <comp.ForNPOs.Hero />
      </>
    </body>
  </html>
);
