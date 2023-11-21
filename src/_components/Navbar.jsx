import React from "https://esm.sh/react";

export default function Navbar() {
  const logo = "../assets/logos/logo_negative.png";
  return (
    <nav className="flex items-center justify-center space-x-64 p-6 bg-primary">
      <a href="/" className="flex items-center text-white mr-60">
        <img src={logo} alt="Logo" className="mr-2 w-10 h-10" />
        <span className="self-center text-3xl font-semibold font-poppins whitespace-nowrap dark:text-white">
          blueprint
        </span>
      </a>
      <div>
        <a href="/about" className="mr-4 text-xl text-white">
          About
        </a>
        <a href="/projects" className="mr-4 text-xl text-white">
          Projects
        </a>
        <a href="/apply" className="mr-4 text-xl text-white">
          Apply
        </a>
        <a href="/blog" className="text-xl text-white">
          Blog
        </a>
      </div>
    </nav>
  );
}
