import React from "https://esm.sh/react";

export default function Navbar() {
  const logo = "../assets/logos/logo_negative.png";

  return (
    <nav className="flex items-center justify-between p-4 bg-primary z-50">
      <a href="/" className="flex items-center text-white">
        <img src={logo} alt="Logo" className="mr-2 w-8 h-8" />
        <span className="text-2xl font-semibold">
          blueprint
        </span>
      </a>
      
      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6">
        <a href="/about" className="text-white">Mission</a>
        <a href="/projects" className="text-white">Projects</a>
        <a href="/apply" className="text-white">Get Involved</a>
        <a href="/blog" className="text-white">Blog</a>
      </div>
      
      {/* Hamburger icon for mobile; mobile defined as width < (md / 768) */}
      <div className="md:hidden">
        <button id="mobile-menu-button" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div id="mobile-menu" className="hidden md:hidden absolute top-16 left-0 right-0 bg-primary">
        <a href="/about" className="block text-white p-4">Mission</a>
        <a href="/projects" className="block text-white p-4">Projects</a>
        <a href="/apply" className="block text-white p-4">Get Involved</a>
        <a href="/blog" className="block text-white p-4">Blog</a>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          var mobileMenuButton = document.getElementById('mobile-menu-button');
          var mobileMenu = document.getElementById('mobile-menu');

          mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
          });

          function updateMenuVisibility() {
            var windowWidth = window.innerWidth;
            console.log("Current screen width: " + windowWidth);
            if (windowWidth >= 768) {
              mobileMenu.classList.add('hidden');
            }
          }

          window.addEventListener('resize', updateMenuVisibility);
          updateMenuVisibility();
        });
      `}} />
    </nav>
  );
}