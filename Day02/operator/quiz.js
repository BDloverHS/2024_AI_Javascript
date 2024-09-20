// 출생연도를 물어보고 2005년 이하이면 성인입니다. 아니면 미성년자입니다.
const year = Number(prompt("출생연도를 입력해주세요."));
const msg = year <= 2005 ? "성인입니다." : "미성년자입니다.";
console.log(`${year}년생으로 확인되었습니다.`);
console.log(msg);

// if문 사용
// if (year < 2005) {
//   console.log(`${year}년생으로 성인이십니다.`);
// } else {
//   console.log(`${year}년생으로 미성년자입니다.`);
// }

// 놀이기구를 타려고 키를 물었음. 150 이하면 탈 수 없습니다. 아니면 탈 수 있습니다.
const heigh = Number(prompt("키를 입력해주세요."));
console.log(`키가 ${heigh}cm로 확인되었습니다.`);
const res =
  heigh <= 150 ? "놀이기구를 탈 수 없습니다." : "놀이기구를 탈 수 있습니다.";
console.log(res);
// if (heigh <= 150) {
//   console.log(`키가 ${heigh}cm이므로 놀이기구를 탈 수 없습니다.`);
// } else {
//   console.log(`키가 ${heigh}cm이므로 놀이기구를 탈 수 있습니다.`);
// }

// 양의 정수를 입력받고 분초를 바꾸는 프로그램
const time = Number(prompt("초로 설정 할 정수를 입력해주세요."));

const sec = time % 60;
const min = (time - sec) / 60;
console.log(`${time}초를 분/초 단위로 바꾸면 ${min}분 ${sec}초입니다.`);
