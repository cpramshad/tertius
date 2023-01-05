import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="lazyOnload"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-MKZQWLV"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-4NWF3ZVNCF"
        />
      </Head>
      <body>
        <script id="gtm-test" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4NWF3ZVNCF', {
    page_path: window.location.pathname,
    optimize_id: OPT-MKZQWLV}
    });
`}
        </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
