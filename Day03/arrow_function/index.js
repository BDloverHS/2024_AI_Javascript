// General Function(일반 함수[구 문법])
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

// Arrow Function(화살표 함수[신 문법])
// () => {}
const add1 = (x, y) => {
  return x + y;
};

const sub1 = (x, y) => {
  return x - y;
};

// ~~과일 넣으면 맛 아이스크림 돌려주는 함수
const fruit = (x) => {
  return `${x}맛 아이스크림`;
};

// 문자 3개 넣으면 배열로 돌려주는 함수
const arr = [];

const arr_f = (x, y, z) => {
  return [x, y, z];
};

// 숫자 넣으면 홀짝 알려줌
const OddEven = (x) => {
  return x % 2 == 0 ? `짝수` : `홀수`;
};
