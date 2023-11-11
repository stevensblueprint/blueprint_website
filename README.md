# Stevens Blueprint Website

Stevens Blueprint, a student club organization dedicated to developing code for non-profit organizations.

## Table of Contents
- [About](#about)
- [Projects](#projects)
- [Blog](#blog)
- [Technologies Used](#technologies-used)

## About
Stevens Blueprint is a community of passionate students at Stevens Institute of Technology who are committed to making a positive impact by developing software solutions for non-profit organizations. Our club members work on real-world projects, gaining valuable experience while giving back to the community.

## Projects
On the [Projects] page, you can explore the various software projects we've been working on. Each project is aimed at helping non-profit organizations in different ways, from building websites to creating custom software tools. You can find project descriptions, status updates, and information on how you can get involved in ongoing projects or propose new ones.

## Blog
Our [Blog] is where we share our experiences, insights, and updates about our work with non-profit organizations. Stay informed about the latest news, events, and project highlights by visiting this section regularly. We encourage club members to contribute to the blog and share their knowledge and experiences.

## Technologies Used
Our website is built using Lume, a static site generator (SSG), which provides a simple and efficient way to create static websites. The use of Lume ensures that our website is fast, reliable, and easy to maintain. You can find the website's source code and more information about how it's built in our GitHub repository.

# Contributors

Thank you for wishing to contribute to our Chapter's Website! As stated [above](#technologies-used), we are using [Lume](https://lume.land/docs/overview/about-lume/) for this site. Lume is an SSG that uses Deno, a runtime for Javascript. If you are familiar with git, feel free to follow the installation, clone, and running steps. If you are unfamiliar that's good too; the instructions will be a little more verbose so you can easily follow along. We assume you have already installed git 👍

## Setup for contributors

1. Ensure that you have Deno installed. You can skip this step if you do. If you don't or are unsure, you can use the following command to install it.
	- If you have homebrew installed run this in your terminal: 

		`brew install deno` 

	- OR you can use the curl command:
	
		`curl -fsSL https://deno.land/x/install/install.sh | sh`

	Restart your terminal or enter a new one. To confirm deno was installed, check the version by running `deno --version`, should see something like `deno 1.37.2`

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
