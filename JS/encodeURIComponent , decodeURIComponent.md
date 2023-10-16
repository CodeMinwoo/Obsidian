Ajax 요청을 보낼 때 주소에 한글이 들어가는 경우가 있다. 서버에 따라 한글 주소를 이해하지 못하는 경우가 있는데 이때 window객체의 메서드인 encodeURIComponent 메서드를 사용한다

```js
(async()=>{
	try{
		const result = await.axios.get(`https://www.zerocho.com/api/search
		${encodeURIComponent('노드')}`);
		console.log(result);
	}catch(error){
		console.log(error);
	}
})();
```