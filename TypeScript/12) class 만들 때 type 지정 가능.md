
# class 필드값

클래스의 필드값(field value)은 클래스 내부에 저장된 변수를 의미한다. 이 필드값들은 클래스의 각 인스턴스에 속하며, 인스턴스가 생설될 때마다 각 인스턴스에 대해 별도로 저장된다.

** class 필드값에 저장되어 있는 변수는 prototype에 저장되지 않는다.

프로토 타입에 변수를 저장하는 것은 권장되지 않는다

### prototype 변수 저장 예시

```js
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// 프로토타입 객체에 변수 추가
Hero.prototype.team = 'Red';

const hero1 = new Hero('Nunu', 30);
const hero2 = new Hero('Ashe', 25);

console.log(hero1.team);  // "Red" - 프로토타입에서 상속받은 변수
console.log(hero2.team);  // "Red" - 프로토타입에서 상속받은 변수

// 하나의 인스턴스에서 변수 값을 변경
hero1.team = 'Blue';

console.log(hero1.team);  // "Blue" - 인스턴스 자체의 변수
console.log(hero2.team);  // "Red" - 여전히 프로토타입에서 상속받은 변수

```

위 예제에서 `Hero`라는 생성자 함수를 정의하고, 프로토타입 객체에 `team`이라는 변수를 추가했습니다. `hero1`과 `hero2` 두 인스턴스를 생성하면, 이들은 프로토타입 체인을 통해 `team` 변수에 접근할 수 있습니다.

`hero1` 인스턴스에서 `team` 변수의 값을 변경하면, `hero1`에는 자체적인 `team` 변수가 생성되고, 이는 프로토타입의 `team` 변수와는 독립적입니다. 그 결과, `hero1.team`은 `'Blue'`를 반환하지만, `hero2.team`은 여전히 프로토타입의 `'Red'` 값을 반환합니다.


### 반면 class 안에 있는 함수는 prototype에 저장된다.
### class 안에 있는 함수는 function을 붙이지 않고 만든다

```js
tax(): number {
	return this.price / 10; 
}
```

이렇게 적으면 틀린다
```js
    function tax() :number{
        return this.price / 10;
    }
```

# constructor 안의 변수

타입스크립트에서는 필드 값에 미리 변수를 정의해놓아야 this. 으로 사용할 수 있다.

```js
	class Person {
	name : string;
	age : number;
	constructor ( a = 'kim' ){
	this.name = a;
	this.age = 20;
	}
}
```


# class 에 type 지정 예시

```js
class Person<T> {

    name ;

    constructor(a : T){

        this.name = a;

    }

}
let a = new Person <string>("어쩌구");
a.name
```