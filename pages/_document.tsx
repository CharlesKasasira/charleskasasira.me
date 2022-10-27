import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/pole.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="Charles Kasasira 's portfolio website"
        />
      </Head>
      <body className="bg-[#f6f7f8] dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
