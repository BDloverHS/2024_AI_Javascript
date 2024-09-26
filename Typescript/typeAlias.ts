//typeAlias

type person = { name: String; age: Number; gender: String };
type college = { id: Number; grade: Number; major: String };
type collegeStudent = person & college;

const c1: person = { name: "우현수", age: 23, gender: "Male" };

const c2: person[] = [
  { name: "우현수", age: 23, gender: "Male" },
  { name: "이름", age: 20, gender: "Female" },
];

const c3: collegeStudent = {
  age: 21,
  id: 12345,
  gender: "여성",
  grade: 1,
  major: "철학과",
  name: "abc",
};

type product = { name: String; price: Number };

type meal = { calrories: Number; category: String };

type dessert = {
  calrorie: Number;
  sweetnessLevel: number;
};

const saltBread: product & meal = {
  name: "소금빵",
  calrories: 150,
  category: "빵",
  price: 1500,
};
