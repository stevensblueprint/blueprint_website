export default ({ comp, title, children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <comp.Footer />
      </body>
    </html>
  )
};