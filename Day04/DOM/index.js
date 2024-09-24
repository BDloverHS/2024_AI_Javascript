// DOM[HTML + CSS]

// Element Type
const div = document.createElement("div");
div.innerText = "등촌칼국수";
div.style.color = "red";
document.body.appendChild(div);

// const button1 = document.createElement("button");
// button1.innerText = "아메리카노";
// button1.style.backgroundColor = "skyblue";
// button1.style.color = "white";
// document.body.appendChild(button1);

// const button2 = document.createElement("button");
// button2.innerText = "에이드";
// button2.style.backgroundColor = "skyblue";
// button2.style.color = "white";
// document.body.appendChild(button2);

// const button3 = document.createElement("button");
// button3.innerText = "라떼";
// button3.style.backgroundColor = "skyblue";
// button3.style.color = "white";
// document.body.appendChild(button3);

// .forEach : 둘러볼게~
// const test1 = ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.style.backgroundColor = "skyblue";
//   button.style.color = "white";
//   document.body.appendChild(button);
// });

// // const color = ["yellow", "pink", "skyblue"];

// // const backColor = ["black", "white", "orange"];

// // const test2 = ["아메리카노", "에이드", "라떼"].forEach((x) => {
// //   const button = document.createElement("button");
// //   button.innerText = x;
// //   button.style.backgroundColor = backColor[Number(indexOf(x))];
// //   button.style.color = color[indexOf(x)];
// //   document.body.appendChild(button);
// // });

// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "white" },
//   { name: "라떼", bg: "skyblue", color: "orange" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.bg;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });

// className
// container.className = "container"
// const container = document.createElement("div");

// // classList
// container.classList.add("container"); // <div class="container"> </div>

// const box = document.createElement("div");
// box.classList.add("box");
// box.style.backgroundColor = "red";
// container.appendChild(box);

// const box1 = document.createElement("div");
// box1.classList.add("box");
// box1.style.backgroundColor = "yellow";
// container.appendChild(box1);

// document.body.appendChild(container);
// const rep = () => {
//   const container = document.createElement("div");
//   container.classList.add("container");

//   const box1 = document.createElement("div");
//   box1.classList.add("box1");
//   box1.style.backgroundColor = "red";
//   container.appendChild(box1);

//   const box2 = document.createElement("div");
//   box2.classList.add("box2");
//   box2.style.backgroundColor = "orange";
//   container.appendChild(box2);

//   const box3 = document.createElement("div");
//   box3.classList.add("box3");
//   box3.style.backgroundColor = "yellow";
//   container.appendChild(box3);

//   const box4 = document.createElement("div");
//   box4.classList.add("box4");
//   box4.style.backgroundColor = "green";
//   container.appendChild(box4);

//   const box5 = document.createElement("div");
//   box5.classList.add("box5");
//   box5.style.backgroundColor = "blue";
//   container.appendChild(box5);

//   const box6 = document.createElement("div");
//   box6.classList.add("box6");
//   box6.style.backgroundColor = "navy";
//   container.appendChild(box6);

//   const box7 = document.createElement("div");
//   box7.classList.add("box7");
//   box7.style.backgroundColor = "purple";
//   container.appendChild(box7);

//   document.body.appendChild(container);
// };

const container = document.createElement("div");

const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

Array(2000)
  .fill(0)
  .forEach((x, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
