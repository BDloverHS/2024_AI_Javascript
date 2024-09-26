const main = document.createElement("main");
const container = document.createElement("section");
container.classList.add("container");

const color = ["파랑색", "노랑색", "빨간색", "초록색", "주황색"];

Array(100)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
  });
main.appendChild(container);
document.body.appendChild(main);
