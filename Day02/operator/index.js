// operator[토큰(상징적)]
// 산술 operator(+,-,*,**,/,%)

const a1 = 1 + 1;
const a2 = 10 - 1;
const a3 = 3 * 2;
const a4 = 2 ** 3; // a ** b -> a의 b제곱 [8] / 제곱 연산자
const a5 = 6 / 2; // 나누기 연산자
const a6 = 9 % 4; // a % b -> a/b의 나머지 [1] / 나머지 연산자
const a7 = -10; // 부호 반대 연산자

const a8 = "치즈" + "떡볶이"; // 문자열 연결 연산자
const a9 = 10 + "인분"; // 암묵적 타입 변환 + 문자열 연결 연산

// 대입 연산자
const b1 = "롤";
const b2 = b1 + "망겜"; // ["롤" + "망겜"]

// 비교 연산자 (<, >, >=, <=, ==) [Boolean 타입 귀결]
const c1 = 5 > 3; // true
const c2 = 5 < 3; // false
const c3 = 5 >= 3; // true
const c4 = 5 <= 3; // false
const c5 = 1 == 1; // true
const c6 = 1 != 1; // false
const c7 = 1 === 1; // 타입까지 같니?

// 논리 연산자 (&&(and), ||(or),!(not))
// &&[and] : 모두 true여야 true, 하나라도 false면 false
const d1 = 5 > 1 && 3 > 1; // true
const d2 = 5 > 1 && 3 < 1; // false

// ||[or]:하나라도 true면 true
const d3 = 5 < 1 || 3 < 1 || 1 == 1; // true

// ![not]
const d4 = !false; //true
const d5 = !!false; //false
const d6 = !"공백이 아닌 문자열"; // false -> 암묵적 불리언화
const d7 = !(5 > 3 && 3 > 1); // false
const d8 = 5 <= 3 || 3 <= 1; //false. 식 자체는 위와 같지만 코드를 깔끔하게 정리하는 방법.

// 삼항 연산자
// 조건 ? "조건이 true일 경우" : "조건이 false일 경우"
const e1 = 10 > 5 ? "아이유" : "윤하"; // 아이유
const e2 = 3 < 1 ? "혜리" : "덕선"; // 덕선
