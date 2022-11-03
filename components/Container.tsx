import Head from "next/head";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cn from "classnames";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

import { DarkModeSwitch } from "react-toggle-dark-mode";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href}>
      <span
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
        )}
      >
        {text}
      </span>
    </NextLink>
  );
}

function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customProps } = props;
  const meta = {
    title: "Charles Kasasira - Developer, creator",
    description:
      "Front-end developer, Computer Science enthusiast, and youtube creator",
    type: "website",
    ...customProps,
    image: "https://charleskasasira.vercel.app/static/images/charles-kasasira.png"
  };
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#000000]">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
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
          <nav className="flex items-center w-full justify-between py-8">
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>
            <div className="ml-[-0.60rem]">
              <MobileMenu />
              <NavItem href="/" text="Home" />
              <NavItem href="/about" text="About" />
              <NavItem href="/articles" text="Articles" />
              <NavItem href="/projects" text="Projects" />
              <NavItem href="/youtube" text="Youtube" />
            </div>
            <div className="nav-cta">
              <DarkModeSwitch
                style={{ marginBottom: "0" }}
                checked={resolvedTheme === "dark"}
                onChange={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                size={25}
              />
            </div>
          </nav>
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
