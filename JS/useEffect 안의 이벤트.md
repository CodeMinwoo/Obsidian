useEffect 가 한번만 실행된다고 해서, 그 안에 있는 이벤트가 감지되지 않는게 아니다.

```js
useEffect(() => {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            setAccount(accounts[0]);  // 첫 번째 계정을 상태에 설정
        });
    }

    return () => {
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        if (window.ethereum) {
            window.ethereum.removeAllListeners('accountsChanged');
        }
    }
}, []);

```