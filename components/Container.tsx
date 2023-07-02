import dynamic from "next/dynamic";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
import Nav from "./nav";

function Container(props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => setMounted(true), []);

  const { children, ...customProps } = props;
  const meta = {
    title: "Charles Kasasira - Developer, Creator",
    description:
      "Charles Kasasira is a Front-end developer, Computer Science enthusiast, and youtube creator.",
    type: "website",
    ...customProps,
    image: "https://charleskasasira.me/static/images/charles-kasasira.png",
  };

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#000000]">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://charleskasasira.me${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://charleskasasira.me${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Charles Kasasira" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KasasiraC" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col max-w-4xl lg:max-w-5xl mx-auto min-h-screen bg-white dark:bg-[#18181b] shadow-lg px-6 md:px-12">
        <div className="flex flex-col justify-center">
          <Nav />
        </div>
        <main id="skip" className="flex flex-col justify-center">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Container;
