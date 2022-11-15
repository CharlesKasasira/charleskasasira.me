import React from "react";
import MobileMenu from "./MobileMenu";
import { motion, AnimateSharedLayout } from "framer-motion";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { menuData } from "utils/menuData";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import cn from "classnames";
import { useTheme } from "next-themes";

function NavItem({ href, text, activeIndex, setActiveIndex, index }) {
  const router = useRouter();
  // const isActive = router.asPath === href;

  const isActive = index === activeIndex;

  return (
    <motion.li
      onHoverStart={() => setActiveIndex(index)}
      className={`flex items-center ${
        router.asPath === href
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400"
      } hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all`}
    >
      <a
        href={href}
        // onClick={handleClick}
        className="relative px-2 z-10 py-2 inline-block cursor-pointer"
      >
        <span className="z-20">{text}</span>
        {isActive ? <motion.span layoutId="cover" className="cover bg-zinc-100 dark:bg-zinc-800 absolute inset-0 -z-20 rounded-md" /> : null}
      </a>
    </motion.li>
  );
}

function Nav() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <nav className="flex items-center w-full justify-between py-8">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>

      <div className="ml-[-0.60rem]">
        <MobileMenu />
        <AnimateSharedLayout>
          <motion.ul
            onHoverEnd={() => setActiveIndex(null)}
            className="flex items-center"
          >
            {menuData.map((menu, index) => (
              <NavItem
                href={menu.href}
                text={menu.text}
                activeIndex={activeIndex}
                index={index}
                key={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
      <div className="nav-cta">
        <DarkModeSwitch
          style={{ marginBottom: "0" }}
          checked={resolvedTheme === "dark"}
          onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          size={25}
        />
      </div>
    </nav>
  );
}

export default Nav;
