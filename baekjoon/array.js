// 10818
// 1. apply(함수에서 사용할 this객체(따로 this 객체 없으면 null전달), 호출하는 함수로 전달할 파라미터(배열 형태))
const arr1 = [20, 10, 35, 30, 7];
let maxNum = Math.max.apply(null, arr1);
let minNum = Math.min.apply(null, arr1);

// 2. spread operator(전개 연산자), ...사용하면 객체나 배열의운소들을 하나씩 꺼내어 펼쳐서 리턴함
// Math.max(...arr1) = Math.max(20, 10, 35, 30, 7) 과 같은 의미
let maxNum2 = Math.max(...arr1);
let minNum2 = Math.min(...arr1);

console.log(`최대값: ${maxNum2}, 최소값: ${minNum2}`);

//2562
const arr2 = [3, 29, 38, 12, 57, 74, 40, 85, 61];
let maxNum3 = Math.max(...arr2);
let idxMax = arr2.indexOf(maxNum3);

console.log(`최대값은 ${maxNum3}이고 ${idxMax}번째 수이다`);

//2577★
let A = 150,
  B = 266,
  C = 427;

let mul = A * B * C;
let arrfunc = function numToArr(n) {
  return (n + "").split("").map(Number); // 숫자 mul에 ''을 더해 문자로 만들어주고 spllit을 이용해 배열로 만든다
};
console.log(arrfunc(mul));

let count;
for (let i = 0; i < 10; i++) {
  count = 0;
  for (let k = 0; k < arrfunc(mul).length; k++) {
    if (arrfunc(mul)[k] == i) count++;
  }
  console.log(count);
}

//3052
const arr3 = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
// 나머지를 resArr라는 새로운 배열에 담아준다
let resArr = arr3.map((arr3) => arr3 % 42);

const set = new Set(resArr);
resArr = [...set];
console.log(resArr.length);

//1546 reduce★
const arr4 = [40, 80, 60];
const maxScore = Math.max(...arr4);
const newScore = arr4.map((arr4) => (arr4 / maxScore) * 100);
const newAvg = newScore.reduce((acc, cur) => {
  return acc + cur;
});
console.log(`새로운 평균은 ${newAvg / newScore.length}점 입니다`);

// 8958 ★★
const input = [
  "5",
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

let num = parseInt(input[0]);
for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;
  for (let k = 0; k < input[i].length; k++) {
    if (input[i][k] === "O") {
      sum += count;
      count++;
    } else {
      count = 0;
    }
  }
  console.log(`점수는 ${sum}점 입니다`);
}

// 4344
const input2 = [
  "5",
  "5 50 50 70 80 100",
  "7 100 95 90 80 70 60 50",
  "3 70 90 80",
  "3 70 90 81",
  "9 100 99 98 97 96 95 94 93 91",
];

let num2 = parseInt(input2[0]);

for (let i = 1; i <= num2; i++) {
    let sum = 0;
    let count = 0;

    let scores = input2[i].split(" ").map(Number)
    const n = scores.shift();

    sum += scores.reduce((acc, cur) => acc+=cur,0)
    let avg = sum / n;

    for(k=0;k <= n; k++){
        if(scores[k]<avg){
            count++;
        }
    }
    console.log((count/n*100).toFixed(3)+"%");
};