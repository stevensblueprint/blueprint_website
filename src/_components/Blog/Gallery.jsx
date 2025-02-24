export default function Gallery({ comp, posts }) {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50">
      {posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
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
            <p>{post.preview}</p>
          </div>
        );
      })}
    </section>
  );
}
