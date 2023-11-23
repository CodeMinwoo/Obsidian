# 리액트는 객체를 이해하지 못한다. 리액트가 이해할 수 있는 JSX로 바꿔주어야 한다.

## 해결방법

**객체를 JSON 문자열로 변환하기**: `JSON.stringify()`를 사용하여 객체를 JSON 문자열로 변환할 수 있습니다. 이렇게 하면 객체의 내용을 텍스트 형태로 볼 수 있다.

```js
	const myObject = { name: "Alice", age: 30 };
	 function MyComponent() {
	  return <div>{JSON.stringify(myObject)}</div>;
	}
```