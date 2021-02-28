var mumbaiContractAddress = require('./contract-mumbai.js');
var contract = artifacts.require('ChildCryptoSkulls');

var baseURI = 'https://cryptoskulls.com/api/token/';

module.exports = function() {

    async function setBaseURI() {
        let ins = await contract.at(mumbaiContractAddress);
        await ins.setBaseURI(baseURI);

        console.log('Completed');
    }

    setBaseURI();
}
