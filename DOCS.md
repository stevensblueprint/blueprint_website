# Table of Contents
  - [Repository Structure](#repository-structure)
  - [Maintenance + Making Changes](#maintenance--making-changes)
    - [Writing Issues](#writing-issues)
    - [Blog Updates](#blog-changes)
    - [Changing the Featured Blog Post](#changing-the-featured-blog-post)
    - [Adding and Updating Project Page](#adding-and-updating-project-page)
  - [Contributing](#contributing)
  - [Resources](#resources)

## Repository Structure

**_configt.ts**: Configuration file for Lume plugins, settings, assets, and other options.

Most of your changes will be in the `src` directory. This is where all the content for the website is stored.
- **src/assets**: Contains all the images, logos, and other assets used in the website.
- **src/blog**: Contains all the blog posts. Each post is a markdown file with metadata at the top.
- **src/projects**: Contains all the project pages. Each project is a markdown file with metadata at the top.
- **src/_includes_layouts**: Contains all the layout files for the website. These are used to define the structure of the pages.
- **src/components**: Contains all the components used in the website. These are reusable pieces of code that can be used in multiple places. Each page has its own directory of unique components, while the shared components are in the root of the directory.

There are several markdown (.md) files at the root of the `src` directory. These files are used to define the content of the website. We have abstracted most of the written content into these files to make it easier to make content updates (as opposed to going through the .jsx components). ***Adhere to this pattern if creating new pages.***

# Maintenance + Making Changes

### Issues

If you find any issues with the website, please create an issue on the repository and notify a member of the Website Team. Include a description of the issue and any relevant screenshots or links. We will review the issue and assign it to a member of the Website Team for resolution.

Current issues are tracked on the [Blueprint Website Project Board](https://github.com/orgs/stevensblueprint/projects/23/views/1)

### Blog Changes

Our Blog is where we share our experiences, insights, and updates about our work with non-profit organizations. We encourage club members to contribute to the blog and share their knowledge and experiences. Please consult with the Website Team before writing your blog post to ensure it aligns with our organization.

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

### Changing the Featured Blog Post

Go into the `src/blog.md` file and change the `featured_post` metadata to the new blog post you want to feature. The `redirect_url` field should be the same as the `url` field in the blog post metadata. `title` and `date_posted` should also be consistent with the blog post metadata. For the `preview`, I recommend pasting the first paragraph of the blog post. The code is setup to line clamp and cut off the content with ellipses if it is too long.

````markdown
Example:

```markdown
---
title: Stevens Blueprint
layout: _layouts/Blog.jsx
featured_post:
  title: The Founding of Stevens Blueprint
  date_posted: March 6, 2025
  image_url: ../assets/photos/blueprint_blog.jpg
  tags:
    - General
  preview: |
    In September of 2021, Blueprint was just a dream that Simon Gao, Max Shi, and Hamzah Nizami all shared. Inspired by Blueprint chapters at other universities, they wanted to bring the same organization to Stevens. Blueprint would connect project teams of Stevens students to non-profit organizations (NPOs) to provide software solutions free of charge. However, all three of them were seniors, and not able to make Blueprint a fully registered organization (RSO) before graduating. Little did they know that they would lay the groundwork for what Blueprint has become in just two years, an organization with over 60 members that has worked on projects for five NPOs thus far.
  redirect_url: /blog/the-founding-of-stevens-blueprint.html
---
```
````

**Notes: Standard tags include "Technology", "Design", "Product", "General". The tag options may change. In the future we hope to implement a feature that allows users to filter blog posts based on the tags. [EXAMPLE](https://lume.land/blog/archive/)**

5. Add the content of the blog post as normal markdown. You can include images, code snippets, and other media in your blog post. You can also include links to other pages on the website or external websites. Images should be placed in the `src/assets/blog_photos` directory.

6. Create a Pull Request and request the President, VP of Technology, and VP of Design to review your post. The Executive Board will review the post and provide feedback before merging it into the main branch.

## Adding and Updating Project Page

The content for each project is written in a markdown file.

**To add a new project:**

1. Create a branch called newProject/{REPLACE_WITH_PROJECT_NAME}
2. In `src/projects` create a new markdown file with the non-profit's name. Make the file name all lowercase and use hyphens "-" instead of spaces or underscores
3. Add the following fields to your project: (title, layout, url, project_title, project_logo_url, github_repository_url)
4. Fill in the above fields (refer to current projects for help)

**To update the content:**

1. Create a branch called projectUpdate/{REPLACE_WITH_PROJECT_NAME}
2. In your branch, access your project's respective markdown file in `src/projects` and make your respective edits
3. Submit a pull request for review

## Resources

- [Website Figma FA24 - SP25](https://www.figma.com/design/Zw1lNlwMEahJCcN5X2L0WT/Blueprint-Website-Redesign?node-id=1380-1888&p=f&t=7GY818P5x6T3JUuE-0)
- [Website Ownership and Approval Process](https://wiki.sitblueprint.com/books/website/page/change-approval-process-and-website-ownership)
- [Lume Search and Pagination Plugin](https://lume.land/docs/core/searching/#searching-pages)
- [Lume Blog Example](https://lume.land/blog/)
