var contractAddress = require('./contract.js');
var contract = artifacts.require('CryptoSkulls');

var tokenIds = ["111", "222", "333", "444", "555"];

module.exports = function() {
  async function mint(tokenIds) {
    let ins = await contract.at(contractAddress);
    let response = await ins.mint(tokenIds);

    console.log('Completed', response);
  }

  mint(tokenIds);
}
