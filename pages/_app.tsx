import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "components/_global_/SEO";
import Layout from "components/_global_/layout";
import { useEffect, useLayoutEffect } from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SEO
        title={pageProps.seo?.title}
        description={pageProps.seo?.description}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
