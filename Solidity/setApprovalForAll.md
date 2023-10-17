setApprovalForAll 함수는 ERC-721 토큰 표준 중 하나로,  특정 [[오퍼레이터(Operator)]]에게 사용자의 모든 토큰을 관리할 권한을 부여하거나 취소하는데 사용된다

```js
function setApprovalForAll(address operator, bool approved) external;
```


예제

```js
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SimpleNFT is ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SimpleNFT", "SNFT") {}

    function mint(address recipient) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(recipient, newTokenId);
        return newTokenId;
    }
}

contract NFTMarketplace {
    function listForSale(address nftAddress, uint256 tokenId) external {
        ERC721 nft = ERC721(nftAddress);
        require(nft.isApprovedForAll(msg.sender, address(this)), "Not approved to sell");
        // ... 판매를 위한 추가 로직
    }
}

```

[[isApprovedForAll]]


## 권한취소

```js
nft.setApprovalForAll(marketplaceAddress, false);
```


