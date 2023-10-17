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
