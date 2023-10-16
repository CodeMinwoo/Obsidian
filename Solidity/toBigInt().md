JavaScript에서는 일반적으로 정수를 32비트나 64비트로 다루지만, Ethereum은 매우 큰 정수 값을 다룰 수 있어야 합니다. Ethereum의 정수 값은 Solidity에서 `uint256`와 같이 256비트로 표현되는 큰 정수입니다. JavaScript에서는 기본적으로 이런 큰 정수를 표현하기 어렵기 때문에 Ethereum 스마트 계약에서 반환된 값을 JavaScript에서 처리하기 위해서는 `toBigInt`를 사용하여 JavaScript의 큰 정수 형식(Big Int)으로 변환해야 합니다.

```js
let result = web3.utils.toBigInt(
await contract.methods.balanceOf(account).call()).toString(10);
result = await web3.utils.fromWei(result, "ether");
```


1. 이더리움으로 부터 받아온 정수값을 BigInt로 받아온다
2. BigInt 를 문자열로 변환한다
3. wei 단위를 ether 단위로 바꾼