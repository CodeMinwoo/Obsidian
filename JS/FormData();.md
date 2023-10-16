FormData 는 서버로 데이터를 보낼 때 사용할 수 있는 특별한 형태의 객체이다

append() 메소드를 사용하여 FormData 객체에 데이터를 추가할 수 있다

```js
    const fileData = new FormData();
    fileData.append("file",file);
   const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS",

    fileData,

      {headers : {

        "Content-Type" : "multipart/form-data",

        pinata_api_key : "d9a4c91c8a8e53e6f8ea",

        pinata_secret_api_key : "76206ebc3ae453f60baebf0d3bd045ca10a0b46a42efe5b0c82893b9fcc0482a"

      }}
```

[[multipart&&form-data]]
