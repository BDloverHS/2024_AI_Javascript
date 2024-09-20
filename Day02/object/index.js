// object(객체) : {}
const coffee = {
  name: "아메리카노",
  price: 3000,
  kcal: 1,
  shop: "벤티",
  isIce: true,
  ingredients: ["커피콩", "물"],
};

console.log(coffee);

console.log(coffee.shop); // dot 접근법
console.log(coffee["shop"]); // bracket 접근법. 결과는 위 dot 접근법과 같음. 두 경우 모두 자주 쓰는 문법
console.log(coffee.maker); // 없으면 undefined
console.log(coffee.ingredients[1]); // 물

coffee.amount = 255; // coffee라는 object에서 amount를 추가
delete coffee.shop; // coffee라는 object에서 shop을 지움.
