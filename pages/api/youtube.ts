import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

import googleAuth from 'utils/google';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const auth = await googleAuth.getClient();
  // const youtube = google.youtube({
  //   auth,
  //   version: 'v3'
  // });

  // console.log("hello world")

  // const response = await youtube.channels.list({
  //   id: 'UCZMli3czZnd1uoc1ShTouQw',
  //   part: 'statistics'
  // });

  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UClhrdUmdjbQi9fMq3R65BVw&key=AIzaSyA-Yy91AK-mW72DRWGxF9ChCXbaiMa-8rc`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            res.setHeader(
              'Cache-Control',
              'public, s-maxage=1200, stale-while-revalidate=600'
            );
            // console.log(data)
          
            return res.status(200).json({
              subscriberCount: data["items"][0]["statistics"].subscriberCount,
              viewCount: data["items"][0]["statistics"].viewCount,
              videoCount: data["items"][0]["statistics"].videoCount,
            });
        }).catch(() => res.status(500).json({
            message: "Failed"
          }))
        
      
        

  // const channel = response.data.items[0];
  // const { subscriberCount, viewCount } = channel.statistics;
}