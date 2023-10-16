`async/await`는 비동기 작업을 마치 동기 작업처럼 보이게 하면서, 비동기의 이점을 유지합니다.

```js
async function example() {
    console.log('1. Start');
    
    const data = await fetchData();  // 비동기 작업이 수행되지만, 이벤트 루프는 차단되지 않습니다.
    
    console.log('3. Data:', data);
}

console.log('0. Before async function');
example();
console.log('2. After async function');

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Fetched data!');
        }, 2000);
    });
}

```

출력 순서: 0 -> 1 -> 2 -> (2초 대기) -> 3

