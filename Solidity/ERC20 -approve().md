'approve' 함수는 다른 계정이 일정량의 토큰을 전송할 수 있도록 승인하는 역할을 한다.

	function approve(address _spender, uint256 _value) public returns (bool);

'approve' 함수 맵핑  구현 예시
이 approve 매핑에는 owner의 전체 잔액이 아니라 허용하는 사람의 주소랑 amount만 적어놓는다. 
따라서 owner의 토큰 잔액을 구하려면 또다른 mapping이 필요하다

```js
mapping(address => mapping(address => uint256 )) private _allowances;_
```

외부 address : 토큰 소유자의 주소

내부 address : 토큰 전송 권한을 얻은 계정의 주소


```js
_allowances[토큰 소유자 주소][위임받은 주소]=허용된 토큰의 수량

```
