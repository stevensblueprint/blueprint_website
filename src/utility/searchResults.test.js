import { assertEquals } from "jsr:@std/assert";

function getBlogsByTitle(searchTerm, blogPosts) {
  const results = blogPosts.filter(
    (post) => post.title.includes(searchTerm), // Fix: to lower
  );
  return results;
}

Deno.test("Searching an empty array", () => {
  const blogs = [];
  const result = getBlogsByTitle("test", blogs);
  assertEquals(result, []);
});

Deno.test("Searching an array with one blog", () => {
  const blogs = [{ title: "test blog" }];
  const result = getBlogsByTitle("test", blogs);
  assertEquals(result, blogs);
});

// Add TEST
