// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nftList = require("./nftList.json");
const fs = require('fs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address } = req.query;
  const file = `${process.cwd()}/data/collectionAnalysis/${address.toLowerCase()}.json`
  if (!fs.existsSync(file)) {
    res.status(404).json({
      message: `Can not find analysis of ${address}`
    });
  }

  const fileBuffer = fs.readFileSync(`${process.cwd()}/data/collectionAnalysis/${address.toLowerCase()}.json`);

  res.status(200).json(JSON.parse(fileBuffer));
}
