
# 함수의 파라미터 처럼 타입도 유저에게 받는 것이 Generic

```js
function 함수(x: unknown[]) {
	return x[0];
	}
	 let a = 함수([4,2])
	  console.log(a + 1)
```

타입스크립트는 자동으로 타입을 바꿔주지 않는다. 따라서 a의 타입은 unknown이다.

## 해결방안

### narrowing

```js
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);

if (typeof a === 'number') {
  console.log(a + 1);  // 5
} else {
  console.log('a is not a number');
}

```

Generic 문법 사용
```js
function 함수<MyType>(x: MyType[]) :MyType {
	return x[0];
	 } 
	 
let a = 함수([4,2]) 
let b = 함수(['kim', 'park'])
```


# 또다른 에러
```js
function 함수<MyType>(x: MyType) {
	return x - 1 
	}
 let a = 함수<number>(100)
```

MyType 입장에서는 숫자가 들어올것이라는 확신이 없으니까 에러가 발상핸다

### 해결방안

```js
function 함수<MyType extends number>(x: MyType) {
	return x - 1 
	}
let a = 함수<number>(100) //잘됩니다
```


# 제네릭은 유저에 타입을 받기 위해 사용되기도 하지만 컴파일러가 타입을 추론할 때 사용되기도 한다

```js
let [user,setUser] = useState<string | number > ('kim');
```


# 제네릭과 [[타입단언]]
