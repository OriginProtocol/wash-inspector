// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import useAlchemy from "../../src/hooks/useAlchemy"
import useEtherscan from "../../src/hooks/useEtherscan"
import { transferHistory } from "../../src/data/nftTransactions"
import { uniq, reduce } from "lodash"
import { utils, BigNumber } from "ethers"
const nftList = require("../../data/collectionsdata.js");
const fs = require('fs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address } = req.query;

  for (let i = 0; i < nftList.length; i++) {
    const address = nftList[i].gsiSortKey
    const name = nftList[i].contractInfo.name
    console.log(`Processing ${i}/${nftList.length} name: ${name} address: ${address}`)
    try {
      await processNft(address)
    } catch (e) {
      console.error(`Failed processing name: ${name} address: ${address}`, e)
    }
  }
  res.status(200).json({ "status":"Done" })
}

async function processNft(address) {

  const alchemy = useAlchemy()

  const metadata = await alchemy.nft
        .getContractMetadata(address)


  const batchSize = 10;
  let batchedPromises = []
  let washTradedNfts = []
  const stats = {
    trades: 0,
    washTrades: 0,
    volume: BigNumber.from("0"),
    washVolume: BigNumber.from("0")
  }

  for(let i = 1; i <= parseInt(metadata.totalSupply); i++) {
    if (i % 50 === 0) {
      console.log(`processed ${i}/${metadata.totalSupply} items`)
    }

    // do not process more than 10k items
    if (i > 10000) {
      break;
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
      const cleanResults = results.filter(r => r.washTraded === true).map(r => {
        stats.trades = stats.trades + r.activity.filter(a => a.event === "Sale").length
        stats.washTrades = stats.washTrades + r.washTrades.length

        const getSalesVolume = (iteratee) => {
          return reduce(iteratee.filter(a => 
            a.event === "Sale" &&
            (a.currency === "0x0000000000000000000000000000000000000000" || 
             a.currency === "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2") // WETH
          ), (aggregator, sale) => {
            return aggregator.add(BigNumber.from(sale.amount))
          }, BigNumber.from("0"))
        }

        stats.volume = BigNumber.from(stats.volume).add(getSalesVolume(r.activity))
        // the first transaction is the one representing the sale
        stats.washVolume = BigNumber.from(stats.washVolume).add(getSalesVolume(r.washTrades.map(trade => trade.transactions[0])))
        

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

  stats.volume = parseFloat(utils.formatUnits(stats.volume, 18))
  stats.address = address
  stats.washVolume = parseFloat(utils.formatUnits(stats.washVolume, 18))
  stats.washTradedNfts = washTradedNfts
  fs.writeFileSync(`${process.cwd()}/data/collectionAnalysis/${address.toLowerCase()}.json`, JSON.stringify(stats, null, 2));
}