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
    <section className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-32 py-8 bg-gray-100">
      <h1 className="text-4xl lg:text-5xl font-bold pb-4">Posts</h1>
      {posts.map((post) => {
        return (
          <div className="flex flex-col bg-white p-4 m-4 rounded-md shadow-lg w-full">
            <a href={post.url}>
              <h2 className="text-2xl sm:text-4xl font-bold text-primary hover:text-secondary pb-2">
                {post.title}
              </h2>
            </a>
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
              <p className="pl-2">{post.date}</p>
            </div>
            <p className="text-lg sm:text-xl overflow-hidden py-4 text-ellipsis">
              {post.preview}
            </p>
            <a href={post.url}>
              <p className="text-lg sm:text-xl text-primary underline hover:text-secondary hover:no-underline">
                Continue Reading →
              </p>
            </a>
          </div>
        );
      })}
    </section>
  );
}
