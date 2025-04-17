# Technology Stack

# Design

# Maitnenance + Making Changes

### Blog Changes

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

* Managing Blog Posts/Project pages
* Approval process for website
* PR structure/requirements