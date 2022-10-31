import Link from "next/link";
import Container from "components/Container";

export default function About() {
  return (
    <Container title="About - Charles Kasasira">
      <div className="flex flex-col justify-center items-start mb-16 w-full text-black dark:text-white">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark w-full">
          <h2>Bio</h2>
          <p>
            Hello, I&apos;m{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300 underline">
              @charleskasasira
            </span>
            , a software designer and developer based in Kampala, Uganda 🇺🇬. I
            am currently working at{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300 underline">
              @theablestate
            </span>{" "}
            where I am part of a team that designs and develops technologies
            that empower regular people to achieve great things. I also make
            tutorial based videos on my small space on youtube. I am currently a
            sophomore student of B.S in Computer Science at Makerere University.
          </p>
          <h3>Education</h3>
          <ul>
            <li>
              Pursing a B.S in computer science at Makerere University. (year
              II)
            </li>
            <li>
              Finished High School at London College of St. Lawrence (Physics,
              Chemistry, Mathematics, Computer Studies).
            </li>
          </ul>
          <h3>Certifications</h3>
          <p>Front-End Development Libraries - FreeCodeCamp (working on the projects)</p>
          <p>Mobile Application Development with Flutter</p>
          <p>D3 Virtualizations - FreeCodeCamp</p>
          <p>JavaScript Data Structures and Algorithms - FreeCodeCamp</p>
          <p>Responsive Web Design - FreeCodeCamp</p>
          <h2>Headshots</h2>
          <h2>Links</h2>
          <ul>
            <li>
              Youtube:{" "}
              <a href="https://youtube.com/charleskasasira">
                https://youtube.com/charleskasasira
              </a>
            </li>
            <li>
              Twitter: <a href="https://twitter.com/KasasiraC">@KasasiraC</a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/charleskasasira">@charleskasasira</a>
            </li>
            <li>
              Website:{" "}
              <Link href="https://kasasira.pages.dev">
                <span>https://kasasira.pages.dev</span>
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/charleskasasira/">
                https://www.linkedin.com/in/charleskasasira
              </a>
            </li>
          </ul>
          <div className="flex space-x-8"></div>
        </div>
      </div>
    </Container>
  );
}
