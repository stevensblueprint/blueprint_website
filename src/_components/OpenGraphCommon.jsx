import React from "https://esm.sh/react";

export default function OpenGraphCommon() {
  return (
    <html prefix="og: https://ogp.me/ns#">
      <head>
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sitblueprint.com/assets/logos/logo.png"
        />
      </head>
    </html>
  );
}
