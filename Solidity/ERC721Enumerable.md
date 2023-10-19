이 확장을 사용하면 전체 토큰 세트를 통해 반복하거나, 특정 소유자의 모든 토큰을 열거하는 등의 기능을 활용할 수 있습니다.

`ERC721Enumerable`에 추가된 주요 기능은 다음과 같습니다:

1. **전체 토큰 수 조회**:
    
    - `function totalSupply() public view returns (uint256)`: 이 함수는 전체 토큰의 수를 반환합니다.
2. **특정 인덱스의 토큰 ID 조회**:
    
    - `function tokenByIndex(uint256 index) public view returns (uint256)`: 이 함수는 주어진 인덱스에 해당하는 토큰의 ID를 반환합니다.
3. **소유자의 특정 인덱스의 토큰 ID 조회**:
    
    - `function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)`: 이 함수는 주어진 소유자의 특정 인덱스에 해당하는 토큰의 ID를 반환합니다.
4. **토큰의 소유자 조회**:
    
    - 이미 기본 ERC-721에서 제공되는 `function ownerOf(uint256 tokenId) public view returns (address)` 함수와 동일한 기능을 제공합니다.
5. **내부 상태 관리**:
    
    - `mapping(address => uint256[]) private _ownedTokens`: 각 소유자의 토큰 ID 목록을 추적하는 매핑입니다.
    - `mapping(uint256 => uint256) private _ownedTokensIndex`: 각 토큰 ID의 인덱스를 추적하는 매핑입니다.
    - `uint256[] private _allTokens`: 모든 토큰의 ID 목록입니다.
    - `mapping(uint256 => uint256) private _allTokensIndex`: `_allTokens` 배열 내의 특정 토큰 ID의 인덱스를 추적하는 매핑입니다.

이러한 추가 기능 덕분에 `ERC721Enumerable` 확장을 사용하는 컨트랙트는 토큰을 반복하거나, 특정 소유자의 모든 토큰을 열거하는 등의 추가적인 작업을 수행할 수 있습니다. 이러한 기능은 NFT 마켓플레이스나 다른 애플리케이션에서 유용하게 사용될 수 있습니다.