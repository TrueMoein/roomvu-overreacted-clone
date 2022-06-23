import Head from "next/head";

export interface SeoProps {
  title: string;
  description: string;
}

function SEO({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{`CoolReacted — ${title || "---"}`}</title>
      <meta name="description" content={description || "---"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
