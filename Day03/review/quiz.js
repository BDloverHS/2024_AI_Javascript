// 1. 어떤 숫자를 넣으면 홀/짝 알려줌
function q1() {
  const x = Number(prompt(`아무 숫자를 넣어주세요.`));
  if (x % 2 == 0) {
    return `${x}는 짝수입니다.`;
  } else {
    return `${x}는 홀수입니다.`;
  }
}
// 2. 어떤 숫자를 넣으면 5의 배수인지 아닌지
function q2() {
  const x = Number(prompt(`아무 숫자를 넣어주세요.`));

  //   if (x % 5 == 0) {
  //     return `${x}는 5의 배수입니다.`;
  //   } else {
  //     return `${x}는 5의 배수가 아닙니다.`;
  //   }
  return x % 5 == 0 ? `${x}는 5의 배수` : `${x}는 5의 배수가 아님`;
}
// 3. 어떤 숫자를 넣으면 1-일반 팝콘, 2-카러멜 팝콘, 3-치즈팝콘, 그 외 그런 거 없음
function q3() {
  const pop = Number(
    prompt("원하는 팝콘을 입력하세요. 1-일반 팝콘, 2-카러멜 팝콘, 3-치즈 팝콘")
  );

  if (pop == 1) {
    return `일반 팝콘을 선택하셨습니다.`;
  } else if (pop == 2) {
    return `카러멜 팝콘을 선택하셨습니다.`;
  } else if (pop == 3) {
    return `치즈 팝콘을 선택하셨습니다.`;
  } else {
    return `해당되는 팝콘이 없습니다.`;
  }
}

function q3_1() {
  const menu = {
    1: "일반 팝콘",
    2: "카러멜 팝콘",
    3: "치즈 팝콘",
  };

  return menu[x] || `그런 거 없음`;
}

// 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수
const arr = [];
function q4() {
  const a = prompt("원하는 단어를 넣으세요");
  const b = prompt("원하는 단어를 넣으세요");
  const c = prompt("원하는 단어를 넣으세요");

  arr.push(a);
  arr.push(b);
  arr.push(c);

  return arr;
}

console.log(q1());
console.log(q2());
console.log(q3());
console.log(q4());

// 어떠한 과일 이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수
function q5(x) {
  return `${x}맛 아이스크림`;
}

console.log(q5("사과"));

function fruitArray(a, b, c) {
  return [a, b, c];
}
