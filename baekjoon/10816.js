/*

소트 이후 이분 탐색으로 값을 찾는데 
중복값이 있으면 그중 제일 첫번재 index를 찾는다.
이후 해당 index에서 반복문을 보면서 몇개인지 셈하는 것으로 코드를 작성했으나
60%정도 되면 시간초과 남

이걸해결하기 위해서 그냥 hash map을 쓰면 해결할 것으로 예상함
이유로는 index가 필요한게 아니라 갯수만 필요한것이라서 
hash map을 써서 그냥 O(1)으로 해결


*/

let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split("\n");

let [n, arrN, m, arrM] = input.map(e => e.split(" ").map(ee=> Number(ee)));


// 정렬, 이분탐색 풀이 => 시간초과 남
/*
arrN.sort((a,b) => a-b);
//console.log(arrN)

let answer = arrM.map(value => {
    let start = 0, end = arrN.length -1, count = 0;
    while(start < end) {
        let mid =  parseInt((start + end) / 2);
        if(value <= arrN[mid]) end = mid;
        else start = mid +1;
    }
    
    for(let i = end; i < arrN.length; i++){
        if(arrN[i] != value) break;
        count++;
    }
    return count;
});

console.log(answer.join(" "));
*/

// hash map 풀이
let obj = {};
arrN.forEach( e => obj[e] == undefined ? obj[e]=1 : obj[e]++);
let answer = arrM.map( e => obj[e] == undefined ? 0 : obj[e]);
console.log(answer.join(" "));