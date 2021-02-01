var goerliContractAddress = require('./contract-goerli.js');
var contract = artifacts.require('CryptoSkulls');

var tokenIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

module.exports = function() {
    async function mint(tokenIds) {
        let ins = await contract.at(goerliContractAddress);
        let response = await ins.mint(tokenIds);

        console.log('Completed', response);
    }

    mint(tokenIds);
}
