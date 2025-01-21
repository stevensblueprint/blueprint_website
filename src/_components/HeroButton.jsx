import React from "https://esm.sh/react@19.0.0";

export default function HeroButton({
  text,
  redirect_url,
  download,
  openInNewTab = false,
}) {
  const target = openInNewTab ? "_blank" : "";
  return (
    <a
      className="text-xs sm:min-w-[191px] md:text-base text-center py-1 md:py-2 px-3 md:px-4 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
      href={redirect_url}
      target={target}
      download={download}
    >
      {text}
    </a>
  );
}
