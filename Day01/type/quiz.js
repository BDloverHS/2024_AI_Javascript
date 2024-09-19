// const num1 = Number(prompt("첫번째 숫자를 입력하시오."));
// const num2 = Number(prompt("두번째 숫자를 입력하시오."));

// console.log(`첫번째 숫자는 ${num1}`);
// console.log(`두번째 숫자는 ${num2}`);
// console.log(`두 수의 합은 ${num1 + num2}입니다.`);

// 정사각형의 넓이와 둘레
const sq = Number(prompt("정사각형의 한 변의 길이를 설정하시오.(단위 제외)"));
console.log(
  `한 변의 길이가 ${sq}인 정사각형의 넓이는 ${sq * sq}이고, 둘레는 ${
    sq * 4
  }이다.`
);

const tri_m = Number(prompt("정삼각형의 한 변의 길이를 설정하시오.(단위 제외"));
const tri_h = Number(prompt("정삼각형의 높이를 설정하시오.(단위 제외)"));
console.log(
  `한 변의 길이가 ${tri_m}이고, 높이가 ${tri_h}인 정삼각형의 넓이는 ${
    (1 / 2) * tri_m * tri_h
  }이다.`
);

const cir = Number(prompt("원의 반지름의 길이를 설정하시오."));
console.log(
  `반지름이 ${cir}인 원의 넓이는 ${cir * cir}π이고, 둘레는 ${2 * cir}π`
);

const birth = Number(prompt("출생년도를 알려주세요."));
console.log(`출생년도가 ${birth}년이므로 ${2024 - birth + 1}살이십니다.`);

const japan = Number(prompt("일본여행을 간다면 챙길 돈을 적어주세요."));
console.log(
  `${japan}원을 챙기고 일본에 간다면 ${
    japan * 0.1075
  }엔을 환전 받을 수 있습니다.`
);
