## Wash Inspector

NFT trade analytics tool that identifies NFTs that have been wash traded.

## Getting Started

Copy dev.env to .env and fill out missing variables. 

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## NFT Wash trades identification

`wallets_connected` -> there is a probability that buyer and seller of the NFT have wallets connected -> and could be the same person/entity. Meaning that transfers have happened directly or indirectly between these 2 wallets without a Sale event. This could yield some false positives -> lets say in case of an OTC.

`buyer_is_seller` -> buyer and seller are the same wallet

`back_and_forth` -> buyer and seller have 2 transactions where the NFT has moved back and forth

TODO:

`3_times_buyer` -> same wallet has bought the NFT 3 or more times

`3_times_seller` -> same wallet has sold the NFT 3 or more times

`connected_wallets_3_times_buyer` -> connected wallets have bought the NFT 3 or more times
`connected_wallets_3_times_seller` -> connected wallets have sold the NFT 3 or more times


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

