const fs = require('fs');
const path = require('path')
//배열 내 한국어 변환
const ChangeKor = (arr)=>{
    let newArr = arr.map((i)=>{
        return encodeURIComponent(i);
    })
    return newArr;
}

// URL 작성 함수
const MakeURL = (arr,newArr)=>{
    return newArr.map((i,index)=>{
        return `* [${arr[index]}](https://github.com/killthecardz/Obsidian/blob/main/Solidity/${i}.md)`
    })

}

const getFiles = (directory)=>{
    let result = fs.readdirSync(directory);
    return result
}

const getDir = (folder)=>{
    let items = fs.readdirSync("./");

        // 디렉토리만 필터링합니다.
        const subfolders = items.filter(item => {
            const itemPath = path.join("./", item);
            return fs.statSync(itemPath).isDirectory() && item !== ".git" && item !== "node_modules" && item !== ".obsidian";
        });
        console.log(subfolders);
        return subfolders;
}

const main = ()=>{
    let arr =getFiles("./solidity");
    let newArr = ChangeKor(arr);
    let result=MakeURL(arr,newArr);
    console.log(result);
}

// main();
getDir();



