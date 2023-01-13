// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { countBy, orderBy } from "lodash";
import collectionData from "../../data/collectionsdata";
import useAlchemy from "../../src/hooks/useAlchemy";
const fs = require("fs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    //let { generate } = req.query;
    res.status(200).json({ result: (await generateNFTAggregate()) });
}

async function generateNFTAggregate(){
  const alchemy = useAlchemy();
  const files = fs.readdirSync(`${process.cwd()}/data/collectionAnalysis/`)

  let totalTrades = 0
  let totalWashTrades = 0
  let totalVolume = 0
  let totalWashVolume = 0
  let nftProjects = []

  await Promise.all(files.map(async function (file) {
    const fileBuffer = fs.readFileSync(`${process.cwd()}/data/collectionAnalysis/${file}`);
    const json = JSON.parse(fileBuffer)

    const {trades, washTrades, volume, washVolume, address, washTradedNfts} = json
    totalTrades += trades
    totalWashTrades += washTrades
    totalVolume += volume
    totalWashVolume += washVolume

    const metadata = await alchemy.nft.getContractMetadata(address);

    nftProjects.push({
      address,
      name: metadata.name,
      imageUrl: metadata.openSea.imageUrl,
      externalUrl: metadata.openSea.externalUrl,
      description: metadata.openSea.description,
      trades,
      washTrades,
      volume,
      washVolume,
      nftsWashTradedCount: washTradedNfts.length,
      washTradedNftsAggregates: countBy(washTradedNfts.flatMap(nft => nft.washTrades))
    })
  }));

  return {
    totalTrades,
    totalWashTrades,
    totalVolume,
    totalWashVolume,
    nftProjects: orderBy(nftProjects, ["washTrades"], ["desc"])
  };
}



// fs.writeFileSync(
//     `${process.cwd()}/data/collectionAnalysis/${address.toLowerCase()}.json`,
//     JSON.stringify(stats, null, 2)
//   );