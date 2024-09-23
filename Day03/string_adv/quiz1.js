// 1. 유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자이면 소문자로,
const word = prompt("영단어를 입력하세요.");
const rep1 = word.toUpperCase();
const rep2 = word.toLowerCase();

// word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();

if (word == rep1) {
  alert(word.toLowerCase());
} else if (word == rep2) {
  alert(word.toUpperCase());
} else {
  alert(`${word}에는 대문자와 소문자가 섞여있습니다.`);
}

// 2. 유저에게 비밀번호 설정 물어보고
// -1. 길이가 8~20이 아니면 비밀번호 길이 오류
// -2. 시작이 it,IT로 시작 안 하면 비밀번호 시작은 it, IT로 시작
// -3. 특수문자 &, #, @, ! 중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위 조건이 다 맞다면 통과
const pass = prompt("비밀번호를 설정해주세요.");

const isLengthValid = pass.length >= 8 && pass.length <= 20;
const isStartIT = pass.startsWith("it") || pass.startsWith("IT");
const hasSpecialChar =
  pass.includes("&") ||
  pass.includes("#") ||
  pass.includes("@") ||
  pass.includes("!");

// if (pass.length >= 8 && pass.length <= 20) {
//   if (pass.startsWith("it") || pass.startsWith("IT")) {
//     if (
//       pass.includes("&") ||
//       pass.includes("#") ||
//       pass.includes("@") ||
//       pass.includes("!")
//     ) {
//       alert(`${pass}로 비밀번호가 만들어졌습니다.`);
//     } else {
//       alert(`&, #, @, ! 중 하나 이상을 사용하여 비밀번호를 입력해주세요.`);
//     }
//   } else {
//     alert(`비밀번호 시작은 it 혹은 IT로 해주세요.`);
//   }
// } else {
//   alert(`비밀번호는 8~20자로 입력해주세요.`);
// }

if (!isLengthValid) {
  alert(`비밀번호는 8~20자로 입력해주세요.`);
} else if (!isStartIT) {
  alert(`비밀번호 시작은 it 혹은 IT로 해주세요.`);
} else if (!hasSpecialChar) {
  alert(`&, #, @, ! 중 하나 이상을 사용하여 비밀번호를 입력해주세요.`);
} else {
  alert(`${pass}로 비밀번호가 만들어졌습니다.`);
}
