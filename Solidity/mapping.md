Solidity에서 키-값 쌍을 저장하는 데이터 구조
	mapping([[address]] => uint256) [[함수,변수의 가시성#Public|public]] balances;

예시

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    // 매핑을 사용하여 각 주소의 토큰 잔액을 추적합니다.
    mapping(address => uint256) public balances;

    // 컨트랙트를 배포하는 사람에게 모든 토큰을 할당합니다.
    constructor(uint256 initialSupply) {
        balances[msg.sender] = initialSupply;
    }

    // 토큰을 전송하는 함수
    function transfer(address to, uint256 amount) public {
        // 보내는 사람의 잔액이 충분한지 확인합니다.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // 토큰을 보내는 사람의 잔액을 줄입니다.
        balances[msg.sender] -= amount;

        // 토큰을 받는 사람의 잔액을 늘립니다.
        balances[to] += amount;
    }

    // 주소의 토큰 잔액을 조회하는 함수
    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }
}

```


Solidity에서 `public`으로 선언된 `mapping` 상태 변수도 게터 함수를 자동으로 생성합니다. 따라서, `mapping`을 오버라이드하는 것은 그에 해당하는 자동 생성된 게터 함수를 오버라이드하는 것과 동일합니다.


### Mapping 갹체의 역순

 mapping에서 키를 직접 가져오는 것은 불가능합니다. 즉, mapping 객체에서 값으로 키를 알아내는 것은 지원되지 않습니다.