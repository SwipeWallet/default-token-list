const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const bscmainnet = require("./tokens/bscmainnet.json");
const ropsten = require("./tokens/ropsten.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "SwipeSwap Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9/logo.png",
    keywords: ["swipeswap", "swipe", "default"],
    tokens: [...mainnet, ...ropsten, ...bscmainnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
