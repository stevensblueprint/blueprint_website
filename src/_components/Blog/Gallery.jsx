export default function Gallery({ search }) {
  const posts = search
    .pages("type=post") // the _data.yml file in the src/blog directory identifies all the blogs as `type: post`
    .map((post) => ({
      url: post.url,
      title: post.title,
      tags: post.tags,
      date: new Date(post.date).toLocaleDateString(),
      preview: post.preview,
      author: post.author,
      dateObj: new Date(post.date), // Add a date object for sorting
    }))
    .sort((a, b) => b.dateObj - a.dateObj); // Sort by date in descending order

  return (
    <section className="flex flex-col lg:items-center justify-center px-8 md:px-12 lg:px-32 py-16 lg:pt-24 bg-gray-100">
      <h1 className="text-4xl lg:text-5xl font-bold pb-12">Posts</h1>
      {posts.map((post) => {
        return (
          <a
            href={post.url}
            className="flex flex-col bg-white p-4 my-4 rounded-md shadow-lg w-full"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-primary hover:text-secondary pb-2">
              {post.title}
            </h2>
            <p className="pr-2">By {post.author}</p>
            <div className="flex py-2">
              <div className="flex gap-1 content-center">
                {post.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-primary rounded-md px-3 text-sm font-semibold text-white text-center"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="pl-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-lg sm:text-xl overflow-hidden py-4 text-ellipsis">
              {post.preview}
            </p>
            <p className="text-lg sm:text-xl text-primary underline hover:text-secondary hover:no-underline">
              Continue Reading →
            </p>
          </a>
        );
      })}
    </section>
  );
}
