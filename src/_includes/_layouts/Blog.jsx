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
        {/* <p className="text-lg text-gray-700 mb-8">{description}</p> */}
        <div className="text-4xl font-bold mb-2 my-10 text-primary">
          Stevens Blueprint Blog
        </div>
        <div class="grid grid-cols-2 gap-4 flex items-center mb-10">
          <div class="col-span-1 p-4">
            <div class="flex items-center space-x-2">
              <img
                src="../assets/vector/clock.svg"
                alt="clock"
                class="h-4 w-4 mb-1"
              />
              <p class="mb-1">4 May, 2024</p>
            </div>
            <h2 class="text-2xl font-bold mb-4">
              Reflecting on the 2023-2024 Year
            </h2>
            <p className="bg-primary px-2 py-1 max-w-max my-3 rounded-md text-white lg:text-xs text-lg font-medium">
              Yearly Recap
            </p>
            <p class="mb-3">
              As the spring semester comes to an end, we reflect on our work for
              the 2023-2024 school year. Our project teams partnered with Asian
              American Dream and NYC Mesh...
            </p>
            <button
              type="button"
              class="text-black font-bold hover:text-black border-2 border-black hover:bg-black rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black"
            >
              Read More
            </button>
          </div>
          <div class="col-span-1 p-4">
            <img
              src="../assets/events/ebm.jpeg"
              alt="ebm"
              class="w-full h-auto rounded-lg border-2 border-primary"
            />
          </div>
        </div>
        <div class="flex items-center mb-10">
          <h2 class="text-2xl font-bold mr-4">Previous Posts</h2>

          <div class="flex space-x-2">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Filter by topic
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              ></ul>
            </div>

            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Sort
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              ></ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-20">
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
