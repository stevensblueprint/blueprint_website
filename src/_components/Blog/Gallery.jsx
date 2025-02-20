export default function Gallery({ comp, posts }) {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50">
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto p-4 bg-gray-50">
        {/* 'posts' is currently a static string array that matches the filenames in blogs/ folder. Needs to be dynamic. See utility/searchResults.js for more info */}
        {posts.map((post) => (
          <comp.Blog.BlogCard
            name_post={post.title}
            image_url={post.image}
            date={post.date}
            project_tag={post.tags}
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
    </section>
  );
}
