pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "./Ownable.sol";
import "./Strings.sol";

contract OwnableDelegateProxy { }

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract CryptoScull is ERC721Full, Ownable {
    using Strings for string;

    uint16 maxSupply;
    address proxyRegistryAddress;
    string baseTokenURI = "";

    constructor (string memory name,
                 string memory symbol,
                 uint16 _maxSupply,
                 address _proxyRegistryAddress)
        ERC721Full(name, symbol) public {

        maxSupply = _maxSupply;
        proxyRegistryAddress = _proxyRegistryAddress;
    }

    function mint() external onlyOwner {
        require(totalSupply() == 0);

        for (uint16 i = 0; i < maxSupply; i++) {
            _mint(owner, i);
        }
    }

    function setBaseTokenURI(string calldata _baseTokenURI) external onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function withdraw() external onlyOwner {
        owner.transfer(address(this).balance);
    }

    function tokenURI(uint256 _tokenId) external view returns (string memory) {
        return Strings.strConcat(
            baseTokenURI,
            Strings.uint2str(_tokenId)
        );
    }

    /**
     * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
     */
    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }
}
