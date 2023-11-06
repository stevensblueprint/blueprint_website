import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import jsx from "lume/plugins/jsx.ts";


const site = lume({
    src: "./src",
    dest: "./output",
    emptyDest: false,
});

site
.use(tailwindcss({
	extensions: [".html", ".js", ".njk"],
	options: {
		plugins: [typography]
	}
	})	
)
.use(jsx())
.use(postcss())
.loadAssets([".css", ".js"])
.ignore("README.md");


export default site;
