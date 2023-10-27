```js
let 회원정보 = {

    name : 'kim',

    age : 30,

    plusOne (x){

      return x + 1

    },

    changeName : () => {

      console.log('안녕')

    }

  }

  

회원정보.plusOne(1);

회원정보.changeName();
```


```js
type Member = {

    name : string,

    age : number,

    plusOne : (x :number) => number,

    changeNmae : ()=>void

}
```

