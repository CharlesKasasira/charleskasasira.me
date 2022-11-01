import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UClhrdUmdjbQi9fMq3R65BVw&key=${process.env.YOUTUBE_APIKEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json({
        subscriberCount: data["items"][0]["statistics"].subscriberCount,
        viewCount: data["items"][0]["statistics"].viewCount,
        videoCount: data["items"][0]["statistics"].videoCount,
      });
    })
    .catch(() =>
      res.status(500).json({
        message: "Failed",
      })
    );

  // const channel = response.data.items[0];
  // const { subscriberCount, viewCount } = channel.statistics;
}
