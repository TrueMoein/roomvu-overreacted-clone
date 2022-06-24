import Head from "next/head";
import { FC } from "react";

export interface SeoProps {
  title: string;
  description: string;
}

const SEO: FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{`CoolReacted — ${title || "---"}`}</title>
      <meta name="description" content={description || "---"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
