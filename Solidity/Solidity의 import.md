```js
	import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
```

Solidity의 import 문은 JS의 import와는 약간 다르게 작동한다.

Solidity에서는 import 된 모듈의 특정 부분만 가져오는 것이 아니라 전체 파일을 가져온다

따라서 import ERC721 같은 구문이 필요하지 않다

대신 파일 경로만 지정하면 파일의 모든 내용을 사용할 수 있다.