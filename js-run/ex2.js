//1부터 100까지 더하는 for문을 만들고 출력
let sum = 0;
for (let i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);

// 1부터 100까지 홀수만 출력
for (let i = 1; i < 101; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}

// 1부터 50까지 369결과를 프린트
for (let i = 1; i < 51; i++) {
  if(i % 3 == 0){
    console.log('👏');
  } else {
    console.log(i);
  }
}

// 주어진 숫자가 소수이면 true 아니면 false를 출력
function isPrime(a) {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(7));
console.log(isPrime(20));