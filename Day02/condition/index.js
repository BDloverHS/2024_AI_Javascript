//  조건문 (조건에 맞으면 코드 실행하라는 뜻)
// if-else 문

// const num = Number(prompt("숫자 입력"));

// if (num > 0) {
//   console.log("입력한 값은 양수");
// } else if (num === 0) {
//   console.log("입력한 값은 0");
// } else {
//   console.log("입력한 값은 음수");
// }

// console.log("");
// console.log("프로그램 끝");

// 수학 점수 프로그램
// const math = Number(prompt("수학 점수 입력"));

// if (math >= 90) {
//   console.log(`당신의 점수는 ${math}점이기 때문에 A등급입니다.`);
// } else if (math >= 80) {
//   console.log(`당신의 점수는 ${math}점이기 때문에 B등급입니다.`);
// } else if (math >= 70) {
//   console.log(`당신의 점수는 ${math}점이기 때문에 C등급입니다.`);
// } else if (math >= 60) {
//   console.log(`당신의 점수는 ${math}점이기 때문에 D등급입니다.`);
// } else {
//   console.log(`당신의 점수는 ${math}점이기 때문에 점수 미달입니다.`);
// }

const num = Number(prompt("숫자를 입력하세요."));

// const num1 = Number(prompt("숫자를 입력하세요."));
// const isPositive = num1 > 0;
// const isNegative = num1 < 0;
// const isOdd = num1 % 2 == 1;
// const isEven = num1 % 2 == 0;

if (num > 0) {
  if (num % 2 == 0) {
    console.log(`양의 짝수입니다.`);
  } else {
    console.log(`양의 홀수입니다.`);
  }
} else if (num === 0) {
  console.log(`0입니다.`);
} else {
  if (-num % 2 == 0) {
    console.log(`음의 짝수입니다.`);
  } else {
    console.log(`음의 홀수입니다.`);
  }
}
