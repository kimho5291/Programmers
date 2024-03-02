

let input = `2
push 100000
top`.split("\n");

let [n , ...arr] = input;
let stack = [], answer = [];
for (let i = 0; i < n; i++){
    let split = arr[i].split(" ");
    if(split[0] == "push") push(split[1])
    else if(split[0] == "pop") answer.push(pop(split[0]));
    else if(split[0] == "size") answer.push(size(split[0]));
    else if(split[0] == "empty") answer.push(empty(split[0]));
    else if(split[0] == "top") answer.push(top(split[0]));
}
console.log(answer.join("\n"));

function push(v) {stack.push(v);}
function pop() {return stack.length == 0 ? -1 : stack.pop();}
function size() {return stack.length;}
function empty() {return stack.length == 0 ? 1 : 0;}
function top() {return stack.length == 0 ? -1 : stack[stack.length-1];}