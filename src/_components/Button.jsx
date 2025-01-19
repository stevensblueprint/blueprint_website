import React from "https://esm.sh/react@19.0.0";

export default function Button({
  style,
  text,
  redirect_url,
  download,
  openInNewTab = false,
}) {
  const target = openInNewTab ? "_blank" : "";
  return (
    <a
      className={style}
      href={redirect_url}
      target={target}
      download={download}
    >
      {text}
    </a>
  );
}
