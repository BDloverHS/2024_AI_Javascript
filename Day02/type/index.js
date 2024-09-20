// Boolean[불리언] 타입(true or false)
const isIce = true;
const hasItem = false;
const isAdult = true;
const iskid = false;

// 불리언화 Boolean()
// truthy : 아래 거 제외 모두
// falsy : 0, ""(빈 문자열) -> false

const a = Boolean(10); //true
const b = Boolean(-3); //true
const c = Boolean("어른"); //true
const d = Boolean("스타벅스"); //true
const e = Boolean(""); //false
const f = Boolean(0); //false
