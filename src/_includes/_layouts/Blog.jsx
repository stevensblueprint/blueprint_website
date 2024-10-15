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
        <div className="text-4xl font-bold mb-2">Stevens Blueprint Blog</div>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <comp.BlogHero 
              image_url={"../assets/events/google_event_2.jpg"}
              card_header={"Reflecting on the 2023-2024 Year"}
              tags={"hello"}
              time_posted={"16 Sept 2024"}
              description={"Join Blueprint to gain hands on experience and give back to the community."}
              redirect_url={"https://hobokenlibrary.org/"}
              redirect_url_text={"Read More"}
        />
        <div className="grid grid-cols-3 gap-4">
          {/* 'posts' is currently a static string array that matches the filenames in blogs/ folder. Needs to be dynamic. See utility/searchResults.js for more info */}
          {posts.map((post) => (
            <comp.BlogCard
              name_post={post.name_post}
              image_url={post.image}
              date={post.date}
              project_tag={post.tag}
            />
          ))}
        </div>
        <div class="flex justify-center items-center">
          <button
            type="button"
            class="text-black font-bold hover:text-black border-2 border-black hover:bg-black rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black mb-20"
          >
            View all blog posts
          </button>
        </div>
      </main>
      <comp.Footer />
    </body>
  </html>
);
