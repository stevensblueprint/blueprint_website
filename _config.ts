import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import jsx from "lume/plugins/jsx.ts";
import favicon from "lume/plugins/favicon.ts";

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
      input: "assets/logos/logo.png",
    }),
  )
  .use(
    tailwindcss({
      extensions: [".html", ".js", ".njk", ".jsx"],
      options: {
        theme: {
          extend: {
            colors: {
              primary: "#0078E8",
              secondary: "#93C9FE",
              "text-color": "#333333",
              negative: "#ffffff",
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
  .copy("assets/events")
  .copy("assets/vector")
  .loadAssets([".css", ".js", ".png", ".jpg", ".jpeg", ".gif", ".svg"])
  .ignore("README.md", "CHANGELOG.md", "node_modules")
  .use(jsx());

export default site;
