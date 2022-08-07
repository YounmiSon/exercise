// 01
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
  return `김서방은 ${seoul.indexOf("kim")}에 있다`;
}

// 02
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

function solution(answers) {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  let answer = [0, 0, 0];

  for(let i = 0; i < answers.length; i++){
    if(answers[i] === arr1[i%arr1.length]){
        answer[0] += 1;
    }
    if(answers[i] === arr2[i%arr2.length]){
        answer[1] += 1;
    }
    if(answers[i] === arr3[i%arr3.length]){
        answer[2] += 1;
    }
  }
  
  let score= [];
  for(let i = 0; i < 3; i++){
    if(answer[i] === Math.max(...answer)) 
    score.push(i+1)
    }
    return score;
}

// 03
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

s = "a123"
function solution(s) {
  return s.search(/\D/g) < 0 && (s.length == 4 || s.length == 6)
}
solution(s);
// 정규식 아예 까먹고 있었음
// search와 match 다른 점 match는 배열?


// 04
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// n은 길이 10,000이하인 자연수입니다.
function solution(n) {
  let answer = "";
  for(let i = 0; i < n; i++){
      answer += i % 2 === 0 ? "수" : "박";
  }
      return answer;
}

// 05
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
  return parseInt(s);
}

// parseInt() cf.Math.floor()

function solution(n) {
  let count = 0;
  for(let i = 0;i < n; i++){
      if(i % n === 0){
          count++;
      }
  }
  return count;
}