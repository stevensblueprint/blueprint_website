import React from "https://esm.sh/react";

export default function Button({
  style,
  text,
  redirect_url,
  openInNewTab = false,
}) {
  const target = openInNewTab ? "_blank" : "";
  return (
    <a className={style} href={redirect_url} target={target}>
      {text}
    </a>
  );
}
