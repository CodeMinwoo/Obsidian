```js
ListedToken[] memory tokens = new ListedToken[](nftCount);

```

크기가 `nftCount`인 `ListedToken` 타입의 동적 배열을 `memory`에 생성하고, 그 배열을 `tokens`라는 변수에 할당하는 것


1. **고정 크기의 `storage` 배열**:
    
    solidityCopy code
    
    `uint[5] public myFixedArray;`
    
2. **동적 크기의 `storage` 배열**:
    
    solidityCopy code
    
    `uint[] public myDynamicArray;`
    
3. **함수 내에서의 `memory` 배열**: 함수 내에서 임시로 사용할 배열은 `memory`에 할당할 수 있습니다. 이렇게 생성된 배열은 함수 호출이 끝나면 사라집니다.
    
    solidityCopy code
    
    `function someFunction() public {     uint[] memory myMemoryArray = new uint[](5); }`
    
4. **함수 인자로 전달되는 `memory` 배열**: 함수의 매개변수로 전달되는 배열은 대부분 `memory`로 표시됩니다.
    
    solidityCopy code
    
    `function handleArray(uint[] memory inputArray) public {     // Do something with inputArray }`
    
5. **리턴 값으로 `memory` 배열 반환**: 함수가 배열을 반환할 때, `memory` 배열을 반환하는 것이 일반적입니다.
    
    solidityCopy code
    
    `function getArray() public pure returns(uint[] memory) {     uint[] memory arrayToReturn = new uint[](5);     return arrayToReturn; }`


### 함수 내에서 동적 배열을 생성할  수는 없다!