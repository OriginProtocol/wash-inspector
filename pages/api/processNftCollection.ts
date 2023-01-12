// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import useAlchemy from "../../src/hooks/useAlchemy"
import useEtherscan from "../../src/hooks/useEtherscan"
import { transferHistory } from "../../src/data/nftTransactions"
const nftList = require("./nftList.json");
const fs = require('fs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address } = req.query;
  const alchemy = useAlchemy()

  const metadata = await alchemy.nft
        .getContractMetadata(address)


  const batchSize = 10;
  let batchedPromises = []
  let washTradedNfts = []

  for(let i = 1; i <= parseInt(metadata.totalSupply); i++) {
    if (i % 50 === 0) {
      console.log(`processed ${i} items`)
    }

    batchedPromises.push(transferHistory(address, i.toString()))
    if (batchedPromises.length >= batchSize) {
      let results = []
      try {
        results = await Promise.all(batchedPromises)
      } catch (e) {
        console.error(`Batch at nftId ${i - batchSize}-${i} failed: `, e)
        // just skip batch
      }

      batchedPromises = []
      washTradedNfts = [...washTradedNfts, ...results.filter(r => r.washTraded === true)]
    }
  }

  fs.writeFileSync(`${process.cwd()}/data/collectionAnalysis/${address.toLowerCase()}.json`, JSON.stringify(washTradedNfts, null, 2));


  res.status(200).json({ "status":"Done" })
}