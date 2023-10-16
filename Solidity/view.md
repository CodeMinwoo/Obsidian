`view` 함수는 Solidity에서 읽기 전용 함수를 선언하는 데 사용되는 키워드입니다. `view` 함수는 블록체인의 상태를 읽을 수 있지만, 수정할 수는 없습니다.

### `view` 함수의 특징

- 블록체인의 상태를 **읽을 수 있습니다**.
- 블록체인의 상태를 **변경할 수 없습니다**.
- 트랜잭션을 발생시키지 않아도 호출할 수 있습니다(`call`로 호출 가능).
- 가스를 사용하지 않습니다(네트워크에 브로드캐스트되지 않는 로컬 호출의 경우).


```js
pragma solidity ^0.8.0;

contract Example {
    uint public data = 100;

    function getData() public view returns (uint) {
        return data;
    }
}

```