const movie = {
  name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
  seat: [
    { name: "Standard", price: 10000 },
    { name: "Couple", price: 20000 },
    { name: "Premium", price: 15000 },
    { name: "Economy", price: 8000 },
  ],
};

const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "카러멜 팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반 팝콘", price: 7000 },
  ],

  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movieChoose = Number(prompt(`${movie.name} 중 영화를 고르세요.(0~2)`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name}중 좌석을 고르세요.(0~3)`
  )
);

const popcornChoose = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name}중 팝콘을 고르세요.(0~3)`
  )
);

const beverageChoose = Number(
  prompt(
    `${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name}}중 음료를 고르세요.(0~2)`
  )
);

const age = Number(prompt("나이를 입력하세요."));

const msg = `${movie.name[movieChoose]}, ${movie.seat[seatChoose].name}, ${shop.popcorn[popcornChoose].name}, ${shop.beverage[beverageChoose].name}`;

// lexical scope 영역
if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 : ${total} 입니다`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 : ${total} 입니다`);
} else {
  const total =
    movie.seat[seatChoose].price * 1 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 : ${total} 입니다`);
}

const total =
  movie.seat[seatChoose].price +
  shop.popcorn[popcornChoose].price +
  shop.beverage[beverageChoose].price;
