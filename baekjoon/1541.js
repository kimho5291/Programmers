// 해결

/*
최소치를 만들기 위해서는 우선 +부터 다 해주는게 베스트
이후 - 연산을 해주는게 좋다.
*/

//const fs = require('fs');
//const input = fs.readFileSync("/dev/stdin").toString().trim();


let input = "55-50+40";
//let input = "00009-00009";


let formulas = input.split("-");
let minuses = input.replace(/[0-9|+]/g, "").split("");
//console.log(input, formulas, minuses);

for(let i=0; i<formulas.length; i++){
    let nums = formulas[i].split("+").map(e => Number(e));
    let pluses = formulas[i].replace(/[0-9]/g, "").split("");

    //console.log(input, nums, pluses);
    for(let j=0; j<pluses.length; j++){
        nums[j+1] = calc(nums[j], nums[j+1], pluses[j]);
    }
    formulas[i] = nums[nums.length-1];
}

for(let j=0; j<minuses.length; j++){
    formulas[j+1] = calc(formulas[j], formulas[j+1], minuses[j]);
}

//console.log(input, formulas, minuses);
console.log(formulas[formulas.length-1])

function calc(a, b, oper){
    if(oper == '+') return a + b;
    else return a - b;
}