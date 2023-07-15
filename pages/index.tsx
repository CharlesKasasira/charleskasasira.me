import { Suspense } from "react";
import Container from "components/Container";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col mt-5">
          <div className="flex flex-col-reverse items-start">
            <div className="flex flex-col md:pr-8">
              <div className="overflow-x-hidden">
                <motion.h1
                  variants={variants} // Pass the variant object into Framer Motion
                  initial="hidden" // Set the initial state to variants.hidden
                  animate="enter" // Animated state to variants.enter
                  exit="exit" // Exit state (used later) to variants.exit
                  transition={{ type: "linear" }} // Set the transition to linear
                  className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white font-sans"
                >
                  Software designer + developer,
                  <br />
                  and small youtuber
                </motion.h1>
              </div>

              <p className="mb-5 w-full">
                Hello, I&apos;m Charles Kasasira, a software designer and
                developer based in Kampala, Uganda 🇺🇬. I am currently doing my internship at{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline cursor-pointer">
                  <a
                    href="https://renu.ac.ug"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @RENU
                  </a>
                </span>{" "} Uganda&apos;s NREN
                where I get to deepen my technical skills. I also make
                tutorial-based videos on my small space on{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline cursor-pointer">
                  <a href="https://youtube.com/@charleskasasira">youtube</a>
                </span>{" "}
                . I am currently a finalist in Computer Science at{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline cursor-pointer">
                  <a
                    href="https://mak.ac.ug"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Makerere University
                  </a>
                </span>
                .
              </p>
            </div>
            <div className="mb-5">
              <Image
                src="/pole.png"
                alt="Charles Kasasira"
                width={80}
                height={80}
                placeholder="blur"
                blurDataURL="/pole.png"
              />
            </div>
          </div>
          <div className="flex gap-2 mb-10 md:mb-10">
            <a
              href="https://www.youtube.com/channel/UClhrdUmdjbQi9fMq3R65BVw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube
                size={25}
                className="cursor-pointer text-neutral-500"
              />
            </a>
            <a
              href="https://www.github.com/charleskasasira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={25}
                className="cursor-pointer text-neutral-500"
              />
            </a>
            <a
              href="https://www.twitter.com/kasasirac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter
                size={25}
                className="cursor-pointer text-neutral-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/charleskasasira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={25}
                className="cursor-pointer text-neutral-500"
              />
            </a>
          </div>

          <div className="my-10 flex flex-col md:flex-row gap-5">
            <iframe
              // width="400"
              height="250"
              loading="lazy"
              title="How to create a custom upload file input by Charles Kasasira"
              className="outline outline-1 rounded hover:shadow-2xl -rotate-2"
              src="https://www.youtube.com/embed/FtpN8QI9PuA"
            ></iframe>
            <iframe
              // width="400"
              height="250"
              loading="lazy"
              title="How to create a custom upload file input by Charles Kasasira"
              className="outline outline-1 rounded hover:shadow-2xl rotate-2"
              src="https://www.youtube.com/embed/1czjJGA5dHQ"
            ></iframe>
            <iframe
              // width="400"
              height="250"
              loading="lazy"
              title="How to create a custom upload file input by Charles Kasasira"
              className="outline outline-1 rounded hover:shadow-2xl -rotate-2"
              src="https://www.youtube.com/embed/DAYoeJgolYg"
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2 my-10">
            <div>
              <a href="https://blog.charleskasasira.me/css-art-instagram-logo-with-pure-css">
                <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 mb-5">
                  <p className="text-sm font-light pl-2 border-l-4 mb-2">
                    May 21, 2022
                  </p>
                  <h2 className="font-medium mb-2">
                    CSS Art: Instagram Logo with pure CSS
                  </h2>
                  <p className="text-gray-600 text-sm dark:text-gray-400 mb-1 line-clamp-3">
                    In this (mostly code, &quot;little plain text&quot;) post, I
                    show you how I created an Instagram logo using CSS only
                    (plus a little HTML). You can find the full source code
                    here: CodePen
                  </p>
                  <span className="text-sm text-red-400">Read more</span>
                </div>
              </a>
              <a href="https://blog.charleskasasira.me/cheat-sheet-arrays-in-javascript">
                <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 mb-5">
                  <p className="text-sm font-light pl-2 border-l-4 mb-2">
                    Jan 22, 2022
                  </p>
                  <h2 className="font-medium mb-2">
                    Cheat sheet: Arrays in JavaScript
                  </h2>
                  <p className="text-gray-600 text-sm dark:text-gray-400 mb-1 line-clamp-3">
                    JavaScript Arrays are a very flexible data structure and are
                    used as lists, stacks, queues, etc. Every value in an array
                    is associated with a numeric index starting with 0. Here is
                    everything you need to get started with arrays
                  </p>
                  <span className="text-sm text-red-400">Read more</span>
                </div>
              </a>
              <a href="https://blog.charleskasasira.me/how-to-click-outside-to-close-in-javascript">
                <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 mb-5">
                  <p className="text-sm font-light pl-2 border-l-4 mb-2">
                    January 18, 2022
                  </p>
                  <h2 className="font-medium mb-2">
                    HOW TO: Click outside to close in Javascript
                  </h2>
                  <p className="text-gray-600 text-sm dark:text-gray-400 mb-1 line-clamp-3">
                    Hey, Charles Kasasira here, time to time, I write 2-minutes
                    packaged articles on how to do some cool stuff in web
                    development, and in this short &quot;Do It Yourself&quot;, I
                    would like to show you how you too can write a short piece
                    of code using HTML, CSS and vanilla javascript to close a
                    modal or any context by clicking outside, just like
                    twitter&apos;s context menu.
                  </p>
                  <span className="text-sm text-red-400">Read more</span>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-72 outline outline-1 rounded py-2 px-5">
                <h2 className="flex gap-2 items-center font-medium mb-2">
                  Subscribe to my youtube channel
                </h2>
                <hr className="mb-2" />
                <p>
                  I have uploaded over 75+ tutorials and planning to add more.
                </p>
                <a
                  href="https://www.youtube.com/channel/UClhrdUmdjbQi9fMq3R65BVw?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center mt-2"
                >
                  <span className="transition ease-in-out delay-150 bg-black text-white dark:bg-white dark:text-black rounded-lg py-1 px-5 w-full flex justify-center items-center hover:shadow-lg hover:-translate-y-1">
                    Subscribe
                  </span>
                </a>
              </div>
              <div className="w-72 outline outline-1 rounded py-2 px-5">
                <h3 className="flex gap-2 items-center font-medium mb-2">
                  {" "}
                  <MdOutlineWorkOutline /> Work
                </h3>
                <hr className="mb-2" />

                <div className="flex gap-2 w-full my-2 mb-5">
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1 flex justify-center items-center overflow-hidden">
                    <Image
                      src="/renu.jpg"
                      alt="RENU"
                      width={35}
                      height={35}
                      placeholder="blur"
                      blurDataURL="/renu.png"
                    />
                  </div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>RENU</p>
                      <p className="text-xs font-light">Intern</p>
                    </div>

                    <p className="text-sm font-light">2023 - present</p>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full my-2 mb-5">
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1 flex justify-center items-center overflow-hidden">
                    <Image
                      src="/ablestate.png"
                      alt="ablestate"
                      width={35}
                      height={35}
                      placeholder="blur"
                      blurDataURL="/ablestate.png"
                    />
                  </div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>Ablestate</p>
                      <p className="text-xs font-light">Front-End</p>
                    </div>

                    <p className="text-sm font-light">2021 - present</p>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full my-2 mb-5">
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1 flex justify-center items-center overflow-hidden">
                    <Image
                      src="/whd-logo.png"
                      alt="ablestate"
                      width={35}
                      height={35}
                      placeholder="blur"
                      blurDataURL="/whd-logo.png"
                    />
                  </div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>WHD</p>
                      <p className="text-xs font-light">Graphics Designer</p>
                    </div>

                    <p className="text-sm font-light">Sept 2020</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full my-2">
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1 flex justify-center items-center overflow-hidden">
                    <Image
                      src="/byte_of_hope.jpg"
                      alt="ablestate"
                      width={35}
                      height={35}
                      placeholder="blur"
                      blurDataURL="/byte_of_hope.jpg"
                    />
                  </div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>Byte Of Hope</p>
                      <p className="text-xs font-light">Founding member</p>
                    </div>

                    <p className="text-sm font-light">June 2019</p>
                  </div>
                </div>
                <button className="transition ease-in-out delay-150 bg-black text-white dark:bg-white dark:text-black rounded-lg py-1 px-5 w-full mt-2 hover:shadow-lg hover:-translate-y-1">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
