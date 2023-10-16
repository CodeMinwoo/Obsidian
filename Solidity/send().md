# contract.methods.send()
스마트 컨트랙트의 메서드를 호출할 때 사용한다

### 주요 매개변수

- **`from`** (필수):
    
    - **타입**: `String`
    - **설명**: 트랜잭션을 보내는 주소입니다. 이 주소의 계정은 트랜잭션의 가스비를 지불합니다.
- **`gas`**:
    
    - **타입**: `Number` | `String`
    - **설명**: 트랜잭션에 제공할 가스의 양입니다. 제공된 가스가 트랜잭션의 처리에 필요한 양보다 적을 경우, 트랜잭션은 실패합니다.
- **`gasPrice`**:
    
    - **타입**: `Number` | `String`
    - **설명**: 가스의 가격입니다. 이 값은 단위가 "wei"이므로 매우 작은 이더리움 단위입니다. 높은 가스 가격을 설정하면 트랜잭션이 빠르게 처리되지만, 비용도 더 많이 듭니다.
- **`value`**:
    
    - **타입**: `Number` | `String`
    - **설명**: 컨트랙트 함수에 전송할 이더의 양입니다. 단위는 "wei"입니다. 이 필드가 필요한 경우는, 예를 들어 컨트랙트의 payable 함수를 호출할 때입니다.
- **`data`**:
    
    - **타입**: `String`
    - **설명**: 호출 데이터입니다. 이 데이터는 컨트랙트 함수와 그 함수의 매개변수를 인코딩한 것입니다. 대부분의 웹3 라이브러리(web3.js 등)는 이 데이터를 자동으로 생성합니다.



```js
contract.methods.myMethod(param1, param2).send({
    from: '0xYourAddress',
    gas: 2000000,
    gasPrice: '20000000000',
    value: 0
})
.on('transactionHash', (hash) => {
    console.log('Transaction Hash:', hash);
})
.on('confirmation', (confirmationNumber, receipt) => {
    console.log('Confirmation Number:', confirmationNumber);
    console.log('Receipt:', receipt);
})
.on('receipt', (receipt) => {
    console.log('Receipt:', receipt);
})
.on('error', console.error);

```
### 메모

- 모든 필드가 항상 필요한 것은 아닙니다. 예를 들어, `value`는 payable 함수를 호출할 때만 필요합니다.
- `gas`와 `gasPrice`는 종종 웹3 라이브러리가 자동으로 추정해줍니다.
- `data` 필드는 일반적으로 `web3.js`와 같은 라이브러리에서 자동으로 처리되므로 직접 설정할 필요는 없습니다.
- 트랜잭션의 상태와 결과를 추적하기 위해 다양한 이벤트 핸들러(`.on('transactionHash', ...)`, `.on('confirmation', ...)`, 등)를 사용할 수 있습니다.



### `.send()` 메소드의 작동 방식

- **비동기적으로 트랜잭션 전송**: `.send()` 메소드는 네트워크로 트랜잭션을 비동기적으로 전송합니다. 이는 JavaScript의 비동기 패턴인 프로미스와 이벤트 리스너를 활용하여 처리됩니다.
    
- **이벤트 리스너**: `.on('event', callback)` 구조는 이벤트 리스너를 등록하여 특정 이벤트가 발생했을 때 콜백 함수를 실행합니다.
    
    - `'receipt'`: 트랜잭션이 마이닝되고 영수증이 생성되면 실행됩니다.
    - `'error'`: 트랜잭션 처리 중 오류가 발생하면 실행됩니다.
    - `'confirmation'`: (선택적) 트랜잭션이 각각의 새로운 블록에 포함되면 실행됩니다. 이 이벤트는 첫 번째 확인을 위해 한 번, 그리고 설정에 따라 추가로 실행될 수 있습니다.


### 트랜잭션 영수증 (Transaction Receipt)

- 트랜잭션 영수증은 트랜잭션이 블록체인에 기록된 후에 제공됩니다.
- 영수증은 트랜잭션의 상태(성공 또는 실패), 사용된 가스, 이벤트 로그 등과 같은 중요한 정보를 포함합니다.
- 영수증은 블록체인에 트랜잭션이 기록되고 난 후에 비동기적으로 제공되기 때문에, 프로미스 또는 이벤트 리스너를 사용하여 처리할 수 있습니다.


# address.send()
Solidity 코드 내에서 이더를 전송하는 데 사용된다

## 궁금증 => address.send() 와 address.transfer() 차이점

##### send()의 에러처리
이더를 전송하고, 전송이 실패하더라도 다른 작업을 계속하고 싶다면 send()를 쓴다
#####  transfer()의 에러처리
실패시 트랜잭션이 자동으로 실패하고 롤백된다
이더를 전송하는 것이 주요 목적인 경우에 좋다.