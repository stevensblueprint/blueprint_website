export default ({ comp, description, posts, children }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <meta property="og:title" content="Stevens Blueprint Blog" />
      <meta property="og:url" content="https://sitblueprint.com/blog/" />
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint Blog</title>
    </head>
    <body>
      <comp.Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <comp.BlogHero
          image_url={"../assets/events/spring_kickoff.png"}
          card_header={"Reflecting on the 2023-2024 Year"}
          tags={["Yearly Recap"]}
          time_posted={"24 May 2024"}
          description={
            "As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year. As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year."
          }
          redirect_url={"../blog/yearEnd2024.html"}
        />
        <div className="grid grid-cols-3 gap-4">
          {/* 'posts' is currently a static string array that matches the filenames in blogs/ folder. Needs to be dynamic. See utility/searchResults.js for more info */}
          {posts.map((post) => (
            <a
              href={post}
              key={post}
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
            >
              {post}
              {/* <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h3>
              <p className="font-normal text-gray-700">{post.description}</p>
              <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p> */}
            </a>
          ))}
        </div>
      </main>
      <comp.Footer />
    </body>
  </html>
);
