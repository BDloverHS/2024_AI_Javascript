function hello(x) {
  return `${x}님`;
}

function ping(x) {
  return `${x}핑`;
}

function luck(x) {
  return `${x} + 하다니 완전 러키비키잖아🤩`;
}

function squar(x, y) {
  return `${x}의 ${y}제곱은 ${x ** y}이다.`;
}

function date(x, y, z) {
  return `오늘은 ${x}년 ${y}월 ${z}일`;
}

function mbti(a, b, c, d) {
  //   if (a == I && a == i) {
  //     const mbti1 = `내향적`;
  //   } else if (a == E && a == e) {
  //     const mbti1 = `외향적`;
  //   } else {
  //     const mbti1 = `잘못 입력하셨습니다.`;
  //   }

  //   if (b == N && b == n) {
  //     const mbti2 = `직관적`;
  //   } else if (b == S && b == s) {
  //     const mbti2 = `감각적`;
  //   } else {
  //     const mbti2 = `잘못 입력하셨습니다.`;
  //   }

  //   if (c == F && c == f) {
  //     const mbti3 = `감성적`;
  //   } else if (c == T && c == t) {
  //     const mbti3 = `이성적`;
  //   } else {
  //     const mbti3 = `잘못 입력하셨습니다.`;
  //   }

  //   if (d == P && d == p) {
  //     const mbti4 = `즉흥적`;
  //   } else if (d == J && d == j) {
  //     const mbti4 = `계획적`;
  //   } else {
  //     const mbti4 = `잘못 입력하셨습니다.`;
  //   }

  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    n: "직관적",
    s: "감각적",
    f: "감각적",
    t: "이성적",
    p: "즉흥적",
    j: "계획적",
  };

  return `${mbtiMap[a]}, ${mbtiMap[b]}, ${mbtiMap[c]}, ${mbtiMap[d]}`;
}

function zodiac(x) {
  //   if ((x - 4) % 12 == 0) {
  //     return `${x}년생은 쥐띠입니다.`;
  //   } else if ((x - 4) % 12 == 1) {
  //     return `${x}년생은 소띠입니다.`;
  //   } else if ((x - 4) % 12 == 2) {
  //     return `${x}년생은 호랑이띠입니다.`;
  //   } else if ((x - 4) % 12 == 3) {
  //     return `${x}년생은 토끼띠입니다.`;
  //   } else if ((x - 4) % 12 == 4) {
  //     return `${x}년생은 용띠입니다.`;
  //   } else if ((x - 4) % 12 == 5) {
  //     return `${x}년생은 뱀띠입니다.`;
  //   } else if ((x - 4) % 12 == 6) {
  //     return `${x}년생은 말띠입니다.`;
  //   } else if ((x - 4) % 12 == 7) {
  //     return `${x}년생은 양띠입니다.`;
  //   } else if ((x - 4) % 12 == 8) {
  //     return `${x}년생은 원숭이띠입니다.`;
  //   } else if ((x - 4) % 12 == 9) {
  //     return `${x}년생은 닭띠입니다.`;
  //   } else if ((x - 4) % 12 == 10) {
  //     return `${x}년생은 개띠입니다.`;
  //   } else {
  //     return `${x}년생은 돼지띠입니다.`;
  //   }
  const target = x % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };

  return `${x}년생은 ${animal[target]}띠입니다.`;
}

console.log(hello(`우현수`));
console.log(ping(`하츄`));
console.log(luck(`이제 곧 집에 간다`));
console.log(squar(4, 2));
console.log(date(2024, 9, 20));
console.log(mbti(`I`, `S`, `F`, `P`));
console.log(zodiac(2002));
