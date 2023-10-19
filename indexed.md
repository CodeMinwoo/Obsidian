'indexed' 는 Solidity 이벤트에서 사용되는 키워드로 , 해당 변수를 로그의 토픽으로 사용하겠다는 말이다.

블록체인에서 [[이벤트(event), emit]] 는 스마트 컨트랙트의 작업을 로그로 기록하는데 사용되며, 외부의 블록체인 노드나 DApp 이 이러한 이벤트를 구독하여 특정 작업이 발생했을 때 알림을 받을 수 있도록 한다.

indexed 가 지정된 변수는 로그의 토픽으로 저장되어서, 로그를 필터링 할 때 해당 변수의 값을 기준으로 쉽게 검색할 수 있다. Solidity에서는 각 이벤트마다 최대 3개의 변수만 indexed로 지정할 수 있다

```js
event TokenListedSuccess ( 
uint256 indexed tokenId,
address owner,
address seller,
uint256 price,
bool currentlyListed
);
```