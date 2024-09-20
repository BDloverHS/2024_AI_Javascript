const ediya = [
  {
    korName: "(L)달달커피",
    engName: "(L)Mixed coffee",
    exp: "이디야의 노하우가 집약된 커피믹스의 맛을 느낄 수 있는 음료",
    kcal: 277,
    protein: 2,
    na: 39,
    sugar: 20,
    fat: 9,
    caffein: 236,
    allergy: ["우유"],
  },
  {
    korName: "팥인절미 1인 빙수",
    engName: "Red Bean Injeolmi",
    exp: "아삭한 얼음과 팥이 어울러진 베이스에 아이스크림, 통팥, 인절미, 시리얼을 올린 빙수",
    kcal: 569,
    protein: 11,
    na: 218,
    sugar: 53,
    fat: 6,
    caffein: 0,
    allergy: ["우유", "대두"],
  },
];

// div 태그 만드셈
const tag = document.createElement("div");

// div 태그에 오른쪽 내용을 넣겠음
tag.innerHTML = `
    <h4 style="font-size:30px">${ediya[0].korName}</h4>
    <p style="color":"grey">${ediya[0].exp}</p>
    <span>${ediya[0].kcal > 280 ? "살찜" : "안 찜"} kcal</span>
`;

// body태그에  div태그를 넣겠음
document.body.appendChild(tag);
