

let input = `4`;

let num = +input;
let dp = Array.from({length: num+1}, () => 0);
if(num == 1) {
    console.log(1);
    return;
}
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
for(let i = 3; i <= num; i++) {
    dp[i] = (dp[i-1] + dp[i-2])%10007;
}
console.log(dp[num]);