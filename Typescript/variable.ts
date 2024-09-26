const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1";
const a3: boolean = !"";
const a4: number[] = [1, 2, 3, 4, 5];
const a5: { name: string; isAlive: boolean } = { name: "abc", isAlive: true };
const a6: { name: string; isAlive: boolean }[] = [
  { name: "abc", isAlive: true },
  { name: "def", isAlive: false },
];

const a7: { age: Number; isMan: boolean; nation: String }[] = [
  { age: 20, isMan: false, nation: "korean" },
  { age: 25, isMan: true, nation: "american" },
  { age: 18, isMan: true, nation: "japanese" },
];
