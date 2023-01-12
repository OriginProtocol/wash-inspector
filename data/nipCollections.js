import rawData from "./collectionsdata";

//a bunch of contracts don't have images for some reason
const contractsWithoutImages = [
  "0x031920cc2D9F5c10B444FD44009cd64F829E7be2",
  "0x062E691c2054dE82F28008a8CCC6d7A1c8ce060D",
  "0x0Cfb5d82BE2b949e8fa73A656dF91821E2aD99FD",
  "0x320DB1CEF246882A185F204e310FE37b5831EaaD",
  "0x3a5051566b2241285BE871f650C445A88A970edd",
  "0x466CFcD0525189b573E794F554b8A751279213Ac",
  "0x532e5EFdeD726C6dDe5228f35d805f531c14B0eB",
  "0x735eff20E5CfcA52d72a9e5Eba5A2EB6cC92357a",
  "0x73883743Dd9894bd2D43e975465b50DF8d3aF3B2",
  "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
  "0x91E12328A89DB3771451a38781E45f20B8097e39",
  "0x960b7a6BCD451c9968473f7bbFd9Be826EFd549A",
  "0x9f1f2696f4E8F138c1Cc92361960665cb2D4617E",
  "0xA3F7250306Dbb856D8d312f93029be73343939aF",
  "0xEC830414D73C7289027203FB7546Bc296Aa55B5E",
  "0xF928d6285B8a4f9ac5A640ae598D7399C331cea7",
  "0xb76FBBB30e31F2c3BDaA2466CfB1CfE39b220D06",
  "0xbCe3781ae7Ca1a5e050Bd9C4c77369867eBc307e",
  "0xd21bc48E08B8BCA95939A6F7BabdCa9dD1ac6428",
  "0xd668A2E001f3385B8BBC5a8682AC3C0D83C19122",
  "0x3a291C60e44cd3Cad75980B74866233d4b286007",
  "0xc5E395EF8eFA253940D62A8810112565Cc0faE4e",
];

//this just does some fakery to add interesting wash-trady data to the collections
export default rawData
  .map((collection, index) => {
    //some semi-random fake data we just make up
    const buyerIsSellerTransactionsPercentage = Math.abs(
      (index % 2) + (5 - (index % 10))
    );
    const backAndForthTransactionPercentage =
      (index % 5) + Math.abs(5 - (index % 10));
    const sameWalletFundedTransactionPercentage =
      (index % 3) + Math.abs(6 - (index % 10));
    const boughtThreeTimesTransactionPercentage =
      (index % 3) + Math.abs(3 - (index % 10));

    const totalSuspiciousTransactionPercentage =
      buyerIsSellerTransactionsPercentage +
      backAndForthTransactionPercentage +
      boughtThreeTimesTransactionPercentage +
      sameWalletFundedTransactionPercentage;

    return {
      contractAddress: collection.gsiSortKey,
      title: collection.contractInfo.name,
      symbol: collection.contractInfo.symbol,
      totalSupply: collection.contractInfo.totalSupply,
      tokensIngested: collection.tokensIngested,
      traitsIngested: collection.traitsIngested,
      metadataIngested: collection.metadataIngested,
      assetsIngested: collection.assetsIngested,
      openseaSlug: collection.openseaSlug,
      // thumbnail: `https://assets.story.xyz/${collection.gsiSortKey}/assets/md/4505`,
      thumbnail: `https://nip-demo-bucket83908e77-dc1e7vryd6rd.s3.amazonaws.com/partner-assets/ethereum-1/${collection.gsiSortKey}/md/1`,

      washTradingIndicators: {
        totalSuspiciousTransactionPercentage,
        backAndForthTransactionPercentage,
        sameWalletFundedTransactionPercentage,
        boughtThreeTimesTransactionPercentage,
        buyerIsSellerTransactionsPercentage,
      },
    };
  })
  .filter(
    (collection) => !contractsWithoutImages.includes(collection.contractAddress)
  );
