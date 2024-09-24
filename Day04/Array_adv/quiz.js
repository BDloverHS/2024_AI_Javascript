// [1,2,3,4,5,6,7,8,9,10] 중 3의 배수만 살려
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return x % 3 == 0;
// });

// alert(arr1);
// [1,2,3,4,5,6,7,8,9,10] 중 4 이상 8 이하만 살려
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return x >= 4 && x <= 8;
// });

// alert(arr2);
// ["water","cherry","banana","avocado","apple","orange","pineapple","strewberry"]
// 3.알파벳 O 가 들어간 애들만 살려
// const fruit = [
//   "water",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strewberry",
// ];

// const arr3 = fruit.filter((x) => {
//   return x.includes("o");
// });

// alert(arr3);
// 4.문자길이가 6글자 이상만 살려
// const arr4 = fruit.filter((x) => {
//   return x.length >= 6;
// });

// alert(arr4);
// 5.문자길이가 짝수애들만 살리고 대문자화
// const arr5 = fruit
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });

// alert(arr5);

// 유저에게 정수 n, k를 입력받으면 n(최대숫자), k(배수)일 때, k, 2k, ... (n=Mk(M은 상수))가 되는 함수
// const n = Number(prompt(`최대숫자를 입력해주세요.`));
// const k = Number(prompt(`배수를 입력해주세요.`));

// const arr6 = Array(n)
//   .fill(0)
//   .map((x, i) => {
//     return i + 1;
//   })
//   .filter((x) => {
//     return x % k == 0;
//   });

// alert(arr6);

// todolist = ["점식먹기", "복습하기", "카카오톡", "유튜브"]
// finished = [false,false,true,true]

// newTODOlist = ["점심먹기","복습하기"]

// const todolist = ["점심먹기", "복습하기", "카카오톡", "유튜브"];
// const finished = [false, false, true, true];

// todolist.filter((x, i) => {
//   return !finished[i];
// });

// 함수화[패턴화]
// const test1 = (todo, finish) => {
//   return todo.filter((x, i) => {
//     return !finish[i];
//   });
// };

// x 기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨 거
// const word = "xabcxdefxghi";

// const test2 = (word) => word.split("x").map((x) => x.length);

// 모음 :  a,e,i,o,u는 대문자로 바꾸기
const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
const vowels = ["a", "e", "i", "o", "u"];

// const test3 = fruits.map((x) => {
//   return x.split("").map((y) => {
//     return y == "a" || y == "e" || y == "i" || y == "o" || y == "u"
//       ? y.toUpperCase()
//       : y;
//   });
// });

const test3 = fruits.map((x) =>
  x
    .split("")
    .map((y) => (vowels.some((v) => y == v) ? y.toUpperCase() : y))
    .join("")
);

alert(test3);

// 1~100까지 만들고 369 만들기

// 알고리즘 문제 풀 때
// 해당 타입에 방법이 없으면 다른 타입으로 바꾸기

const num = Arr(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );

alert(num);
