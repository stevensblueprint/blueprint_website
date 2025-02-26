export default function Gallery({ comp, posts }) {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-32">
      {posts.map((post) => {
        return (
          <div className="flex flex-col bg-white p-4 m-4 rounded-md shadow-lg w-full">
            <a href={post.redirect_url}>
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
              <p className="pl-2">{post.date_posted}</p>
            </div>
            <p className="text-lg sm:text-xl overflow-hidden py-4 text-ellipsis">
              {post.preview}
            </p>
            <a href={post.redirect_url}>
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
