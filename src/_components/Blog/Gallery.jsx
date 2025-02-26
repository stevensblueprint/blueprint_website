export default function Gallery({ comp, posts }) {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-28">
      {posts.map((post) => {
        return (
          <div className="flex flex-col bg-white p-4 m-4 rounded-md shadow-md">
            <a href={post.redirect_url}>
              <h2 className="text-3xl font-bold hover:text-primary hover:underline">
                {post.title}
              </h2>
            </a>
            <div className="flex">
              <div className="flex gap-1 content-center">
                {post.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-primary rounded-md px-3 text-sm font-semibold text-white text-center truncate"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p>{post.date_posted}</p>
            </div>
            <p className="text-xl">{post.preview}</p>
          </div>
        );
      })}
    </section>
  );
}
