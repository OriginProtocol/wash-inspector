// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import useAlchemy from "../../src/hooks/useAlchemy";
const nftList = require("./nftList.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const alchemy = useAlchemy();

  // const nftsForOwner = await alchemy.nft.getNftsForContract(
  //   "0x8bb186371d019a190e4fc01584dd164ae10063a8",
  //   {
  //     omitMetadata: false,
  //   }
  // );

  const test = await alchemy.nft.searchContractMetadata(
    "The MUTANT APE YACHT CLUB"
  );
  res.status(200).json({ name: "John Doe", test });

  //res.status(200).json({ name: 'John Doe', "res": nftsForOwner.nfts })
}
