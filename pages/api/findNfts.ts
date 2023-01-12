// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nftList = require("./nftList.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { search } = req.query;
  // if last letter is "s" remove it from search
  search =
    search.length > 1 && search[search.length - 1] === "s"
      ? search.substr(0, search.length - 1)
      : search;

  res.status(200).json({
    result: nftList.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase())
      );
    }),
  });
}
