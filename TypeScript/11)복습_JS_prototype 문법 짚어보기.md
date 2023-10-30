# prototype 한줄 요약

prototype은 부모의 유전자 이다. 

생성된 객체는 자료를 찾을 때 직접 자료를 갖고 있으면 바로 출력하고, 없으면 부모 유전자 까지 검색한다.

따라서 부모 유전자에 있는 변수,함수 사용이 가능하다.


## 예제

```js
let arr = new Array(4,2,1);

arr.sort()
arr.length 

이 함수들은 모두 Array( 부모 ) prototype에 있어서 사용이 가능하다
```


## 예제2 

```js

function hero(){
	this.q = 'strike';
	this.w = 'snowball'
}

hero.prototype.name = 'kim'

let nunu = new hero();

nunu.name === 'kim'
```

예제3

```js
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `Hello, my name is ${this.name} and my level is ${this.level}.`;
  }
}

// 프로토타입을 사용하여 메서드 추가
Hero.prototype.attack = function() {
  return `${this.name} attacks!`;
}

const hero1 = new Hero('Nunu', 30);
console.log(hero1.greet());    // "Hello, my name is Nunu and my level is 30."
console.log(hero1.attack());   // "Nunu attacks!"

```