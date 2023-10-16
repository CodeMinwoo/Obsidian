IERC20 의 balanceOf 인터페이스
```js
function balanceOf() external view returns (uint);
```

ERC20의 balanceOf 구현함수
```js
    function balanceOf(address account) external override returns (uint) {

        return balances[account];

    }
```

### 함수 구현을 똑같이 하는데 굳이 Override 하는 이유

Solidity에서 함수가 상위 컨트랙트의 함수를 오버라이드 하고 있음을 명시적으로 나타내기 위함이다

만약 상위 컨트랙트의 함수 시그니처가 변경되면 컴파일러가 오류를 발생시키기 때문에 컨트랙트의 안전을 향샹시킬수 있다.

특히 다수의 개발자가 협업하거나 다른 개발자가 작성한 스마트 컨트랙트를 사용할 때 코드의 명확성과 안전성을 제공한다.