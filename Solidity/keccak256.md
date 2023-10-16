이더리움에서 사용하는 해시 함수 중 하나로, 임의의 데이터를 입력으로 받아 고정 길이 해시 값을 생성한다

keccak256() 함수는 [[바이트 배열]]을 반환하기 때문에, 이를 uint() 로 변환하여 무작위 수를 생성할 수 있다

```js
        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.coinbase, block.number)
            )
        );
```

[[abi.encodePacked]] 란?