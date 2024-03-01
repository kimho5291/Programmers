/*

hash map을 사용하여 중복 제거 및 갯수 파악
number : {count, sum} 형태

나보다 작은 숫자가 몇개인지 확인
hash map 사용

*/

let input = `5
2 4 -10 4 -9`.split("\n");

let [n, arr] = input.map(e => e.split(" ").map(ee=> Number(ee)));
let obj = {}, nums, sum = 0;
arr.forEach(e => obj[e] == undefined ? obj[e]={count:1, sum:0} : obj[e].count);
nums = [...new Set(arr)].sort((a,b) => a-b);
for(let i=0; i<nums.length; i++){
    obj[nums[i]].sum = sum;
    sum += obj[nums[i]].count;
}
let answer = arr.map(e => obj[e].sum);
console.log(answer.join(" "));