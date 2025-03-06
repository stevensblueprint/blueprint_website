import React from "react";

const FOOTER_LINKS = {
  urls: {
    blueprint: "/",
    mission: "/about",
    projects: "/projects",
    linkedin: "https://www.linkedin.com/company/stevens-blueprint/",
    github: "https://github.com/stevensblueprint",
    instagram: "https://instagram.com/stevensblueprint",
    email: "mailto:sit.blueprint@gmail.com",
    blog: "/blog",
    support: "/partners",
    opportunities: "/students",
    timeline: "/non-profits#project-timeline",
  },
  sections: [
    {
      title: "General",
      links: [
        { text: "MISSION", url: "mission" },
        { text: "PROJECTS", url: "projects" },
        { text: "BLOG", url: "blog" },
      ],
    },
    {
      title: "Students",
      links: [{ text: "OPPORTUNITIES", url: "opportunities" }],
    },
    {
      title: "Non-Profits",
      links: [{ text: "TIMELINE", url: "timeline" }],
    },
    {
      title: "PARTNERS",
      links: [{ text: "SUPPORT US", url: "support" }],
    },
  ],
};

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-300 dark:hover:text-white"
    aria-label={label}
  >
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox={icon.viewBox}
      width="24"
      height="24"
    >
      <path d={icon.path} />
    </svg>
    <span className="sr-only">{label}</span>
  </a>
);

const FooterSection = ({ title, links, urls }) => (
  <div>
    <h2 className="mb-6 text-md font-semibold font-poppins text-white uppercase">
      {title}
    </h2>
    <ul className="text-gray-300 font-medium">
      {links.map(({ text, url }) => (
        <li key={text} className="mb-4 font-poppins">
          <a href={urls[url]} className="hover:underline">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const { urls, sections } = FOOTER_LINKS;

  const socialIcons = [
    {
      href: urls.github,
      label: "Github",
      icon: {
        viewBox: "0 0 24 24",
        path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      },
    },
    {
      href: urls.instagram,
      label: "Instagram",
      icon: {
        viewBox: "0 0 24 24",
        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      },
    },
    {
      href: urls.linkedin,
      label: "Linkedin",
      icon: {
        viewBox: "0 1 26 26",
        path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
      },
    },
    {
      href: urls.email,
      label: "Email",
      icon: {
        viewBox: "0 0 34 30",
        path: "M30.8125 4.6875H3.1875C2.5998 4.6875 2.125 5.10645 2.125 5.625V24.375C2.125 24.8936 2.5998 25.3125 3.1875 25.3125H30.8125C31.4002 25.3125 31.875 24.8936 31.875 24.375V5.625C31.875 5.10645 31.4002 4.6875 30.8125 4.6875ZM29.4844 7.93359V23.2031H4.51562V7.93359L3.59922 7.30371L4.9041 5.82422L6.3252 6.7998H27.6781L29.0992 5.82422L30.4041 7.30371L29.4844 7.93359ZM27.6781 6.79688L17 14.1211L6.32187 6.79688L4.90078 5.82129L3.5959 7.30078L4.5123 7.93066L15.8545 15.7119C16.1807 15.9355 16.582 16.0569 16.995 16.0569C17.4081 16.0569 17.8094 15.9355 18.1355 15.7119L29.4844 7.93359L30.4008 7.30371L29.0959 5.82422L27.6781 6.79688Z",
      },
    },
  ];

  return (
    <html>
      <footer className="bg-[#0078e8]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href={urls.blueprint} className="flex items-center">
                <img
                  src="/assets/logos/logo_banner_negative.png"
                  className="h-8 mr-2"
                  alt="blueprint Logo"
                />
              </a>
              <h3 className="my-5 text-white font-medium font-poppins">
                Technology for Social Good
              </h3>
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-6 space-x-10 sm:justify-center sm:mt-4">
                  {socialIcons.map((icon) => (
                    <SocialIcon key={icon.label} {...icon} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-4">
              {sections.map((section) => (
                <FooterSection key={section.title} {...section} urls={urls} />
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-5" />
          <span className="block text-sm text-gray-300 sm:text-center">
            © 2025
            <a href={urls.blueprint} className="hover:underline font-poppins">
              {" "}
              Stevens Blueprint
            </a>
          </span>
        </div>
      </footer>
    </html>
  );
}
