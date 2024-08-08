const apiUrl = "https://jsonplaceholder.typicode.com/comments";

const button = document.querySelector(".showBtn");
button.addEventListener("click", fetchComments);

async function fetchComments() {
  // hint: 여기부터 try문이 시작됩니다.
  try {
    const response = await fetch(apiUrl);
    const comments = await response.json();
    // console.log(comments);

    let slicedData = comments.slice(0, 10);

    const commentsDiv = document.getElementById("comments");

    // // 4. 여기에 slice 메서드를 활용하여
    // //    comment의 body의 길이가 40 이상일 때
    // //    0번째부터 39번째 문자를 복사하고 맨 뒤에 "..."을 붙인 문자열을
    // //    slicedBody라는 변수에 할당해주세요.

    slicedData.forEach((comment) => {
      let slicedBody = `${comment.body.slice(0, 40)}...`;

      const commentElement = document.createElement("div");
      commentElement.innerHTML = `
                  <h2>${slicedBody}</h2>
                  <p>사용자 이름: ${comment.name}</p>
                  <p>이메일: ${comment.email}</p>
              `;
      commentsDiv.appendChild(commentElement);
    });
  } catch (error) {
    console.error("오류:", error);
  }
}
fetchComments();
