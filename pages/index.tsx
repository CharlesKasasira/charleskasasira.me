import { Suspense } from "react";
import Container from "components/Container";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </Container>
    </Suspense>
  );
}
