const cryptoScull = artifacts.require("CryptoScull");

module.exports = function(deployer, network) {
  // OpenSea proxy registry addresses for rinkeby and mainnet.
  let proxyRegistryAddress = "";
  if (network === "rinkeby") {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }

  deployer.deploy(cryptoScull, "CryptoScull", "CryptoScull", 10000, proxyRegistryAddress,
    {
      gas: 5000000,
      from: "0x9Af756e7Be065DCa83674eC17F3703579A544Da1"
    });
};
