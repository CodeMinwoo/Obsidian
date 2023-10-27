```
function 내함수(x :number | string){
if (typeof x === 'number') {
return x + 1 }
else if (typeof x === 'string') {
return x + 1 } else {
return 0 
}
}
```

## Type Assertion 
```
function example (x :number | string) {
	return (x as number) + 1
}
console.log (내함수(123))
```

변수명 as number 라고 쓰시면

**"나는 이 변수를 number라고 주장하겠습니다~"** 라는 뜻이며 실제로 그렇게 타입을 변경해줍니다.

아무튼 이렇게 타입스크립트 컴파일러에게 반기를 들 수 있습니다. 

근데 이러려면 내가 "함수에 무조건 숫자가 들어올 것이다"라는 사실을 알고 있어야 안전하게 쓸 수 있는 문법이겠죠?

**Q. 근데 내함수('123') 이렇게 숫자말고 문자를 입력하면 어떻게 됩니까**

A. as number라고 썼긴 했지만 number 타입처럼 +1 해주진 않습니다. 콘솔창에 결과 출력해보면 '1231' 이렇게 출력될걸요

as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니기 때문입니다.

```js
console.log(example(123)); // 124 
console.log(example("123")); // "1231" (타입스크립트에서는 오류, 하지만 순수 자바스크립트에서는 작동)
console.log(example("abc")); // NaN (타입스크립트에서는 오류, 하지만 순수 자바스크립트에서는 작동)
```

** 타입을 강제로 부여하는  함수를 만들고자 할때 as 를 쓰기도 한다.

```
type Person = {
	name : string
} function 변환기<T>(data: string): T { 
	return JSON.parse(data) as T; 
}
const jake = 변환기<Person>('{"name":"kim"}');
```