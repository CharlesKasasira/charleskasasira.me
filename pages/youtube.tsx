import Link from "next/link";
import Container from "components/Container";
import useSWR from "swr";
import axios from "axios";
import { currencyFormatter } from "utils/numberFormatter";

import fetcher from "utils/fetcher";
import { YouTube } from "utils/types";

export default function Youtube({ users, response }) {
  const { data, error } = useSWR<YouTube>(`api/youtube`, fetcher);

  const subscriberCount = new String(data?.subscriberCount);
  const viewCount = new String(data?.viewCount);
  const videoCount = new String(data?.videoCount);

  return (
    <Container title="Youtube - Charles Kasasira">
      <div className="flex flex-col justify-center items-start mb-16 w-full text-black dark:text-white">
        <div className="w-full flex flex-col items-center justify-center my-10 min-h-[calc(40vh)]">
          <div className="flex flex-col items-center mb-10">
            {subscriberCount && +subscriberCount > 0 ? (
              <h2 className="font-bold text-5xl md:text-7xl">
                {currencyFormatter(subscriberCount)}
              </h2>
            ) : (
              <div className="animate-pulse flex space-x-4">
                <h2 className="bg-slate-200 rounded font-bold text-5xl md:text-7xl h-8 md:h-12 w-36"></h2>
              </div>
            )}
            <p>
              Subscribers{" "}
              <span className="flex gap-1 items-center text-sm">
                <span className="flex h-3 w-3 relative justify-center items-center">
                  <span className="animate-[ping_2s_ease-in-out_infinite] delay-75 absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Live update
              </span>
            </p>
          </div>
          <div className="flex justify-around gap-5 w-full px-10">
            <div className="flex flex-col items-center">
              {viewCount && +viewCount > 0 ? (
                <h2 className="font-bold text-3xl md:text-5xl">
                  {currencyFormatter(viewCount)}
                </h2>
              ) : (
                <div className="animate-pulse flex space-x-4">
                  <h2 className="bg-slate-200 rounded font-bold text-3xl md:text-5xl h-6 md:h-8 w-36"></h2>
                </div>
              )}
              <p className="text-sm md:text-md">Views</p>
            </div>
            <div className="flex flex-col items-center">
              {videoCount && +videoCount > 0 ? (
                <h2 className="font-bold text-3xl md:text-5xl">
                  {currencyFormatter(videoCount)}
                </h2>
              ) : (
                <div className="animate-pulse flex space-x-4">
                  <h2 className="bg-slate-200 rounded font-bold text-3xl md:text-5xl h-6 md:h-8 w-24"></h2>
                </div>
              )}
              <p className="text-sm md:text-md">Videos Uploaded</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://charleskasasira.com/api/youtube");
  const users = await response.json();

  return {
    props: { users },
  };
};
