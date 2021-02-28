const address = "0x9Af756e7Be065DCa83674eC17F3703579A544Da1";

/**
 * Ethereum
 */

// const cryptoSkulls = artifacts.require('CryptoSkulls');
//
// module.exports = function(deployer, network) {
//   // OpenSea proxy registry addresses for rinkeby and mainnet.
//   const proxyRegistryAddress = network === "rinkeby" ?
//     '0xf57b2c51ded3a29e6891aba85459d600256cf317' : '0xa5409ec958c83c3f309868babaca7c86dcb077c1';
//
//   deployer.deploy(cryptoSkulls, "CryptoSkulls", "CryptoSkulls", proxyRegistryAddress,
//     {
//       gas: 5000000,
//       from: address
//     });
// };

/**
 * Polygon (MATIC)
 */
const childCryptoSkulls = artifacts.require('ChildCryptoSkulls');

module.exports = function(deployer, network) {
    const childChainManager = network === "mumbai" ?
        '0xb5505a6d998549090530911180f38ac5130101c6' : '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa';

    deployer.deploy(childCryptoSkulls, "CryptoSkulls", "CRSKLS", childChainManager,
        {
            gas: 5000000,
            from: address
        });
};