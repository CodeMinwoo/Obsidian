어떤 함수를 수행하기 전에 modifier의 로직이 먼저 실행되게 해서

조건이 충족된 함수만 실행하게 하거나, 함수 실행 전에 어떤 작업을 수행하도록 한다

함수에 수정자(`modifier`)가 붙어 있으면 해당 함수가 호출될 때 수정자 내의 로직이 먼저 실행됩니다. 수정자 내에서 `_` (밑줄) 기호는 원래의 함수 본문이 실행될 위치를 나타낸다

```js
modifier checkSomething() {
    require(someCondition, "Condition not met");
    _;
}

function myFunction() public checkSomething {
    // Function logic here...
}

```

## require() 과의 차이점

require는 함수 내에서 바로 사용되며, 특정 조건이 충족되지 않으면 함수의 나머지 부분이 실행되지 않는다.

수정자(modifier) 는 원하는 함수 실행 전에 실행하는 코드블럭이다. 
미리 빼놓은 코드블럭이니까 재사용에 용이하다.
수정자 내부에서도 require는 쓸 수 있다.