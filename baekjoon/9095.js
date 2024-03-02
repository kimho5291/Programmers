

let input = `3
4
7
10`.split("\n");

let [n, ...arr] = input.map(e => +e);
const DP = Array.from({length: 11}, () => 0);

DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for(let i=4; i<11; i++){
    DP[i] = DP[i-1] + DP[i-2] + DP[i-3];
}

for(let i=0; i<arr.length; i++){
    console.log(DP[arr[i]]);
}
