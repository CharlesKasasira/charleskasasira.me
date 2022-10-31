import Container from "components/Container";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <Container title="404 - Charles Kasasira">
      <div className="flex flex-col justify-center items-start my-16 w-full">
        <h1 className="font-bold text-8xl md:text-9xl tracking-tight mb-1 text-black dark:text-white font-sans">
          404
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white font-sans">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Not to worry you didn't break the internet, I just could not find this page. You can head over to my homepage or checkout my youtube videos.
        </p>
        <Link href="/">
          <span className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">Back to Home</span>
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
