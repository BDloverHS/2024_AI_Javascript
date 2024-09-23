// const pass = prompt("설정할 비밀번호를 입력하세요.");
// const res =
//   pass.includes("it") || pass.includes("IT")
//     ? `${pass}로 비밀번호 설정 완료`
//     : `[비밀번호 설정오류]it 혹은 IT를 넣고 설정하셔야 합니다.`;
// console.log(res);

// 1. 유저에게 좋아하는 음식을 입력받고 그 음식을 5번 출력
const food1 = prompt("좋아하는 음식을 입력해주세요.");
const a = food1.repeat(5);
alert(a);

// 2. 유저에게 좋아하는 음식과 횟수를 입력받고, 그 음식을 횟수번만큼 출력하는 프로그램
const food2 = prompt(
  "음식과 숫자를 입력해주세요.(띄어쓰기를 해서 음식과 숫자를 구분)"
);
const b = food2.split(" ");

alert(b[0].repeat(Number(b[1])));

// 3. 유저에게 알파벳 단어 입력받고, 6글자보다 작으면 소문자화, 크면 대문자화
const alpha = prompt("영어단어를 입력해주세요.");
const is6under = alpha.length < 6;

const result = is6under ? alpha.toLowerCase() : alpha.toUpperCase();
alert(result);
// if (alpha.length < 6) {
//   const res = alpha.toLowerCase();
//   alert(res);
// } else {
//   const res = alpha.toUpperCase();
//   alert(res);
// }

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.

// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.

// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.

// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split(" "));
