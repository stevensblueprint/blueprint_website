import { Head } from "lume/plugins/jsx.ts";

const GA_ID = Deno.env.get("GA_ID") || "";

export default function Layout({ children }) {
  const isProd = Deno.env.get("ENV") === "prod";

  return (
    <html lang="en">
      <Head>
        {isProd && (
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
        )}
      </Head>

      <body>{children}</body>
    </html>
  );
}
