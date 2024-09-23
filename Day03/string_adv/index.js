// string_adv
const pizza = "cheese pizza";

// 포함하니?
const hasCheese = pizza.includes("cheese"); // true
const hasPine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

// 몇번째임?
const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

//대체
pizza.replace("z", "k"); // cheese pikza(맨 앞 하나만 바뀜)
pizza.replaceAll("z", "s"); // cheese pissa(모두 바뀜)

// 나누기(slice(a,b)를 하면 index[0]<= x < index[b]의 문자 출력 )
pizza.slice(0, 4); // chee

// 나누기[배열화 / 중요✔]
pizza.split("i"); //["cheese p", "zza"]
pizza.split(" "); //["cheese", "pizza"]

// 반복하기
pizza.repeat(3); // cheese pizza cheese pizza cheese pizza

pizza.length; // 문자 길이
