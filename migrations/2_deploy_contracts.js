const cryptoSkulls = artifacts.require('CryptoSkulls');

const address = "0x9Af756e7Be065DCa83674eC17F3703579A544Da1";

module.exports = function(deployer, network) {
  // OpenSea proxy registry addresses for rinkeby and mainnet.
  const proxyRegistryAddress = network === "rinkeby" ?
    '0xf57b2c51ded3a29e6891aba85459d600256cf317' : '0xa5409ec958c83c3f309868babaca7c86dcb077c1';

  deployer.deploy(cryptoSkulls, "CryptoSkulls", "CryptoSkulls", proxyRegistryAddress,
    {
      gas: 5000000,
      from: address
    });
};
