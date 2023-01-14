// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transferHistory } from "../../src/data/nftTransactions";
import alchemy from "../../src/utils/alchemy";
import { uniq, orderBy } from "lodash";
import fs from "fs";
import { utils } from "ethers";
const nftList = require("./nftList.json");

//horrid little hack to make demo faster
const cache = {};

//tries to read from the walletAnalysis cache dir
const readCache = async (address) => {
  try {
    const data = await fs.promises.readFile(
      `${process.cwd()}/data/walletAnalysis/${address}.json`,
      "utf8"
    );
    console.log(`Cache hit on ${address}`);
    return JSON.parse(data);
  } catch (e) {
    console.log(`Cache miss on ${address}`);
    return null;
  }
};

const writeCache = async (address, data) => {
  try {
    await fs.promises.writeFile(
      `${process.cwd()}/data/walletAnalysis/${address}.json`,
      JSON.stringify(data, null, 4)
    );
  } catch (e) {
    console.error(`Failed to write cache for ${address}`, e);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { address } = req.query;
  const cached = await readCache(address);

  if (cached) {
    return res.status(200).json(cached);
  }

  const alc = alchemy();

  let nfts = [];
  let pageKey = false;
  let fetches = 0;
  do {
    const opts = {};
    if (pageKey) {
      opts.pageKey = pageKey;
    }
    const nftsResponse = await alc.nft.getNftsForOwner(address, opts);

    nfts = [...nfts, ...nftsResponse.ownedNfts];
    pageKey = nftsResponse.pageKey;
    fetches++;

    if (fetches > 10) break;
  } while (pageKey);

  const batchSize = 20;
  let batchedPromises = [];
  let washTradedNfts = [];

  for (let i = 0; i < nfts.length; i++) {
    if (i % 20 === 0) {
      console.log(`processed ${i}/${nfts.length - 1} items`);
    }

    const nftAddress = nfts[i].contract.address;
    const nftId = nfts[i].tokenId;

    batchedPromises.push(transferHistory(nftAddress, nftId));
    if (batchedPromises.length >= batchSize || i === nfts.length - 1) {
      let results = [];
      try {
        results = await Promise.all(batchedPromises);
      } catch (e) {
        console.error(`Batch at nftId ${i - batchSize}-${i} failed: `, e);
        // just skip batch
      }

      batchedPromises = [];
      const cleanResults = results
        .filter((r) => r.washTraded === true)
        .map((r) => {
          return {
            tokenId: r.tokenId,
            contractAddress: r.contractAddress,
            projectName: r.metadata.description,
            name: r.name,
            rarity: r.rarity,
            ownedBy: r.ownedBy,
            image: r.image,
            imageSrc: r.imageSrc,
            metadataSrc: r.metadataSrc,
            washTraded: r.washTraded,
            ethPrice: utils.formatUnits(
              orderBy(
                r.activity.filter(a => a.event === 'Sale'),
                ['timestamp'],
                ['desc']
              )[0].amount
            , 18),
            washTrades: uniq(r.washTrades.map((trade) => trade.washTradeType)),
          };
        });

      washTradedNfts = [...washTradedNfts, ...cleanResults];
    }
  }

  const data = { washTradedNfts };
  await writeCache(address, data);

  res.status(200).json(data);
}
