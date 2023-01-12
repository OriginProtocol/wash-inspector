// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { transferHistory } from "../../src/data/nftTransactions"
const nftList = require("./nftList.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address, tokenId } = req.query;
  
  const history = await transferHistory(address, tokenId)

  res.status(200).json({ history })
}
