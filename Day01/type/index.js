// 문자열(String) - "", '', ``(backtick)
const number1 = "1";
const number2 = `1`;
const number3 = "1";
console.log(number1 + number2 + number3);

// 숫자(Number)
const age1 = 100;
const age2 = 20;
console.log(age1 + age2);

// Number화 시키기
const a = Number("100"); // "100" -> 100
const b = Number("200"); // "200" -> 200
console.log(a + b); // 100 + 200 = 300

const c = String(100); // 100 - > "100"
const d = String(4); // 4 -> "4"
console.log(c + d);
