var contractAddress = require('./contract-mumbai.js');
var contract = artifacts.require('ChildCryptoSkulls');

module.exports = function() {

    async function tokenURI() {
        let ins = await contract.at(contractAddress);
        let response = await ins.tokenURI(0);

        console.log('Completed: ', response);
    }

    tokenURI();
}
