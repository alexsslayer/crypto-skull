pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Strings.sol";

contract OwnableDelegateProxy { }

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract CryptoSkulls is ERC721Full, Ownable {
    using Strings for string;

    string imageHash = "";

    address proxyRegistryAddress;
    string baseTokenURI = "";

    constructor (string memory name,
                 string memory symbol,
                 address _proxyRegistryAddress)
        ERC721Full(name, symbol) public {

        proxyRegistryAddress = _proxyRegistryAddress;
    }

    function mint(uint256[] calldata tokenIds) external onlyOwner {
        address owner = owner();

        uint256 length = tokenIds.length;

        for (uint256 i = 0; i < length; i++) {
            uint256 tokenId = tokenIds[i];

            require(tokenId >= 0 && tokenId <= 9999);

            _mint(owner, tokenId);
        }
    }

    function setBaseTokenURI(string calldata _baseTokenURI) external onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function setProxyRegistryAddress(address _proxyRegistryAddress) external onlyOwner {
        proxyRegistryAddress = _proxyRegistryAddress;
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
