# Stevens Blueprint Website

![Blueprint](/src/assets/logos/logo_banner.png)

Stevens Blueprint, a student club organization dedicated to developing code for non-profit organizations.

## Table of Contents

- [Stevens Blueprint Website](#stevens-blueprint-website)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Projects](#projects)
  - [Blog](#blog)
  - [Technologies Used](#technologies-used)
- [Contributors](#contributors)
  - [Setup for contributors](#setup-for-contributors)
  - [For Project Teams Updating their Project Page](#for-project-teams-updating-their-project-page)

## About

Stevens Blueprint is a community of passionate students at Stevens Institute of Technology who are committed to making a positive impact by developing software solutions for non-profit organizations. Our club members work on real-world projects, gaining valuable experience while giving back to the community.

## Projects

On the [Projects] page, you can explore the various software projects we've been working on. Each project is aimed at helping non-profit organizations in different ways, from building websites to creating custom software tools. You can find project descriptions, status updates, and information on how you can get involved in ongoing projects or propose new ones.

## Blog

Our [Blog] is where we share our experiences, insights, and updates about our work with non-profit organizations. Stay informed about the latest news, events, and project highlights by visiting this section regularly. We encourage club members to contribute to the blog and share their knowledge and experiences.

To create a new blog post, follow these steps:

1. Create a branch called `blog/{title-of-the-post}` and switch to that branch.
2. Create a new markdown file in the `src/blog` directory.
3. Name the file using the following format: `title-of-the-post.md`
4. Add the following metadata to the top of the markdown file

```markdown
---
url: /blog/title-of-the-post.html
title: Title Of The Post
preview: |
  This preview section is what is shown on the main "Blog" page. It should be a brief summary of the post. We have not decided on a character limit yet, but it should be consistent with the other posts on the page so that it does not look too strange. The recommended length would
  be 3 full lines of text. So what is written here in these docs is a good target point of what you should be writing.
author: Author Name (For Example: "Christian Apostol")
date: YYYY-MM-DD (For Example: "2024-02-15", if the date is not in this format it will error out)
tags: 
  - Technology
---
```

**Notes: Standard tags include "Technology", "Design", "Product", "General". The tag options may change. In the future we hope to implement a feature that allows users to filter blog posts based on the tags. [EXAMPLE](https://lume.land/blog/archive/)**

5. Add the content of the blog post as normal markdown. You can include images, code snippets, and other media in your blog post. You can also include links to other pages on the website or external websites. Images should be placed in the `src/assets/blog_photos` directory.
6. Create a Pull Request and request the President, VP of Technology, and VP of Design to review your post. The Executive Board will review the post and provide feedback before merging it into the main branch.

## Technologies Used

Our website is built using Lume, a static site generator (SSG), which provides a simple and efficient way to create static websites. The use of Lume ensures that our website is fast, reliable, and easy to maintain. You can find the website's source code and more information about how it's built in our GitHub repository.

# Contributors

Thank you for wishing to contribute to our Chapter's Website! As stated [above](#technologies-used), we are using [Lume](https://lume.land/docs/overview/about-lume/) for this site. Lume is an SSG that uses Deno, a runtime for Javascript. If you are familiar with git, feel free to follow the installation, clone, and running steps. If you are unfamiliar that's good too; the instructions will be a little more verbose so you can easily follow along. We assume you have already installed git 👍

## Setup for contributors

1. Ensure that you have Deno installed. We are using Deno 2 (version 2.1.4). You can skip this step if you do. If you don't or are unsure, you can use the following command to install it.

   **Homebrew users:**

   `brew install deno`

   **Linux/Non-Homebrew Users:**

   Run the following in your terminal:

   `curl -fsSL https://deno.land/x/install/install.sh | sh`

   If you are using bash run `code $HOME/.bashrc` to open your bash configuration file in VSCode.

   If you are using zsh run `code $HOME/.zshrc` to open your zsh configuration file in VSCode.

   In your respective file add the following:

   ```
   export DENO_INSTALL="/home/REPLACE_WITH_YOUR_USER/.deno"
   export PATH="$DENO_INSTALL/bin:$PATH"
   ```

   Re-run the curl command.

   Restart your terminal or enter a new one. To confirm deno was installed, check the version by running `deno --version`, should see something like `deno 2.1.4`

   You can find more information on the [Deno Docs](https://docs.deno.com/runtime/manual/getting_started/installation)

2. We need to clone the repository, which can be done with the following command:

   - _For beginners_, we recommend having a folder on your computer where you plan on having this repo be stored.
     1. To do such, open your Finder or File Explorer alongside a blank new VSCode window.
     2. Drag the folder (that you wish to have this repository put into) inside of the VSCode window OR do File > Open Folder in VSCode.
     3. Now, inside VSCode open the terminal (In the Top Menu Bar press 'View' > 'Terminal'). You can now run the below command.
   - cloning via https:

     `git clone https://github.com/stevensblueprint/blueprint_website.git`

3. We can run the project using the following command:

   `deno task serve`

4. You did it! You should see the project running on `http://localhost:3000`

5. After editing the code, run prettier write in the terminal to make the code formatted correctly.

`npm run format:write`

Note: make sure npm is installed on your machine. The reason we are using npm for prettier as opposed to `deno fmt` is because of the `prettier-plugin-tailwindcss` npm pacakge. This helps us format our tailwindcss classes correctly, and currently, there is no deno equivalent.

## For Project Teams Updating their Project Page

The content of the project description is all contained within a markdown file

**To update the content:**

- Create a branch called projectUpdate/{REPLACE_WITH_PROJECT_NAME}
- In your branch, access your project's respective markdown file in `src/projects` and make your respective edits
- Submit a pull request for review

**To add a new project:**

- Create a branch called newProject/{REPLACE_WITH_PROJECT_NAME}
- In `src/projects` create a new markdown file with the non-profit's name. Make the file name all lowercase and use hyphens "-" instead of spaces or underscores
- Add the following fields to your project: (title, layout, url, project_title, project_logo_url, github_repository_url)
- Fill in the above fields (refer to current projects for help)
