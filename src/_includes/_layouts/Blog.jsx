export default ({ comp, description, posts, children }) => (
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
      <comp.Navbar />
      {/* The Blog Hero contains content for a "featured" post. 
      This post should be updated periodically
      to highlight certain topics or events. 
      TODO: Is there a better way to pass content to the featured blog post?*/}
      <comp.Blog.Hero
        image_url={"../assets/events/spring_kickoff.png"}
        card_header={"Reflecting on the 2023-2024 Year"}
        tags={["Yearly Recap", "Blueprint"]} // Render at most 2 tags (21 total characters or less including spaces)
        time_posted={"24 May 2024"}
        description={
          "As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year. As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year. As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year. As the spring semester comes to an end, we reflect on our work for the 2023-2024 school year."
        }
        redirect_url={"../blog/yearEnd2024.html"}
      />
      <main className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* 'posts' is currently a static string array that matches the filenames in blogs/ folder. Needs to be dynamic. See utility/searchResults.js for more info */}
          {posts.map((post) => (
            <comp.Blog.BlogCard
              name_post={post.name_post}
              image_url={post.image}
              date={post.date}
              project_tag={post.tag}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          {/* FIXME: Might cut this for the initial launch pagination and filtering might not be the best here */}
          <button
            type="button"
            className="text-black font-bold hover:text-black border-2 border-black hover:bg-black rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black mb-20"
          >
            View all blog posts
          </button>
        </div>
      </main>
      <comp.Footer />
    </body>
  </html>
);
