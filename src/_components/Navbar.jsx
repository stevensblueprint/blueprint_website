import React from "https://esm.sh/react";
export default function Navbar() {
  const logo = "../assets/logos/logo_negative.png";
  return (
    <nav className="relative flex items-center justify-between p-4 bg-primary z-50">
      <a href="/" className="flex items-center text-white">
        <img src={logo} alt="Logo" className="mr-2 w-8 h-8" />
        <span className="text-2xl font-semibold">
          blueprint
        </span>
      </a>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-6">
        <a href="/about" className="text-white">Mission</a>
        <a href="/projects" className="text-white">Projects</a>
        <a href="/apply" className="text-white">Get Involved</a>
        <a href="/blog" className="text-white">Blog</a>
      </div>

      {/* Mobile menu toggle */}
      <div className="lg:hidden">
        <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
        <label htmlFor="mobile-menu-toggle" className="block cursor-pointer p-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>

        {/* Mobile menu */}
        <div className="absolute top-full left-0 right-0 bg-primary transition-all duration-300 max-h-0 overflow-hidden peer-checked:max-h-screen">
          <a href="/about" className="block text-white p-4">Mission2</a>
          <a href="/projects" className="block text-white p-4">Projects</a>
          <a href="/apply" className="block text-white p-4">Get Involved</a>
          <a href="/blog" className="block text-white p-4">Blog</a>
        </div>
      </div>
    </nav>
  );
}