import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "components/_global_/SEO";
import Layout from "components/_global_/layout";

function MyApp({ Component, pageProps }: AppProps) {
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
