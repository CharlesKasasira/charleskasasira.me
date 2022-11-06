// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
const fs = require("fs");

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = "charleskasasira"
const file = "githuGraph.json"

fetch("https://github.com/users/{user}/contributions".replace("{user}", user))
  .then((res) => res.text())
  .then(loadGraph);

  function loadGraph(text) {
    var data,
      re = /(data-count="\d".*data-date="\d{4}-\d{2}-\d{2}")/g,
      matches = text.match(re);
    data = matches.map(function (match) {
      return {
        count: +match.match(/data-count="(\d)"/)[1],
        date: match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1],
      };
    });
    fs.writeFile(file, JSON.stringify(data, null, 2), function (err) {
      if (err) console.error(err);
      else console.info("Exported %d days' events", data.length);
    });
    console.log(data)
    res.status(200).json({ name: data })
  }
  // res.status(200).json({ name: 'Failed' })
  // res.status(200).json({message: "hello world"})

  
}
