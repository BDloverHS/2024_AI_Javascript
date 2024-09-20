// 기본 타입 : String, Number, Boolean, Null, Undefined
// 참조 타입 : Array

// Array(배열) : []
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기[플랫 화이트 위트]
// 치즈메뉴 [슈레드 모짜렐라 아메리칸치즈]
// 소스 [머스터드 핫칠리 소금 후추 스위트어니언 홀레]
// 쿠키메뉴 [화이트 초코칩 아몬드]
// 음료 메뉴 고르기[콜라 제로콜라 스프라이트 커피]

const bread = ["플랫", "화이트", "위트"];
const chee = ["슈레드", "모짜렐라", "아메리칸 치즈"];
const sour = ["머스터드", "핫칠리", "소금", "후추", "스위트 어니언", "홀레"];
const cookie = ["화이트 쿠키", "초코칩 쿠키", "아몬드 쿠키"];
const drink = ["콜라", "제로 콜라", "스프라이트", "커피"];

const num1 = Number(prompt(`${bread} 중 원하는 메뉴를 고르세요. (0~2)`));
console.log(`선택한 메뉴는 ${bread[num1]}입니다.`);
console.log(``);

const num2 = Number(prompt(`${chee} 중 원하는 메뉴를 고르세요. (0~2)`));
console.log(`선택한 메뉴는 ${chee[num2]}입니다.`);
console.log(``);

const num3 = Number(prompt(`${sour} 중 원하는 메뉴를 고르세요. (0~5)`));
console.log(`선택한 메뉴는 ${sour[num3]}입니다.`);
console.log(``);

const num4 = Number(prompt(`${cookie} 중 원하는 메뉴를 고르세요. (0~2)`));
console.log(`선택한 메뉴는 ${cookie[num4]}입니다.`);
console.log(``);

const num5 = Number(prompt(`${drink} 중 원하는 메뉴를 고르세요. (0~3)`));
console.log(`선택한 메뉴는 ${drink[num5]}입니다.`);
console.log(``);

console.log(
  `최종 메뉴는 ${bread[num1]} - ${chee[num2]} - ${sour[num3]} - ${cookie[num4]} - ${drink[num5]}`
);
