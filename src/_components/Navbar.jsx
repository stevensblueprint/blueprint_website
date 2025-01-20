import React from "https://esm.sh/react@19.0.0";

const navigationLinks = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/students", text: "Students" },
  { href: "/non-profits", text: "Non-Profits" },
  { href: "/partners", text: "Partners" },
  { href: "/blog", text: "Blog" },
];

const logo = "/assets/logos/logo_banner_negative.png";

export default function NavigationBar() {
  return (
    <nav className="relative flex items-center justify-between px-6 lg:p-6 p-10 bg-primary z-50">
      <a href="/" className="flex items-center">
        <img src={logo} alt="Blueprint Logo" className="lg:h-11 h-16" />
      </a>
      <div className="hidden lg:flex space-x-10">
        {renderDesktopNavigationLinks()}
      </div>
      <div className="lg:hidden relative">
        <input
          type="checkbox"
          id="mobileMenuToggle"
          className="hidden peer"
          aria-label="Toggle mobile menu"
        />
        <label htmlFor="mobileMenuToggle" className="block cursor-pointer p-2">
          {renderHamburgerIcon()}
        </label>
        <div className="absolute top-[calc(100%+1rem)] right-2 bg-primary transition-all duration-300 max-h-0 overflow-hidden peer-checked:max-h-screen peer-checked:border peer-checked:border-white peer-checked:rounded-lg peer-checked:shadow-lg w-80">
          {renderMobileNavigationLinks()}
        </div>
      </div>
    </nav>
  );
}

function renderDesktopNavigationLinks() {
  return navigationLinks.map((link, index) => (
    <span className="text-center">
      <a
        key={index}
        href={link.href}
        className="text-white text-2xl relative group transition-all duration-300 ease-in-out"
      >
        <span className="whitespace-nowrap font-bold invisible">
          {link.text}
        </span>
        <span className="absolute inset-0 flex justify-center items-center whitespace-nowrap transition-all group-hover:font-bold group-hover:text-yellow-100">
          {link.text}
        </span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-100 transition-all group-hover:w-full"></span>
      </a>
    </span>
  ));
}

function renderMobileNavigationLinks() {
  return navigationLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      className={`
        block text-white p-8 text-4xl 
        hover:bg-white hover:bg-opacity-10 hover:font-bold
        ${
          // Add a bottom border to all items except the last one
          index !== navigationLinks.length - 1 ? "border-b border-white" : ""
        }
      `}
    >
      {link.text}
    </a>
  ));
}

// Function to render hamburger icon for mobile menu toggle, uses SVG
function renderHamburgerIcon() {
  return (
    <svg
      className="w-12 h-12 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6 h16 M4 12 h16 M4 18 h16"
      ></path>
    </svg>
  );
}
