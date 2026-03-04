import GoogleAnalytics from "./GoogleAnalytics.jsx";

export default function OpenGraphCommon() {
  return (
    <head>
      <meta charset="UTF-8" />
      <GoogleAnalytics />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://sitblueprint.com/assets/logos/logo.webp"
      />
    </head>
  );
}
