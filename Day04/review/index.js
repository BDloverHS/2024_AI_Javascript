// 1. [10,20,30,40,50]을 30 이하면 100 더하기 아니면 200 더하기
const arr1 = [10, 20, 30, 40, 50];

const cal = (x) => {
  return x <= 30 ? x + 100 : x + 200;
};

const q1 = arr1.map(cal);

alert(q1);

// 2.["americano","latte","vanilla","mocha","mint","tea"] 5글자 이하면 대문자화 아니면 '☕'로 바꾸기
const arr2 = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];

const alpha = (x) => {
  return x.length <= 5 ? x.toUpperCase() : x.replace(x, "☕");
};

const q2 = arr2.map(alpha);

alert(q2);

// 함수에 return 외에 올 일이 없으면 한 줄로 가능(중괄호와  return 을 없앰)
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
