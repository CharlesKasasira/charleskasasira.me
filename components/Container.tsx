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
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
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
      "Front-end developer, Computer Science enthusiast, youtube creator",
    type: "website",
    ...customProps,
  };
  return (
    <div className="bg-[#f6f7f8] dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KasasiraC" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center w-full justify-between py-8 mx-auto max-w-3xl">
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
  );
}

export default Container;
