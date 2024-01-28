import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "./src",
  dest: "./output",
  emptyDest: false,
  server: {
    open: true,
  },
  location: new URL("https://sitblueprint.com"),
  watcher: {
    debounce: 10,
  },
});

site
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
  .loadAssets([".css", ".js"])
  .ignore("README.md", "CHANGELOG.md", "node_modules")
  .use(jsx());

export default site;
