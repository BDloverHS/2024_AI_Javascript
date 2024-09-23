// 프로그래밍 언어 : 컴퓨터[도구]에게 명령어를 만드는 언어

// 자바스크립트 언어 : 브라우저(DOM[HTML+CSS] + @)를 조작하기 위한 언어

// alert, prompt, console.log : [Input/Output]

// Variables(변수) : const(재할당 불가능), let(재할당 가능), var(절대 쓰지마)

let a = "김밥";
a = "치즈돈가스"; // 재할당됨

const b = "블고기";
b = "불고기김밥"; // 재할당 안 됨. js에선 되는 것처럼 보이지만 오류남.

// Data-Type(타입) :
// * 기본 : String, Number, Boolean, Null, Undefined
// * 참조 : Array["손흥민","김민재"], Object{key[문자 혹은 정수]:value[모든 타입 가능]}

// Type-Casting(타입 변환)
// * 문자화 : String(), +[문자열 연결 연산자]
// * 숫자화 : Number(), parseInt()
// * 불리언화 : Boolean(), !"공백이 아닌 문자열" -> Truthy & Falsy(0,"",null,undefined,[])

// Operator(연산자)
// * 산술연산자 : +, -, *, /, %, **
// * 논리연산자 : &&(and), ||(or), !(not)
// * 대입연산자 : =
// * 비교연산자 : ==, !=, <, >, <=, >=
// * 삼항연산자 : 조건식 ? 참 : 거짓

// Condition(조건문) : if(조건) else if(또 다른 조건) else(조건 따로 안 씀)

// Function(함수)[마술상자]
// function name() {
//    return ~~
// }
