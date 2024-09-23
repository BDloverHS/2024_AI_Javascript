const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // 맨 뒤에 요소 추가
arr.unshift("Hybe"); // 맨 앞에 요소 추가
arr.pop(); // 맨 뒤에 요소 빼기
arr.shift(); // 맨 앞에 요소 빼기
arr.reverse(); // 배열 거꾸로
arr.indexOf("LG"); // 1
arr.indexOf("toyota"); // -1
arr.includes("Google"); // true

// 유저에게 뉴스 기사 입력받고, 찾고 싶은 단어를 입력받은 후 단어가 있으면 단어가 있습니다!. 없으면 단어가 없습니다!
const news = prompt(`뉴스 기사를 입력하세요.`);
const keyword = prompt("찾고 싶은 단어");
const news_word = news.split(" ");

news_word.includes(keyword)
  ? `찾으시는 단어가 있습니다!`
  : `찾으시는 단어가 없습니다!`;
