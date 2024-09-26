type angryDepth = 1 | 2 | 3 | 4 | 5;

const d1: angryDepth = 3;

type jobType = "전사" | "마법사" | "궁수" | "도적";

const d2: { id: String; level: number; job: jobType } = {
  id: "지존법사",
  level: 155,
  job: "궁수",
};

type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘슬로우" | "해쉬브라운";
type Drinks = "제로콜라" | "콜라" | "사이다" | "환타";

type SetMenu = { main: Hamburger; side: Side; drinks: Drinks };

const myMacdonald: SetMenu = {
  main: "불고기버거",
  side: "감자튀김",
  drinks: "사이다",
};

type Bread = "플랫" | "허니오트" | "위트" | "파마산 오레가노";

type Main =
  | "에그마요"
  | "스파이시 이탈리안"
  | "스테이크 & 치즈"
  | "치킨 데리야끼";

type Cheese = "아메리칸 치즈" | "슈레드 치즈" | "모차렐라 치즈";

type Vegi = "양상추" | "토마토" | "오이" | "양파";

type Source =
  | "스위트 어니언"
  | "허니 머스타드"
  | "스위트 머스타드"
  | "스위트 칠리";

type Menu = {
  bread: Bread;
  main: Main;
  cheese: Cheese;
  vegi: Vegi[];
  source: Source[];
};

const MySubwayMenu: Menu = {
  bread: "위트",
  main: "스테이크 & 치즈",
  cheese: "슈레드 치즈",
  vegi: ["양상추", "오이", "양파"],
  source: ["스위트 칠리", "스위트 어니언"],
};
