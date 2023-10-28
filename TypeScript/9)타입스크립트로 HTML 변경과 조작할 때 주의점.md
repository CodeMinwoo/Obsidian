변경, 조작 시 Element의 타입이 null 이 될 수 도 있기 때문에 narrowing 작업을 해줘야 한다.

** config에서 strictNullChecks 를 false로 바꾸면 오류 발생하지 않는다.

** 참고 
document 객체는 웹 브라우저 안에만 있다. 따라서 node.js로 실행하면 undefined가 뜬다!!!

## 해결책1
```js
let 제목 = document.querySelector('#title');
if (제목 != null) {
제목.innerHTML = '반갑소' 
}
```

## 해결책2 - instanceof
```js
let 제목 = document.querySelector('#title');
if (제목 instanceof HTMLElement) {
	제목.innerHTML = '반갑소'
}
```

## 해결책3 - assertion
```js
let 제목 = document.querySelector("#title") as HTMLELEMENT;
제목.innerHTML = '반갑소'
```
좋은 방법은 아니다.. 임시 방법일 뿐

## 해결책4  - optional chaining 연산자
```js
let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
	제목.innerHTML = '반갑소'
}
```

### optional chaining 참고사항

아래 코드가 오류가 발생하는 이유?
```js
let img = document.querySelector('#image') as HTMLImageElement | null;

img?.src = 'new.jpg';
```

옵셔널 체이닝을 통해서 값을 직접 바꾸는 것은 허용되지 않는다.

하지만 옵셔널 체이닝을 사용해서 함수를 부르는 것은 가능하다

```ts
let 버튼 = document.getElementById('button');
버튼?.addEventListener('click', function(){
console.log('안녕')
})
```


## HTMLELEMENT , ELEMNT, HTMLAnchorELEMENT?

타입스크립트에서 쓸 수 있는 HTML 타입들은 이렇게 됩니다.

Element, HTMLElement, HTMLAnchorElement 등이 있는데 

Element에 들어있는걸 복사해서 몇개 더 추가해서 HTMLElement 타입을 만들어놨고

HTMLElement에 들어있는걸 복사해서 몇개 더 추가해서 HTMLAnchorElement 타입을 만들어놨습니다.

셀렉터로 대충 찾으면 Element 타입이라는게 부여가 됩니다.

아직 이 태그가 뭔지 몰라서 그냥 광범위한 타입하나를 달랑 지정해주는 겁니다.

이건 광범위한 그냥 일반 html 태그의 특징을 정리해둔 타입이기 때문에 안에 .href .src 이런거 안들어있습니다.

반면 HTMLAnchorElement 이건 조금 상세한 타입입니다.

이 타입은 "href, style, class, id 이런 속성을 가질 수 있다~" 라고 타입이 정의되어있습니다.

그래서 a태그에게 어울리는 타입인 HTMLAnchorElement 라는 타입을 쓸 수 있는지 instanceof 키워드로 확인해야합니다.