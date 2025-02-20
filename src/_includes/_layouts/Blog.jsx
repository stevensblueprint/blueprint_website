export default ({ comp, featured_post, posts }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <meta property="og:title" content="Stevens Blueprint Blog" />
      <meta property="og:url" content="https://sitblueprint.com/blog/" />
      <link rel="stylesheet" href="/styles.css" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>Stevens Blueprint Blog</title>
    </head>
    <body>
      <comp.Navbar alternate={true} />
      <comp.Blog.Hero featured_post={featured_post} />
      <comp.Blog.Gallery posts={posts} />
      <comp.Footer />
    </body>
  </html>
);
