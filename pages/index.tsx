import { Suspense } from "react";
import Container from "components/Container";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white font-sans">
                Charles Kasasira
              </h1>
              <h2 className="text-gray-700 text-xl dark:text-gray-200 mb-4">
                Software developer{" "}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Fullstack web developer aiming to design and develop experiences
                that make people's lives simple.
              </p>
            </div>
            <div>Hello</div>
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
