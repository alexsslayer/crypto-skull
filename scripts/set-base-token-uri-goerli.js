var goerliContractAddress = require('./contract-goerli.js');
var contract = artifacts.require('CryptoSkulls');

var baseTokenURI = 'https://cryptoskulls.com/api/token/';

module.exports = function() {

    async function setBaseTokenURI() {
        let ins = await contract.at(goerliContractAddress);
        await ins.setBaseTokenURI(baseTokenURI);

        console.log('Completed');
    }

    setBaseTokenURI();
}
