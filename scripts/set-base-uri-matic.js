var maticContractAddress = require('./contract-matic.js');
var contract = artifacts.require('ChildCryptoSkulls');

var baseURI = 'https://cryptoskulls.com/api/token/';

module.exports = function() {

    async function setBaseURI() {
        let ins = await contract.at(maticContractAddress);
        await ins.setBaseURI(baseURI);

        console.log('Completed');
    }

    setBaseURI();
}
