/*

오름차순 정렬 후 이분탐색
시간초과가 난다.. 왜인지 모르겠음 흠흠

이전 코드를 보면 arrM 반복하는것 안에 console.log가 들어있었다.
문자열 출력 구문은 시간이 길다 무조건 밖에 있어야함


두번째 풀이 
SET을 이용함 풀이
set은 해시 테이블 자료구조이기 때문에 
set has를 쓰면 시간 복잡도는 O(1)이다.

*/

let input = `5
4 1 5 2 3
5
1 3 7 9 5`.split("\n");

let [n, arrN, m, arrM] = input.map(e => e.split(" ").map(ee=> Number(ee)));


// 이분 탐색
/*
arrN.sort((a, b) => a-b);
//console.log(n, arrN, m, arrM)

let answer = arrM.map(value => {
    //console.log("value", value);
    let start = 0, end = arrN.length-1;
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if(value <= arrN[mid]) end = mid;
        else start = mid+1;
    }
    return arrN[end] == value ? 1 : 0;
    //console.log("result", end, arrN[end]);
});
console.log(answer.join("\n"));
*/


// SET을 이용한 풀이
// SET으로 풀기 위해서는 중복이 있으면 안된다.

arrN = new Set(arrN);
let answer = arrM.map(value => arrN.has(value) ? 1 : 0 );
console.log(answer.join("\n"));
