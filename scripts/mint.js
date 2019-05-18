var contractAddress = require('./contract.js');
var contract = artifacts.require('CryptoSkulls');

var tokenIds = [];

module.exports = function() {
  async function mint(tokenIds) {
    let ins = await contract.at(contractAddress);
    let response = await ins.mint(tokenIds);

    console.log('Completed', response);
  }

  mint(tokenIds);
}
