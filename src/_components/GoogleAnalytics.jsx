export default function GoogleAnalytics() {
  const GA_ID = Deno.env.get("GA_ID") || "";
  const isProd = Deno.env.get("ENV") === "prod";

  if (!isProd) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </script>
    </>
  );
}
