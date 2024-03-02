

let input = `4
3
0
4
0`.split("\n");

let [N, ...arr] = input;
let stack = [];
for(let i = 0; i < N; i++){
    if(arr[i] == "0") stack.pop();
    else stack.push(Number(arr[i]));
}
console.log(stack.reduce((sum, cur) => sum + cur, 0));