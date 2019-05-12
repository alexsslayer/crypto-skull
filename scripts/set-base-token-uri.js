var contractAddress = require('./contract.js');
var contract = artifacts.require('CryptoSkulls');

var baseTokenURI = 'https://cryptoskulls.com/api/token/';

module.exports = function() {

  async function setBaseTokenURI() {
    let ins = await contract.at(contractAddress);
    await ins.setBaseTokenURI(baseTokenURI);

    console.log('Completed');
  }

  setBaseTokenURI();
}
