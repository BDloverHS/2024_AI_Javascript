const makeCoffee = (coffee) => {
  console.log(`커피 준비`);
  coffee();
  console.log("커피 완성");
};

const americano = () => {
  console.log("원두 준비");
  console.log("그라인더로 분쇄");
  console.log("머신으로 에소프레소 내리기");
  console.log("잔을 준비한 다음 얼음물을 담근다");
  console.log("에소프레소를 돌려가며 붓는다");
  console.log("물을 붓는다");
};
const latte = () => {
  console.log("컵에 얼음을 가득담는다");
  console.log("우유를 붓는다");
  console.log("에소프레소 60ml를 얼음 위로 붓는다");
};
const vanilla = () => {
  console.log("컵에 얼음을 가득담는다");
  console.log("우유를 붓는다");
  console.log("에소프레소 60ml를 얼음 위로 붓는다");
  console.log("바닐라 시럽을 넣는다");
};

makeCoffee(americano);
console.log("");
makeCoffee(latte);
console.log("");
makeCoffee(vanilla);

// 함수 이름 지정 안 했음
makeCoffee(() => {
  console.log("원두 준비");
  console.log("그라인더로 분쇄");
  console.log("머신으로 에소프레소 내리기");
  console.log("잔을 준비한 다음 얼음물을 담근다");
  console.log("에소프레소를 돌려가며 붓는다");
  console.log("물을 붓는다");
  console.log("망고넣기");
});
