import React from "https://esm.sh/react";

// Global navigation links array
//! href for "about" and "apply" may need to be changed
const navigationLinks = [
  { href: "/about", text: "Mission" },
  { href: "/projects", text: "Projects" },
  { href: "/apply", text: "Get Involved" },
  { href: "/blog", text: "Blog" }
];

export default function NavigationBar() {
  const logo = "../assets/logos/logo_negative.png";
  return (
    <nav className="relative flex items-center justify-between p-4 bg-primary z-50">
      {/* Logo and Brand Name Section */}
      <a href="/" className="flex items-center text-white">
        <img src={logo} alt="Blueprint Logo" className="mr-2 w-8 h-8" />
        <span className="text-2xl font-semibold">
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
        
        {/* Change background color for dropdwon menu here if desired */}
        {/* current dropdown menu css:
        - 16px from top
        - 2px from right 
        - bg color = primary */}
        <div className="absolute top-[calc(100%+1rem)] right-2 bg-primary transition-all duration-300 max-h-0 overflow-hidden peer-checked:max-h-screen peer-checked:border peer-checked:border-white peer-checked:rounded-lg peer-checked:shadow-lg w-48">
          {renderMobileNavigationLinks()}
        </div>
      </div>
    </nav>
  );
}

// Function to render desktop navigation links
function renderDesktopNavigationLinks() {
  //Map through the links to render them
  return navigationLinks.map((link, index) => (
    <a key={index} href={link.href} className="text-white">
      {link.text}
    </a>
  ));
}

// Function to render mobile navigation links
function renderMobileNavigationLinks() {
  //Map through the links to render them
  return navigationLinks.map((link, index) => (
    <a 
      key={index}
      href={link.href} 
      className={`
        block text-white p-3 text-sm 
        hover:bg-white hover:bg-opacity-10
        ${
          // Add a bottom border to all items except the last one
          index !== navigationLinks.length - 1 ? 'border-b border-white' : ''}
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
      className="w-6 h-6 text-white" 
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