주로 두가지 컨텍스트에서 사용된다

## 1. 'payable' 주소
payable 이 붙은 주소 타입으로 직접 이더를 전송 할 수 있다
	address payable public owner;

## 2.'payable' 함수
이더를 전송하면서 호출할 수 있는 함수이다. payable로 표시되지 않은 함수는 이더와 함께 호출되면 트랜잭션이 실패한다.
```js
function buyItem() public payable {
    require(msg.value > 0, "You must send some Ether");
    // More logic here...
}

```

## ** 주의 : [[receive()]] 함수 와 payable 함수의 차이점

- `   receive()` 함수는 외부 호출에서 데이터(예: 함수 식별자) 없이 이더가 보내질 때 호출되며, 특별한 경우를 제외하고 로직이 최소화되어야 합니다.
- `payable` 함수는 더 일반적이며, 이더를 받는 것 외에도 추가 로직과 매개변수를 허용합니다.

이 두 함수는 모두 `payable`로 표시되어 있기 때문에 이더를 받을 수 있습니다. 어떤 함수를 사용할지는 컨트랙트의 요구 사항과 목적에 따라 달라집니다.