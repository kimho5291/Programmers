

let input = `6
10
20
15
25
10
20`.split('\n').map(e => +e);

let [N, ...ARR] = input;
const dp = Array.from({length: N+1}, () => 0);

dp[1] = ARR[0];
dp[2] = ARR[0] + ARR[1];
dp[3] = Math.max(ARR[0],ARR[1]) + ARR[2];
for(let i=4; i<=N; i++){
    dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

console.log(dp[N]);