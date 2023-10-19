구조체(struct)는 여러 변수를 하나의 타입으로 그룹화하는 프로그래밍 구성 요소이다. 관련된 데이터를 하나의 단위로 묶을 수 있으며, 각 데이터 항목은 구조체 내의 필드, 속성으로 접근 가능하다


```js
struct Student {
    string name;
    uint age;
    address studentAddress;
}

```

### 구조체의 인스턴스 생성

```js
Student alice = Student("Alice", 20, 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);
```

### 구조체의 필드에 접근하는 함수
```js
function getStudentName() public view returns (string memory) {
return alice.name;
}
```

### 솔리디티에서 struct를 사용할 때, 멤버변수에 대한 접근 제한자(public 등) 을 직접 지정할 수 없다

struct를 이용하여 상태 변수나 로컬 변수를 선언할 때는 해당 변수에 대한 접근 제한자를 지정할 수 있다.
```js
contract Token {
    struct ListedToken {
        uint tokenId;
        address payable owner;
        address payable seller;
        uint price;
        bool currentlyListed;
    }

    ListedToken public listedToken;  // public 접근 제한자를 사용한 상태 변수
    ListedToken private anotherListedToken;  // private 접근 제한자를 사용한 상태 변수
}

```