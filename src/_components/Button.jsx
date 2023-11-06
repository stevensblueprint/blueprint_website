import React from "https://esm.sh/react";

export default function Button({ style, text, redirect_url }) {
  return (
    <a className={style} href={redirect_url}>
      {text}
    </a>
  );
}
