계약의 소유자 관리와 관련된 기능들을 제공한다.


1. **Owner 상태 변수**:
    
    - `Ownable` 계약은 private 변수 `owner`를 가지며, 이는 계약의 현재 소유자의 주소를 저장합니다.
2. **Constructor**:
    
    - 계약이 배포될 때, `Ownable`의 생성자는 `msg.sender`를 계약의 초기 소유자로 설정합니다. 이는 계약을 배포한 계정이 됩니다.
3. **OnlyOwner 수정자**:
    
    - `onlyOwner`라는 [[수정자(modifier)]]가 제공되며, 이는 특정 함수가 오직 계약의 소유자에 의해서만 호출될 수 있도록 제한합니다.
4. **소유권 이전**:
    
    - `transferOwnership(address newOwner)` 함수를 사용하여 계약의 소유권을 다른 주소로 이전할 수 있습니다. 이 함수는 오직 현재 소유자에 의해서만 호출될 수 있습니다.
5. **이벤트**:
    
    - `OwnershipTransferred`라는 이벤트가 정의되어 있으며, 소유권이 이전될 때마다 이 이벤트가 발생합니다.



`Ownable` 컨트랙트의 생성자가 인자를 받도록 변경되었다는 것입니다. 이전 버전의 `Ownable`에서는 생성자가 인자를 받지 않았고, 컨트랙트를 배포하는 주소가 자동으로 소유자로 설정되었습니다. 그러나 에러 메시지를 보면, 최신 버전의 `Ownable`에서는 생성자가 `initialOwner`라는 주소를 인자로 받도록 변경되었음을 알 수 있습니다.

따라서 `MyNFT` 컨트랙트의 생성자에서 `Ownable`의 생성자를 호출하면서 초기 소유자의 주소를 전달해야 합니다.

아래는 `Ownable`의 생성자를 호출하면서 컨트랙트를 배포하는 주소를 초기 소유자로 설정하는 방법입니다:

```js
constructor(string memory _URIstorage, string memory _name, string memory _symbol) ERC721(_name, _symbol) Ownable(msg.sender) {
    URIstorage = _URIstorage;
}

```