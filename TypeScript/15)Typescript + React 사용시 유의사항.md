
# JSX 타입 표현하는 방법

```js
let box : JSX.Element = <div></div>;
```


# Component 타입 지정

```js
type AppProps = {
	name : string;
};

function App(props : AppProps) : JSX.Element {
	return(
		<div>{message}</div>
	)
}
```
# Props 로 JSX를 입력하는 경우

```js
type ContainerProps = {
	a : JSX.IntrinsicElements['h4'];
};

function Container (props : ContainerProps) {
	return(
		<div>{props.a}</div>
	)
}
```

# useState 타입 지정

```js
const [user, setUser] = useState<string | null>('kim');
```


# JSX 안 <> 제네릭 문법

```js
let code: any = 123;
let employeeCode = <number> code; //안됩니다
```

assertion 하고 싶으면 as 또는 <> 쓰면 되는데

리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 리액트에서 쓰지않습니다.

as 키워드만 씁시다.

하지만 as 키워드는 타입스크립트 보안해제기 때문에 타입이 100% 확실할 때만 사용하도록 합시다.


