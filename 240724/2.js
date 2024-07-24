// const lion = { 이름: "심바",
//     나이: 3,
//     주인공: "참",
//     대사: "하쿠나마타타" }

//     console.log(lion["대사"])
    
    // lion.대사 or lion["대사"]



// 함수로는?

const lion = { 이름: "심바",
    나이: 3,
    주인공: "참",
    대사: "하쿠나마타타" }
console.log(Object.values(lion.대사))

lion.대사 = function () {
    return '하쿠나마타타';
}

console.log(lion.script())