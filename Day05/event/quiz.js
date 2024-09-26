// // 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문 완료로 바뀌는 버튼 만들기
// const button1 = document.createElement("button");
// button1.innerText = "아메리카노";
// button1.addEventListener("click", () => {
//   button1.innerText = "주문 완료!";
// });
// document.body.appendChild(button1);

// // 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기
// const button2 = document.createElement("button");
// button2.innerText = "버튼";
// button2.style.backgroundColor = "skyblue";
// button2.addEventListener("click", () => {
//   button2.style.backgroundColor = "pink";
// });
// document.body.appendChild(button2);

const main = document.createElement("main");
const container = document.createElement("section");
container.classList.add("container");

const box = document.createElement("div");
box.classList.add("box");

box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";
box.style.margin = "10px";

const color = ["red", "blue", "yellow", "green", "purple"].forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x;
  button.style.margin = "10px";

  container.appendChild(button);

  button.addEventListener("click", () => {
    box.style.backgroundColor = x;
  });
});

[
  { name: "네모", radius: "0px" },
  { name: "둥글게", radius: "9999px" },
].forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.style.margin = "10px";
  button.addEventListener("click", () => {
    box.style.borderRadius = x.radius;
  });
  document.body.appendChild(button);
});

// const square = document.createElement("button");
// square.innerText = "네모";
// container.appendChild(square);
// square.addEventListener("click", () => {
//   box.style.borderRadius = "0px";
// });

// const sircle = document.createElement("button");
// sircle.innerText = "둥글게";
// sircle.addEventListener("click", () => {
//   box.style.borderRadius = "100px";
// });
// container.appendChild(sircle);

container.appendChild(box);
main.appendChild(container);
document.body.appendChild(main);
