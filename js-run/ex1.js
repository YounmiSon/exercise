// 유저가 입력한 숫자가 0/양수/음수인지 판단하는 프로그램
function checkInput() {
  el = Number(prompt("숫자를 입력하세요"));
  if (el > 0) {
    console.log(`${el} 양수`);
  } else if (el < 0) {
    console.log(`${el} 음수`);
  } else {
    console.log("0");
  }
}
checkInput();

// 점수 계산 프로그램
function checkScore(score) {
  score = Number(prompt("점수를 입력하세요"));
  if (90 <= score && score <= 100) {
    console.log("A");
  } else if (80 <= score && score < 90) {
    console.log("B");
  } else if (70 <= score && score < 80) {
    console.log("C");
  } else if (60 <= score && score <= 70) {
    console.log("D");
  } else if(score < 60){
    console.log("F");
  }
}
checkScore();