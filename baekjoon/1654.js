/*

무조건 이분 탐색을 해야하는데 
이분 탐색은 0~랜선최대길이로 해서 하면되고 
mid길이로 만들수 있는 랜선의 길이가 k와 같은지 확인한다.
그리고 그중 가장 큰것을 찾는다.

범위를 0 ~ Math.pow(2, 31)-1 이었는데 
-1을 제거하니깐 해결 완료

*/

let input = `1 1
5`.split("\n");

let [NK, ...LANS] = input;
let [N, K] = NK.split(" ").map(e => +e);
LANS = LANS.map(e => Number(e));

//console.log(N, K, LANS)
let start = 0, end = Math.pow(2, 31), mid = 0;
while(start < end){
    let mid = parseInt((start + end) / 2);
    if(check(mid)) end = mid;
    else start = mid + 1;
}
console.log(end-1)

function check(mid){
    let count = 0;
    for(let i = 0; i<LANS.length; i++){
        count += Math.floor(LANS[i]/mid);
    }
    return count < K;
}