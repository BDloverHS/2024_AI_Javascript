const double = (x) => {
  return x * 2;
};

const cal = (x) => {
  return x % 2 == 0 ? x * 3 : x * 2;
};

const three = (x) => {
  return x <= 3 ? `🍒` : `🍉`;
};

const arr = [1, 2, 3, 4, 5];

const arr1 = arr.map(double);
const arr2 = arr.map(cal);
const arr3 = arr.map(three);

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log("");

const fruit = [
  "water",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strewberry",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
const q1 = (x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
};
// 2. a가 들어가면 대문자와 아니면 소문자화
const q2 = (x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
};
// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기
const q3 = (x) => {
  return x.includes("a") ? x.replaceAll("a", "🍒") : x;
};

const fruit1 = fruit.map(q1);
const fruit2 = fruit.map(q2);
const fruit3 = fruit.map(q3);

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

console.log("");

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["water", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1번 문제 가을 시즌 이벤트 -> 모든 가격을 10% 할인된 가격으로 바꾸기
const quiz1 = (x) => {
  x["price"] = x["price"] * 0.9;
  return x;
};

const fallEven = starbucks.map(quiz1);

console.log(fallEven);

// 2번 문제 두유시즌 이벤트 -> 성분에 두유 강제 추가
const quiz2 = (x) => {
  x.ingredients.push("두유");
  return x;
};

const soyEven = starbucks.map(quiz2);

console.log(soyEven);

// 3번 문제 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인 된 가격으로 바꿔주고, 샷 추가
const quiz3 = (x) => {
  if (x.name == "americano") {
    x.price = x.price - 2000;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
  //   x.name == "americano" ? (x.price = x.price - 2000) : (x.price = x.price);
  //   return x;
};

const aa = starbucks.map(quiz3);

console.log(aa);

// 4번 문제 인플레이션 시즌 => 모든 가격 20% 상승
const inplation = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
