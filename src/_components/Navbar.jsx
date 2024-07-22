import React from "https://esm.sh/react";

// Global navigation links array
const navigationLinks = [
  { href: "/mission", text: "Mission" },
  { href: "/projects", text: "Projects" },
  { href: "/community", text: "Get Involved" },
  { href: "/blog", text: "Blog" },
];

export default function NavigationBar() {
  const logo = "/assets/logos/logo_negative.png";
  return (
    <nav className="relative flex items-center justify-between lg:p-6 p-10 bg-primary z-50">
      <a href="/" className="flex items-center text-white">
        <img
          src={logo}
          alt="Blueprint Logo"
          className="mr-2 lg:w-10 lg:h-10 w-16 h-16"
        />
        <span className="lg:text-3xl text-5xl font-poppins font-semibold hover:font-bold">
          blueprint
        </span>
      </a>
      {/* Desktop Navigation Menu - Visible only on large screens */}
      <div className="hidden lg:flex space-x-6">
        {renderDesktopNavigationLinks()}
      </div>
      {/* Mobile Menu Toggle and Dropdown - Visible on screens smaller than "large" */}
      <div className="lg:hidden relative">
        {/* Toggles the mobile menu */}
        <input
          type="checkbox"
          id="mobileMenuToggle"
          className="hidden peer"
          aria-label="Toggle mobile menu"
        />
        <label htmlFor="mobileMenuToggle" className="block cursor-pointer p-2">
          {renderHamburgerIcon()}
        </label>
        {/* Mobile Navigation Menu - Expands and shows when hamburger icon is clicked*/}
        <div className="absolute top-[calc(100%+1rem)] right-2 bg-primary transition-all duration-300 max-h-0 overflow-hidden peer-checked:max-h-screen peer-checked:border peer-checked:border-white peer-checked:rounded-lg peer-checked:shadow-lg w-80">
          {renderMobileNavigationLinks()}
        </div>
      </div>
    </nav>
  );
}

function renderDesktopNavigationLinks() {
  return navigationLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      className="text-white text-xl relative group transition-all duration-300 ease-in-out"
    >
      <span className="group-hover:font-bold group-hover:text-yellow-100">
        {link.text}
      </span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-100 transition-all group-hover:w-full"></span>
    </a>
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
