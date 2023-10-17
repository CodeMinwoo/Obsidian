Counters는 OpenZeppelin에서 제공하는 라이브러리의 이름이다
이 라이브러리는 uint256 타입의 카운터 값을 안전하게 증가하거나 감소하는 연산을 제공한다


## Counter

Counter는 Counters 라이브러리 내부에 정의된 [[구조체(struct)]] 이다

```js
struct Counter {
    uint256 _value;  // default: 0
}

```

## 함수들

* increment() : 카운터 값을 1만큼 증가
* decrement() : 카운터 값을 1만큼 감소
* current() : 현재 카운터 값을 반환


예제
```js
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract UsingCounter {
    using Counters for Counters.Counter;  //Counters 라이브러리를 Counter 구조체에연결
    
    Counters.Counter private _counter;

    function increment() public {
        _counter.increment();
    }

    function decrement() public {
        _counter.decrement();
    }

    function getCurrentValue() public view returns (uint256) {
        return _counter.current();
    }
}

```

[[using Counters for Counters.Counter]]
