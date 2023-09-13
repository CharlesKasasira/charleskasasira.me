import Link from "next/link";
import Container from "components/Container";

export default function About() {
  return (
    <Container title="About - Charles Kasasira">
      <div className="flex flex-col justify-center items-start mb-16 w-full text-black dark:text-white">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 dark:prose-dark text-gray-600 dark:text-gray-400 w-full">
          {/* <h2 className="text-gray-800 dark:text-gray-200">Bio</h2> */}
          <p className="mb-5 w-full">
                Hello, I&apos;m Charles Kasasira, a software designer and
                developer based in Kampala, Uganda 🇺🇬. I am currently doing my final year in Computer Science at{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline cursor-pointer">
                  <a
                    href="https://mak.ac.ug"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Makerere University
                  </a>
                </span>{" "}. Over the past 3 years, I have had the privilege of working on a wide range of projects, each presenting its own unique challenges and opportunities. 
                These experiences have allowed me to become proficient in multiple computing concepts, programming languages and development frameworks, equipping me with the versatility needed 
                to adapt to the ever-evolving tech landscape. 
                When I&apos;m not immersed in lines of code, I record and edit
                tutorial-based videos on my small space on{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 underline cursor-pointer">
                  <a href="https://youtube.com/@charleskasasira">youtube</a>
                </span>{" "}
                .
              </p>
          <br />
          <br />
          <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">
            Education
          </h2>
          <ul>
            <li>Pursing a B.S in computer science at Makerere University.</li>
            <li>
              High School at London College of St. Lawrence (Physics, Chemistry,
              Mathematics, Computer Studies).
            </li>
          </ul>
          <br />
          <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">
            Certifications
          </h2>
          <p>Machine Learning with Python - FreeCodeCamp</p>
          <p>Introduction to Generative AI - Google Cloud Skill Boost</p>
          <p>Introduction to Machine Learning - Kaggle</p>
          <p>Front-End Development Libraries - FreeCodeCamp</p>
          <p>Full-Stack Web Development - Ablestate</p>
          <p>Mobile Application Development with Flutter - GDSC MUK</p>
          <p>D3 Virtualizations - FreeCodeCamp</p>
          <p>JavaScript Data Structures and Algorithms - FreeCodeCamp</p>
          <p>Responsive Web Design - FreeCodeCamp</p>

          <br />

          {/* <h2 className="text-gray-800 dark:text-gray-200">Headshots</h2> */}

          <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">
            Links
          </h2>
          <ul>
            <li>
              Youtube:{" "}
              <a
                href="https://youtube.com/charleskasasira"
                className="font-medium text-gray-700 dark:text-gray-300 underline"
              >
                youtube.com/charleskasasira
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                href="https://twitter.com/KasasiraC"
                className="font-medium text-gray-700 dark:text-gray-300 underline"
              >
                @KasasiraC
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/charleskasasira"
                className="font-medium text-gray-700 dark:text-gray-300 underline"
              >
                @charleskasasira
              </a>
            </li>
            <li>
              Website:{" "}
              <Link
                href="https://charleskasasira.me"
                className="font-medium text-gray-700 dark:text-gray-300 underline"
              >
                <span>charleskasasira.me</span>
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/charleskasasira/"
                className="font-medium text-gray-700 dark:text-gray-300 underline"
              >
                linkedin.com/in/charleskasasira
              </a>
            </li>
          </ul>
          <div className="flex space-x-8"></div>
        </div>
      </div>
    </Container>
  );
}
