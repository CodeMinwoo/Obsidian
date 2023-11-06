# 필수문법 10분 정리와 설치 세팅
## JS의 문제점
다이나믹 Typing 제공
5 - '3' 이 가능하다

## 설치

리액트
	npx create-react-app my-app --template typescript

이미 있는 프로젝트에 설치시
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

타입스크립트 글로벌 설치
* npm i -g typescript

실시간 컴파일 명령어 (리액트에서는 그냥 npm run start 로 확인하면 된다)
* tsc -w

** tsc -w 를 tsconfig.json을 작성해야 js 로 바꿔준다