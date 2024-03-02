
let input =`5 3
5 4 3 2 1
1 3
2 4
5 5`.split("\n");

let [NM, NUMS, ...ARR] = input;
let [N, M] = NM.split(" ").map(e => +e);
NUMS = NUMS.split(" ").map(e => +e);
ARR = ARR.map(e => e.split(" ").map(ee => +ee));

const DP = Array.from({length: N+1}, () => 0 );
DP[1] = NUMS[0];
for(let i=2; i<=NUMS.length; i++){
    DP[i] = DP[i-1] + NUMS[i-1];
}

// console.log(N, M, NUMS, ARR);
// console.log(DP)

let answer = [];
for(let i=0; i<ARR.length; i++){
    answer[i] = DP[ARR[i][1]] - DP[ARR[i][0]-1];
}

console.log(answer.join("\n"));

