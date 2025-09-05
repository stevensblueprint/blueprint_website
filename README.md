# Stevens Blueprint Website

![Blueprint](/src/assets/logos/logo_banner.webp)

Stevens Blueprint is a student organization that develops pro bono technical solutions for non-profit organizations. The site is now in maintenance mode, and any major changes to it will be at the discretion of the Website team.

The website is built using Lume, a static site generator (SSG) that uses Deno, a runtime for JavaScript and TypeScript. We use TailwindCSS for styling. The website is hosted on GitHub Pages.

## Contributors

Before making changes, please read our [documentation](DOCS.md) to understand our processes and guidelines. We invite pull requests from all Stevens Blueprint members. Read our [approval process](https://wiki.sitblueprint.com/books/website/page/change-approval-process-and-website-ownership) for more information.

### Prerequisites

1. Install [Deno Runtime](https://docs.deno.com/runtime/getting_started/installation/) (v2)
2. Install [Lume Static Site Generator](https://lume.land/) (v2)
3. Install [Node](https://nodejs.org/en/download) and npm

### Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:stevensblueprint/blueprint_website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blueprint_website
   ```

3. Run the website + install dependencies:

   ```bash
   deno task serve
   ```

4. Open your browser and go to [localhost:3000](http://localhost:3000) to view the website. You can make changes to the code and see them reflected in real-time.

5. After editing the code, run the following command to format the code:

   ```bash
   npm run format:write
   ```

   **Note:** Make sure npm is installed on your machine. The reason we are using npm for prettier as opposed to `deno fmt` is because of the `prettier-plugin-tailwindcss` npm package. This helps us format our tailwindcss classes correctly, and currently, there is no deno equivalent.
