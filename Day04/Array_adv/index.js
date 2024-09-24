// arr 함수들
// map : 바꿔줘
// filter : 걸러줘(조건에 부합하는 애들만 남김)
const test1 = [10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
}); // [30,40,50]만 남음.

const test2 = [10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
}); //[20,40]만 남음

// every : 어떠한 조건에 모든 요소가 부합함? (true or false로 Boolean형으로 리턴됨)
const test3 = [10, 20, 30, 40, 50].every((x) => {
  return x > 10; // false
});

// some : 어떠한 조건에 하나의 요소라도 부합함? (true or false로 Boolean형으로 리턴됨)
const test4 = [10, 20, 30, 40, 50].some((x) => {
  return x > 10; // true
});

// 배열 만들기
Array(10); // 10칸의 빈 공간이 생김

// 100개의 배열을 만들고, 1로 채워
Array(100).fill(1);

// 100개의 배열을 1로 채운 후, 모든 요소에 1을 더해
Array(100)
  .fill(1)
  .map((x) => {
    return x + 1;
  });

Array(20)
  // Array 배열에 0을 채워줘
  .fill(0)
  // i는 인덱스 번호를 의미한다.(x가 몇번째인지[0,1,2,3,4... 순서])
  .map((x, i) => {
    return i;
  });
