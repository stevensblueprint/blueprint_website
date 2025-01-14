import React from "https://esm.sh/react";

export function SocialIcon({ href, icon, label }) {
  return (
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
}
