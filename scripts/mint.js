var contract = artifacts.require("CryptoSkull");

var contract_address = '0x893E47c0eAfA589af2a20cE613BF49b02d479e44';

module.exports = function() {

  async function mint() {
    let ins = await contract.at(contract_address);
    await ins.mint();
  }

  mint();
}
