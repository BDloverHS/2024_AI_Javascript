// // CGV 프로그램

// // 1. 영화 고르기 - ["베테랑2", "에일리언", "사랑의 하츄핑"]
// const movie = ["베테랑2", "에일리언", "사랑의 하츄핑"];
// const mov = Number(prompt(`${movie} 중 보고싶은 영화를 고르시오.(0~2)`));
// if (movie[mov] == movie[0]) {
// } else if() {

// } else {

// }

// // 2. 좌석 등급 고르기 - ["스탠다드(10000원)","커플석(20000원)","프리미엄(15000원)","이코노미(8000원)"]
// const grave = ["스탠다드", "커플석", "프리미엄", "이코노미"];
// const gra = Number(prompt(`${grave} 중 앉고 싶은 좌석을 고르시오.(0~3)`));
// if (grave[gra] == grave[0]) {
//   const gra_price = 10000;
// } else if (gra == grave[1]) {
//   const gra_price = 20000;
// } else if (gra == grave[2]) {
//   const gra_price = 15000;
// } else {
//   const gra_price = 8000;
// }

// // 3. 팝콘 고르기 - 일반(6000원), 카라멜(6500원), 치즈(6500원), 반반(7000원)
// const popcorn = ["일반", "카라멜", "치즈", "반반"];
// const pop = prompt(`${popcorn} 중 먹고 싶은 팝콘을 고르시오.(0~3)`);
// if (pop == popcorn[0]) {
//   const pop_price = 6000;
// } else if (pop == popcorn[1]) {
//   const pop_price = 6500;
// } else if (pop == popcorn[2]) {
//   const pop_price = 6500;
// } else {
//   const pop_price = 7000;
// }

// // 4. 음료 고르기 - 탄산(2000원), 에이드(3000원), 커피(3000원)
// const drink = ["탄산", "에이드", "커피"];
// const dri = prompt(`${drink} 중 마시고 싶은 음료를 고르시오.(0~2)`);
// if (dri == drink[0]) {
//   const dri_price = 2000;
// } else if (dri == drink[1]) {
//   const dri_price = 3000;
// } else {
//   const dri_price = 3000;
// }
// // 5. 나이 입력 - 13세 이하면 30% 할인, 60세 이상 20% 할인
// const age = Number(prompt("나이를 입력하세요."));
// if (age <= 13) {
//   const price = gra_price - gra_price * 0.3;
// } else if (age >= 60) {
//   const price = gra_price - gra_price * 0.2;
// } else {
//   const price = gra_price;
// }

// // 콘솔 - 영화, 좌석, 팝콘, 음료 총 금액 : ~~~입니다.
// console.log(`선택한 영화는 ${mov}`);
