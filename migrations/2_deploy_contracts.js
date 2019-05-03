const cryptoSkull = artifacts.require("CryptoSkull");

const MAX_SUPPLY = 2;

module.exports = function(deployer, network) {
  // OpenSea proxy registry addresses for rinkeby and mainnet.
  let proxyRegistryAddress = "";
  if (network === "rinkeby") {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }

  deployer.deploy(cryptoSkull, "CryptoSkull", "CryptoSkull", MAX_SUPPLY, proxyRegistryAddress,
    {
      gas: 5000000,
      from: "0x9Af756e7Be065DCa83674eC17F3703579A544Da1"
    });
};
