export default ({ comp, title, children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>{title}</title>
      </head>
      <body>
        <comp.Navbar />
        {children}
        <comp.Footer title='Testing title' faq_url='[faq_url link here]' />
      </body>
    </html>
  )
};