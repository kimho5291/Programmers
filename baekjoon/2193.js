

let input = `5`;

let num = Number(input);
let dp = Array.from({length: num+1}, () => 0);

dp[1] = 1;
dp[2] = 1;

for(let i=3; i<=num; i++){
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2]);
}
console.log(dp[num].toString());