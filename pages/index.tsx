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

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col mt-5">
          <div className="flex flex-col-reverse items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white font-sans">
                Software designer + developer 🦄,
                <br />
                and small youtuber
              </h1>
              {/* <h2 className="text-gray-700 text-xl dark:text-gray-200 mb-4">
                Software designer , developer and small youtuber
              </h2> */}
              <p className="text-gray-600 dark:text-gray-400 mb-10">
                Hello, I&apos;m{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline">
                  <a
                    href="https://twitter.com/kasasiraC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @charleskasasira
                  </a>
                </span>
                , a software designer and developer based in Kampala, Uganda. I
                am currently working at{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline">
                  <a
                    href="https://twitter.com/theablestate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @theablestate
                  </a>
                </span>{" "}
                where I am part of a team that designs and develops technologies
                that empower regular people to achieve great things. I also make
                tutorial based videos on my small space on youtube.
              </p>
            </div>
            <div className="mb-5">
              <Image
                src="/pole.png"
                alt="Charles Kasasira"
                width={80}
                height={80}
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
                color="#4b5563"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.github.com/charleskasasira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={25}
                color="#4b5563"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.twitter.com/kasasirac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter
                size={25}
                color="#4b5563"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/charleskasasira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={25}
                color="#4b5563"
                className="cursor-pointer"
              />
            </a>
          </div>

          <div className="my-10 flex flex-col md:flex-row gap-5">
            <iframe
              width="400"
              height="250"
              className="outline outline-1 rounded hover:shadow-2xl -rotate-2"
              src="https://www.youtube.com/embed/FtpN8QI9PuA"
            ></iframe>
            <iframe
              width="400"
              height="250"
              className="outline outline-1 rounded hover:shadow-2xl rotate-2"
              src="https://www.youtube.com/embed/1czjJGA5dHQ"
            ></iframe>
            <iframe
              width="400"
              height="250"
              className="outline outline-1 rounded hover:shadow-2xl -rotate-2"
              src="https://www.youtube.com/embed/DAYoeJgolYg"
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2 my-10">
            <div>
              <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 mb-5">
                <p className="text-sm font-light pl-2 border-l-4 mb-2">
                  October 25, 2022
                </p>
                <h3 className="font-medium mb-2">
                  Subscribe to my youtube channel
                </h3>
                <p className="text-gray-500 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  tellus in vitae, quam et. Lacus, senectus tincidunt ipsum
                  pretium.
                </p>
                <span className="text-sm text-red-400">Read more</span>
              </div>
              <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 mb-5">
                <p className="text-sm font-light pl-2 border-l-4 mb-2">
                  October 25, 2022
                </p>
                <h3 className="font-medium mb-2">
                  Subscribe to my youtube channel
                </h3>
                <p className="text-gray-500 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  tellus in vitae, quam et. Lacus, senectus tincidunt ipsum
                  pretium.
                </p>
                <span className="text-sm text-red-400">Read more</span>
              </div>
              <div className="p-4 rounded cursor-pointer hover:bg-zinc-50 mb-5">
                <p className="text-sm font-light pl-2 border-l-4 mb-2">
                  October 25, 2022
                </p>
                <h3 className="font-medium mb-2">
                  Subscribe to my youtube channel
                </h3>
                <p className="text-gray-500 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  tellus in vitae, quam et. Lacus, senectus tincidunt ipsum
                  pretium.
                </p>
                <span className="text-sm text-red-400">Read more</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-72 outline outline-1 rounded py-2 px-5">
                <h3 className="flex gap-2 items-center font-medium mb-2">
                  Subscribe to my youtube channel
                </h3>
                <hr className="mb-2" />
                <p>
                  I have uploaded over 50+ tutorials and planning to add more.
                </p>
                <button className="bg-black text-white rounded-lg py-1 px-5 w-full mt-2">
                  Subscribe
                </button>
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
                      src="/ablestate.png"
                      alt="ablestate"
                      width={35}
                      height={35}
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
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1"></div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>WHD</p>
                      <p className="text-xs font-light">Graphics Designer</p>
                    </div>

                    <p className="text-sm font-light">Sept 2020</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full my-2">
                  <div className="bg-gray-200 rounded-full w-10 h-10 outline outline-1"></div>
                  <div className="flex justify-between flex-grow">
                    <div className="flex flex-col">
                      <p>Byte Of Hope</p>
                      <p className="text-xs font-light">Founding member</p>
                    </div>

                    <p className="text-sm font-light">June 2019</p>
                  </div>
                </div>
                <button className="bg-black text-white rounded-lg py-1 px-5 w-full mt-2">
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
