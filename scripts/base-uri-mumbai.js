var mumbaiContractAddress = require('./contract-mumbai.js');
var contract = artifacts.require('ChildCryptoSkulls');

module.exports = function() {

    async function baseURI() {
        let ins = await contract.at(mumbaiContractAddress);
        let response = await ins.baseURI();

        console.log('Completed', response);
    }

    baseURI();
}
