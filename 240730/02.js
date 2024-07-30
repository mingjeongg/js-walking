let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// 여기에 코드를 작성하세요.
// forEach 메서드를 사용해 배열을 순회하세요.
// '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.
// '걷기반 튜터님'이 누군지는 다 알고 계시죠? 🥹

let tutors = tutorNames.forEach(function (tutor) {
  if (
    tutor === "최원장" ||
    tutor === "윤창식" ||
    tutor === "박가현" ||
    tutor === "김병연"
  ) {
    console.log(tutor);
  }
});
console.log(tutors);

// || 사용할 때 하나하나 다 쒀줘야함
// 이렇게 tutor === "최원장" || tutor === "윤창식" || tutor ==="박가현" || tutor ==="김병연"
// 이렇겐 안돼 utor === '최원장' || '윤창식' || '김병연'

// forEach는 반환갑 없다
// 즉 return 값 없다. undefined다
// 그래서 console.log 찍어줘야한다
