```js
using Counters for Counters.Counter;

```

OpenZeppelin 의 'Counters' 라이브러리를 보면, 함수들이 'Counter' 구조체에 대해 정의되어있다

이렇게 되면 라이브러리의 함수들은 마치 구조체의 메서드인것처럼 사용할 수 있다

이게 가능한 이유는 using ... for 문법 때문이다

Solidity에서 'using A for B' 문법은 라이브러리 A의 함수를 B타입에 대한 메서드처럼 사용하게 한다.

```js
using Counters for Counters.Counter;
Counters.Counter private _counter;
_counter.increment();  // _counter의 내부 _value를 1 증가시킵니다.
```