
### type alias

```
type Animal = string | number | undefined

let 동물 : Animla;
```

** type alias 는 같은 이름으로 재정의할 수 없다


## readonly 의 목적 ( 변수의 값 수정 방어)

const로 선언한 변수는 재할당이 안되는 것이지 그 안에 있는 요소값은 바뀔 수 있다

예) const로 선언한 객체의 값은 바뀔 수 있다.

따라서 type 설정 시 readonly를 붙여주면 객체의 값 수정을 막아준다

readonly로 정의된 변수를 수정 시, 타입스크립트에서는 오류가 나지만 자바스크립트에서는 오류가 나지 않는다.

```js
type Girlfriend = {
	readonly name : string,
}

let 여자친구 : Girlfriend = {
	name : "은비"
}

여자친구.name = '빕이' // readonly라서 에러가 난다
```


## type 키워드 여러개 합치기


```js
type Name = string;
type Age = number;
type NewOne = Name | Age
```


```js
type positionX = {x : number};
type positionY = {y : number};
type XandY = positionX & position Y;
let 좌표 : XandY = {x : 1 , y : 2}
```

### & 연산자를 사용해서 두 개의 객체 타입을 합칠 때 중복된 속성이 있다면?


--> 두 타입 모두 만족하는 변수 타입만 할당 가능하다.  