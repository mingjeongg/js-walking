let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// sort() 메서드를 활용하여 다음과 같은 결과가 나오도록 코드를 작성해 주세요.
// 결과: ['김병연', '김르탄', '내배캠', '박가현', '윤창식', '최원장']

// 튜터님 이름이 담긴 배열을 가나다순으로 정렬하는 코드를 작성해주세요.
// 이 아래에 코드를 작성해주세요!

tutorNames.sort(function (a, b) {
  return a.localeCompare(b);
  // 이게 숫자면 a-b 또는 b-a 로 하면 됨
  //근데 글자를 거꾸로 정렬하려면
  // b.localeCompare(a)
});

console.log(tutorNames);

// function sortArray2(arr) {
//     // 여기에 sort를 사용하여 작성하세요
//     const result = arr.sort(function (인자1, 인자2) {
//       return 인자1.localeCompare(인자2);
//     });
//     return result;
//   }
