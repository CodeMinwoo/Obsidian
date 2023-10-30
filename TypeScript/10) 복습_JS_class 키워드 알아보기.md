# 객체를 생성하는 두가지 방법

## 1. function 함수로 객체 생성(생성자 함수 패턴)

```js
function hero (){
this.q = 'consume'
this.w = 'snowball'
}

let nunu = new hero();
```

## 2. class로 객체 생성

```js
class Hero {
	constructor(){
		this.q = 'consume'
		this.w = 'snowball'
	}
}
let nunu = new Hero();
```