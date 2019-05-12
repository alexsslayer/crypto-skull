var contractAddress = require('./contract.js');
var contract = artifacts.require('CryptoSkulls');

module.exports = function() {

  async function totalSupply() {
    let ins = await contract.at(contractAddress);
    let response = await ins.totalSupply();

    console.log('Completed: ', response);
  }

  totalSupply();
}
