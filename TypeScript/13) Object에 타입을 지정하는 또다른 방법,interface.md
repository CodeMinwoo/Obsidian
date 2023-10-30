
# interface 의 장점

## extends 가능하다

```js
interface Student {
	name : string;
}
interface Teacher extends Student {
	age : number;
}
```


## type 과의 차이점

### type은 & 기호를 써야하지만 interface는 extends가 가능하다

```js
type Animal = {
	name : string
}
type Cat = Animal & { legs : number }
```

###  type은 중복선언 안되고 interface는 가능하다

```js
interface Animal {
	name : string
}
interface Animal {
	legs : number
}
```

# extend 할 때 object 안의 속성이 중복될 경우

같은 타입이면 에러가 나지 않고 하나로 합쳐주지만,
다른 타입이면 에러가 발생한다.

```js
interface Animal {
	name :string
}
interface Dog {
	name : number
}
let 변수 : Dog & Animal = {name : "멍멍"}
```


# type 을 & 로 연결했을때 같은 속성 다른 타입일 경우

네버 타입(never type) 이 된다.