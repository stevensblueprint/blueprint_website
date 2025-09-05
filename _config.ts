import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import jsx from "lume/plugins/jsx.ts";
import favicon from "lume/plugins/favicon.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: "./src",
  dest: "./output",
  // emptyDest: false,
  server: {
    open: true,
    page404: "./404.html",
  },
  location: new URL("https://sitblueprint.com"),
  watcher: {
    debounce: 10,
  },
});

site
  .use(
    favicon({
      input: "assets/logos/logo.webp",
    }),
  )
  .use(
    tailwindcss({
      extensions: [".html", ".js", ".njk", ".jsx"],
      options: {
        content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.jsx"],
        theme: {
          extend: {
            colors: {
              primary: "#0078E8",
              secondary: "#93C9FE",
              "text-color": "#333333",
              negative: "#ffffff",
              maroon: "#9D1535",
            },
            // fontFamily: {
            //   sans: ["Helvetica", "sans-serif"],
            //   serif: ["Mirador", "serif"],
            // }
          },
        },
        plugins: [typography],
      },
    }),
  )
  .use(postcss())
  .copy("assets/logos")
  .copy("assets/eboard")
  .copy("assets/members")
  .copy("assets/photos")
  .copy("assets/vector")
  .copy("assets/fonts")
  .copy("assets/docs")
  .loadAssets([".css", ".js", ".webp", ".gif", ".svg", ".pdf"])
  .ignore("README.md", "CHANGELOG.md", "DOCS.md", "node_modules")
  .use(jsx())
  .use(
    sitemap({
      filename: "sitemap.xml",
      query: "indexable=true",
      sort: "date=desc",
    }),
  );

export default site;
