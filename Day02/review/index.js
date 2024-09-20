const sport1 = prompt("첫번째 운동을 입력하세요.");
const sport2 = prompt("두번째 운동을 입력하세요.");
const sport3 = prompt("세번째 운동을 입력하세요.");

console.log(`첫번째 운동은 ${sport1}`);
console.log(`두번째 운동은 ${sport2}`);
console.log(`세번째 운동은 ${sport3}`);

console.log(`운동순서는 ${sport1} → ${sport2} → ${sport3}입니다.`);

console.log(``);

const price = Number(prompt("커피의 가격을 입력하세요."));
const coffee = Number(prompt("구매 할 커피의 수를 입력하세요."));

console.log(`커피의 가격은 ${price}원`);
console.log(`구매할 커피는 ${coffee}잔`);

console.log(`커피 ${coffee}잔의 총 가격은 ${price * coffee}원 입니다.`);

console.log(``);

const year = Number(prompt("태어난 년도를 입력하세요."));
console.log(`입력한 년도 : ${year}`);
console.log(
  `${year}년생이시기 때문에 당신의 나이는 ${2024 - year + 1}살이시군요!`
);
