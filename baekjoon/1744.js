
/*
정렬

예외처리 
음수랑 0은 어떻게 처리할 것인가

풀이

-1 ~ 1 은 그냥 넣어놓고
음수 곱하기 먼저 이후 양수를 해주고 
나온 값을 한번더 오름차순으로 정렬하여 
똑같은 것을 해주면 된다.

*/

let input = `2
1
1`.split('\n').map(e => Number(e));

let [n, ...nums] = input;
nums.sort((a,b) => a-b);
console.log(nums);

let arr = [], index=1;
while(nums.length >= index){
    let lt, rt, ct, pl;
    if(nums.length == 1){
        arr.push(nums[0]);
        nums.splice(0, 1);
    }
    else if(nums.length == 2){
        pt = nums[index - 1] + nums[index], ct = nums[index - 1] * nums[index];
        //console.log(lt, rt, ct);
        let max = Math.max(pl, ct);
        if(max == ct) {
            arr.push(ct);
        }else{
            arr.push(pt);
        }
        nums.splice(index-1, 2);

    }else{
        lt = nums[index-1] * nums[index], rt = nums[index] * nums[index+1];
        //console.log(lt, rt);
        if(lt >= rt){
            arr.push(lt);
            nums.splice(index-1, 2);
        }else{
            arr.push(rt);
            nums.splice(index, 2);
        }
    }
}

let sum = arr.reduce((sum, cur) => sum+cur, 0);
console.log(sum)

