
## getBalance
- **사용 컨텍스트**: 웹3(Web3) 라이브러리 혹은 이더리움 노드와 직접 통신할 때.
    
- **목적**: 주어진 주소의 Ether 잔액을 조회하기 위해 사용됩니다.
    
- **사용 예**: 웹3 라이브러리(web3.js, web3.py 등)를 사용하여 특정 이더리움 주소의 Ether 잔액을 조회할 때 `getBalance` 함수를 사용합니다

```js
balance : web3Provider.utils.fromWei(
await web3Provider.eth.getBalance(data)
, "ether")
```

**참고**: `getBalance`는 원시 Ether 잔액을 조회하는데 사용되며, 스마트 컨트랙트의 함수가 아닙니다.

## balanceOf
- **사용 컨텍스트**: ERC-20 토큰 스마트 컨트랙트와 상호 작용할 때.
    
- **목적**: 주어진 주소의 토큰 잔액을 조회하기 위해 사용됩니다.
    
- **사용 예**: ERC-20 토큰의 특정 주소의 잔액을 알고 싶을 때 `balanceOf` 함수를 호출합니다.

 ```js
const tokenContract = new web3.eth.Contract(abi, contractAddress);

tokenContract.methods.balanceOf(address).call((error, balance) => {
  console.log(balance);
});
 
```
**참고**: `balanceOf`는 ERC-20 스펙의 일부로 정의된 스마트 컨트랙트 함수입니다. 토큰 컨트랙트의 특정 주소의 토큰 잔액을 확인하는데 사용됩니다.