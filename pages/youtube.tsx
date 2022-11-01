import Link from "next/link";
import Container from "components/Container";
import useSWR from "swr";
import axios from "axios";

import fetcher from "utils/fetcher";
import { YouTube } from "utils/types";

export default function Youtube({ response }) {
  const { data, error } = useSWR<YouTube>(`api/youtube`, fetcher);

  const subscriberCount = new String(data?.subscriberCount);
  const viewCount = new String(data?.viewCount);
  const videoCount = new String(data?.videoCount);

  return (
    <Container title="Youtube - Charles Kasasira">
      <div className="flex flex-col justify-center items-start mb-16 w-full text-black dark:text-white">
        <div className="w-full flex flex-col items-center justify-center my-10 min-h-[calc(40vh)]">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-bold text-7xl">{subscriberCount}</h2>
            <p>
              Subscribers{" "}
              <span className="flex gap-1 items-center text-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-[ping_2s_ease-in-out_infinite] delay-75 absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                updating
              </span>
            </p>
          </div>
          <div className="flex justify-around gap-5 w-full px-10">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl">{viewCount}</h2>
              <p>Views</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl">{videoCount}</h2>
              <p>Videos Uploaded</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const getServerSideProps = async () => {
  const response = await axios.get("/api/youtube");

  return {
    props: {
      response,
    },
  };
};
