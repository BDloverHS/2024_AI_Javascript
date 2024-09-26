// |(union) : or
const b: string | number = "1";

const arr: { name: String; age: string | number }[] = [
  { name: "우현수", age: 23 },
  { name: "김수현", age: "23" },
];

// &(intersection [and])
// const b2: string & number => never 타입
const b2: { name: string } & { age: number } = { age: 21, name: "abc" };

// 어떤 타입이든 다 됨
const b3: any = "숫자든 문자든 불리언이든 다 됨";

const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;

const b5: (x: number) => number = (x) => x ** 2;
