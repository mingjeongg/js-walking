let starbucks = [
  {
    name: "카페 라떼",
    icedOnly: false,
  },
  {
    name: "콜드 브루",
    icedOnly: true,
  },
  {
    name: "돌체 라떼",
    icedOnly: false,
  },
  {
    name: "돌체 콜드 브루",
    icedOnly: true,
  },
];

// 여기에 코드를 작성하세요.
// 아이스 전용 커피 배열을 만듭니다.
const icedOnly = starbucks.filter(function (coffee) {
  //   if (coffee.icedOnly === true) {
  //     return coffee;
  //   }
  return coffee.icedOnly;
});

console.log(icedOnly);

// coffe.icedOnly 의 값은 ture 또는 false
// 근데 filter에서는 true 값만 반환
// 그래서 coffee.iced = true 안해줘도 됨

// coffee.iced === true -> 여기서 일치 연산자는 coffe.iced===true 면 true 값을 반환하라는 소리
