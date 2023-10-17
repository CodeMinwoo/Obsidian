transferFrom 함수는 ERC-721 표준에서 NFT(Non-Fungible Token) 를 한 주소에서 다른 주소로 전송하기 위해 사용하는 메서드이다.

```js
function transferFrom(address from, address to, uint256 tokenId) external;

```

만약 토큰 소유자가 어떤 주소를 [[오퍼레이터(Operator)]]로 설정하면 ([[setApprovalForAll]]함수를 통해서)  해당 주소는 소유자의 모든 토큰을 transferFrom 을 사용하여 전송 할 수 있다.