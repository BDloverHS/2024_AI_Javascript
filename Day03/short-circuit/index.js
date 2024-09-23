// short circuit

// ||[or]
const a = false || true; // ||(or)이기 때문에 둘 중 하나만 참이면 됨. 즉, a는 true

const b = undefined || "자바스크립트"; // ||(or)이기 때문에 둘 중 하나만 참이면 됨. 문자열을 true이기 때문에 b는 "자바스크립트"

const username = prompt("유저 이름 입력");
window.alert(`${username || "Guest"}님 환영합니다.`); // 만약 username을 공백으로 둔다면 Guest님 환영합니다.가 뜬다.

// &&[and]

const c = true && "탕수육";
const d = false && "탕후루";

const isLoggin = prompt("비밀번호 입력하셈") == "1234";
isLoggin && alert("주인님 ㅎㅇ");
