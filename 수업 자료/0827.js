// var mas1 = 1; // var은 재선언, 재할당이 가능
// let mas2 = 1; // let은 재할당만 가능
// const mas3 = 1 // const는 재선언, 재할당 모두 불가능

// // const mas3 = 2; 

// let text = "Hello";
// let num = 10;
// let isStudent = true;
// let data; // undefined (값이 없음)
// let empty = null; // (값이 없음, 일부러 비움)




// let user = "정희진";
// let score = 100;
// console.log(user + "의 점수는 " + score + "점입니다.");
// console.log(`${user}의 점수는 ${score}점이라고여.`);



// alert("경고창입니다.");

// let result = confirm("당신은 학생입니까?"); // 확인(true), 취소(false)

// let age1 = prompt("나이를 입력하세요"); // 입력받은 값은 무조건 문자형
// let age2 = Int(prompt("나이를 입력하세요")); // 숫자형으로 변환


// let age = 18;

// if (age >= 20) {
//   console.log("성인입니다.");
// } else {
//   console.log("미성년자입니다.");
// }

// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("사과를 선택했습니다.");
//     break;
//   case "banana":
//     console.log("바나나를 선택했습니다.");
//     break;
//   default:
//     console.log("알 수 없는 과일입니다.");
// }


// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++; // 없으면 무한 반복!
// } 

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// 사용자에게 나이를 입력받아,
// 20세 이상이면 "성인입니다."
// 13세 이상 19세 이하면 "청소년입니다."
// 12세 이하이면 "어린이입니다."
// 라고 콘솔에 찍히도록 하시오.

let age = prompt("나이를 입력하세요");
age = Int(age);
if (age >= 20) {
  console.log("성인입니다.");
} else if (age >= 13) {
  console.log("청소년입니다.");
} else {
  console.log("어린이입니다.");
} 

// 사용자의 성별을 선택받아 (확인/취소 응용)
// 여성일 시 “그녀가 왔다.”
// 남성일 시 “그가 왔다.”
// 라고 알림창이 뜨도록 하시오

let isFemale = confirm("여성입니까?");
if (isFemale) {
  alert("그녀가 왔다.");
} else {
  alert("그가 왔다.");
}
