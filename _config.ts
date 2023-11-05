import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
    src: "./src",
    dest: "./output",
    emptyDest: false,
    location: new URL("https://sitblueprint.com"),
	watcher: {
		debounce: 10
	}
});

site
.use(tailwindcss({
	extensions: [".html", ".js", ".njk"],
	options: {
		plugins: [typography]
	}
	})
)
.use(postcss())
.copy("assets/logos")
.loadAssets([".css", ".js"])
.ignore("README.md", "CHANGELOG.md", "node_modules");

export default site;
