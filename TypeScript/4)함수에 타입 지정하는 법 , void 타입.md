```
function 함수(x ?: number ) :void{

}
```

TypeScript에서도 JavaScript와 마찬가지로 함수 선언식, 함수 표현식, 화살표 함수를 사용할 수 있습니다. 또한, TypeScript에서는 함수의 매개변수와 반환 값에 타입을 지정할 수 있습니다. 아래에 각 방식별로 예시를 제공하겠습니다.

### 1. 함수 선언식 (Function Declarations)

typescriptCopy code

`function add(a: number, b: number): number {   return a + b; }  console.log(add(2, 3)); // 5`

위 예시에서 `add` 함수는 두 개의 매개변수 `a`와 `b`를 받아들이며, 이들 모두 `number` 타입입니다. 함수의 반환 값도 `number` 타입입니다.

### 2. 함수 표현식 (Function Expressions)

typescriptCopy code

`const subtract: (a: number, b: number) => number = function(a, b) {   return a - b; };  console.log(subtract(5, 3)); // 2`

위 예시에서 `subtract`는 함수 표현식을 사용하여 정의되었습니다. 함수의 타입을 명시적으로 지정하여 매개변수와 반환 값의 타입을 설정하였습니다.

### 3. 화살표 함수 (Arrow Functions)

typescriptCopy code

`const multiply = (a: number, b: number): number => {   return a * b; };  console.log(multiply(3, 4)); // 12`




#### ? (옵션) 의 의미 
? 는 유니온 타입 undefined의 의미를 갖는다.
 