Solidity에서 'pure' 키워드는 해당 함수가 블록체인의 상태를 읽지 않고 수정하지 않음을 나타낸다

`pure` 함수는 매개변수와 함수 내에서 선언된 지역 변수만 사용하여 값을 계산합니다. 상태 변수를 사용하지 않으며, 블록체인의 상태를 읽지 않습니다.

```js
pragma solidity ^0.8.0;

contract Example {
    // 이 함수는 pure로 선언되었으며, 매개변수 x와 y만 사용하여 값을 계산합니다.
    function add(uint x, uint y) public pure returns (uint) {
        return x + y;
    }
}

```

 pure 함수가 매개변수를 받지 않는다는 뜻은 아니다!!
 매개변수는 받지만 이더리움의 상태값을 조회하거나 변경하지 않는다는 의미이다.