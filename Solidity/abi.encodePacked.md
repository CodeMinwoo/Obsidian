abi.encodePacked는 Solidity의 내장 함수 중 하나이다

주어진 인수를 이진 데이터로 직렬화 하는데 사용된다

주로 데이터의 해싱 및 서명을 생성하거나 데이터를 트랜잭션에 포함할 때 사용된다.

abi.encdePacked 함수는 바이트 배열을 반환하기 때문에 문자열을 반환하고 싶다면 string으로 변환해야 한다

```js
function tokenURI(uint _tokenId) public override view returns(string memory) {
    string memory base = _baseURI();
    string memory uri = tokenURIs[_tokenId];
    return string(abi.encodePacked(base, uri));
}

```
