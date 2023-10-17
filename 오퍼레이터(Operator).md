오퍼레이터(Operator)는 ERC-721 표준에서 토큰 소유자가 다른 주소(오퍼레이터)에게 자신의 모든 토큰을 관리하도록 허용하는 기능을 의미한다. 오퍼레이터가 되면, 그 주소는 토큰 소유자의 모든 토큰을 전송할 수 있게 된다.


[[Counters]]
[[setApprovalForAll]]

```js

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint() public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);
        return newTokenId;
    }
}

contract NFTOperator {
    MyNFT private _nftContract;

    constructor(address nftAddress) {
        _nftContract = MyNFT(nftAddress);
    }

    // 해당 함수를 호출하여 오퍼레이터로 설정
    function setAsOperator(address owner) public {
        // setApprovalForAll은 ERC-721 표준에 있는 함수입니다.
        // 이 함수를 호출하면 'msg.sender'가 'owner'의 모든 토큰에 대한 오퍼레이터가 됩니다.
        _nftContract.setApprovalForAll(msg.sender, true);
    }

    // 오퍼레이터로서 토큰 전송
    function transferToken(address from, address to, uint256 tokenId) public {
        // 오퍼레이터는 from 주소의 토큰을 전송할 수 있습니다.
        _nftContract.transferFrom(from, to, tokenId);
    }
}


```