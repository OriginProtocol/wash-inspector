module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
      chainId: 1337,
      initialBaseFeePerGas: 0,
      gas: 7000000,
      gasPrice: 1000,
    },
    localhost: {
      timeout: 60000,
    },
    mainnet: {
      url: `${process.env.PROVIDER_URL}`,
    },
  },
  throwOnTransactionFailures: true
};
