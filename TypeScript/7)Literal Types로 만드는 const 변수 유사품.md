
## Literal Types

타입을 지정할 때 string , number 처럼 지정하는게 아니라 아주 세세하게 '민우' , '123' 등을 타입으로 지정할 수 있다.


const 변수에는 하나의 값만 담을 수 있는 걸 생각하면 Literal Types 는 여러개의 변치 않는 변수를 담는 const 변수의 확장판이라고 생각하면 된다.


### as const 문법

```js
let 자료 = {
    name : "park"
}
function test(x : "park"){
} 

test(자료.name)
```

x : "park" 는 자료 타입이 "park" 이지, 자료값이 "park" 라는 뜻이 아니기 때문에 자료.name (문자열 타입) 은 쓸 수 없다.


#### 해결방법
```js
let 자료 = {
    name : "park"
}as const
function test(x : "park"){
} 

test(자료.name)
```

1. name의 타입 자체를 "park" 로 바꿔준다
2. obj 안의 모든 속성을 readonly로 바꿔버린다.