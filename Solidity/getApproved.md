ERC721 에서 특정 토큰 ID에 대해 현재 승인된 주소를 반환한다.

ERC721 토큰의 각 개별 토큰은 단 하나의 주소만을 '승인된 주소' 로 가질 수 있다

승인된 주소가 없다면 null 주소인 

`0x0000000000000000000000000000000000000000`를 반환

null 주소는 address(0)이라고 한

```js
function checkApproved(uint256 tokenId) public view returns (address) { return nft.getApproved(tokenId); }
```