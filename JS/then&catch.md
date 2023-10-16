then/catch 방식은 비동기 작업의 완료와 실패를 체인(chain)형태로 처리한다

```js
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fetched data!');
            // reject('Failed to fetch data!');
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log('Data:', data);
        return 'New Data';  // then에서 반환된 값은 다음 then의 매개변수로 전달됩니다.
    })
    .then((newData) => {
        console.log('New Data:', newData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

```