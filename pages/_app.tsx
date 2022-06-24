import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "components/_global_/SEO";
import Layout from "components/_global_/layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add("dark");
  });

  return (
    <>
      <SEO
        title={pageProps.seo?.title}
        description={pageProps.seo?.description}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
