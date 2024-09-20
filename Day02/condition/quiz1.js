// 버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500, 2000, 8000, 10000
const bus = {
  type: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],

  area: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],

  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const busChoose = Number(
  prompt(
    `${bus.type[0].name} ${bus.type[1].name} ${bus.type[2].name} ${bus.type[3].name} 중 사용 할 버스를 고르시오. (0~3)`
  )
);

const regionChoose = Number(
  prompt(
    `${bus.area[0].name} ${bus.area[1].name} ${bus.area[2].name} ${bus.area[3].name} 중 이동 할 지역을 고르시오. (0~3)`
  )
);

const gradeChoose = Number(
  prompt(
    `${bus.seat[0].name} ${bus.seat[1].name} ${bus.seat[2].name}} 중 사용할 버스를 고르시오. (0~2)`
  )
);

// 나이 13세 이하면 20%, 65세 이상이면 50%, 나머지 100%
const age = Number(prompt("나이를 입력하세요."));

const total =
  bus.type[busChoose].price +
  bus.area[regionChoose].price +
  bus.seat[gradeChoose].price;

if (age <= 13) {
  console.log(`버스의 가격은 ${total * 0.8}원`);
} else if (age >= 60) {
  console.log(`버스의 가격은 ${total * 0.5}원`);
} else {
  console.log(`버스의 가격은 ${total}원`);
}
