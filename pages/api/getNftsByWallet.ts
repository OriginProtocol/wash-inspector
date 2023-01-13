// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { transferHistory } from "../../src/data/nftTransactions"
import useAlchemy from "../../src/hooks/useAlchemy"
import { uniq } from "lodash"
const nftList = require("./nftList.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address } = req.query;
  const alchemy = useAlchemy()
    
  let nfts = []
  let pageKey = false
  let fetches = 0
  do {
    const opts = {}
    if (pageKey) {
      opts.pageKey = pageKey
    }
    const nftsResponse = await alchemy.nft.getNftsForOwner(address, opts)

    nfts = [...nfts, ...nftsResponse.ownedNfts]
    pageKey = nftsResponse.pageKey
    fetches++

    if(fetches > 10)
      break;
  } while (pageKey)

  const batchSize = 20;
  let batchedPromises = []
  let washTradedNfts = []
  
  for(let i = 0; i < nfts.length; i++) {
    if (i % 20 === 0) {
      console.log(`processed ${i}/${nfts.length - 1} items`)
    }

    const nftAddress = nfts[i].contract.address;
    const nftId = nfts[i].tokenId;

    batchedPromises.push(transferHistory(nftAddress, nftId))
    if (batchedPromises.length >= batchSize || i === nfts.length - 1) {
      let results = []
      try {
        results = await Promise.all(batchedPromises)
      } catch (e) {
        console.error(`Batch at nftId ${i - batchSize}-${i} failed: `, e)
        // just skip batch
      }

      batchedPromises = []

      const cleanResults = results.filter(r => r.washTraded === true).map(r => {
        return {
          tokenId: r.tokenId,
          name: r.name,
          rarity: r.rarity,
          ownedBy: r.ownedBy,
          image: r.image,
          imageSrc: r.imageSrc,
          metadataSrc: r.metadataSrc,
          washTraded: r.washTraded,
          washTrades: uniq(r.washTrades.map(trade => trade.washTradeType))
        }
      })

      washTradedNfts = [...washTradedNfts, ...cleanResults]
    }
  }

  res.status(200).json({ washTradedNfts })
}
