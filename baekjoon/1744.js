
/*
정렬

예외처리 
음수랑 0은 어떻게 처리할 것인가

풀이1
-1 ~ 1 은 그냥 넣어놓고
음수 곱하기 먼저 이후 양수를 해주고 
나온 값을 한번더 오름차순으로 정렬하여 
똑같은 것을 해주면 된다.

## 풀이1 실패


풀이2
양수, 0~음수 split

양수 내림차순 정렬 후 
양수[0] 양수[1] 을 곱하고 더한 수 중 큰것을 sum
길이가 1이면 그냥 더하기

음수 오름차순 정렬
음수[0] 음수[1]을 곱하고 더한 수 중에 큰것을 sum
길이가 1이면 그냥 더하기



*/

let input = `5
3
4
5
6
7`.split('\n').map(e => Number(e));

//풀이2
let [n, ...nums] = input;
nums.sort((a,b) => b-a);
let plusIndex = nums.findIndex(e => e < 1);
//console.log(plusIndex);

let plus, minus, arr = [], sum = 0;
if(plusIndex == -1){
    plus = nums;
    minus = [];
}else{
    plus = nums.splice(0, plusIndex);
    minus = nums.sort((a,b) => a-b);
}

//console.log(plus, minus);

calc("plus");
calc("minus");

console.log(sum);

function calc(string){
    let temp;
    if(string == "plus") temp = plus;
    else if(string == "minus") temp = minus;

    while(temp.length >= 1){
        if(temp.length == 1) {
            sum += temp[0];
            //console.log("len 1", temp[0], sum)
            temp.splice(0, 1);
        }else{
            let pls = temp[0] + temp[1], mul = temp[0] * temp[1];
            if(pls >= mul) sum += pls;
            else sum += mul;
            //console.log("len 2", pls, mul, sum)
            temp.splice(0, 2);
        }
    }
}




// 풀이 1 => 35% 에서 실패
/*
let [n, ...nums] = input;
nums.sort((a,b) => b-a);
//console.log(nums);

let plusIndex = nums.findIndex(e => e < 1);
console.log(plusIndex);

let plus, minus, arr = [], index = 1, sum = 0;
if(plusIndex == -1){
    plus = nums;
    minus = [];
}else{
    plus = nums.splice(0, plusIndex);
    minus = nums.sort((a,b) => a-b);
}


console.log(plus, minus)

calc("plus");
//console.log(arr, sum)

calc("minus");
//console.log(arr, sum)

arr.sort((a,b) => a-b);
//console.log(arr, sum)
final();

//console.log(arr, sum)

console.log(sum)


function calc(string){
    let temp;
    if(string == "plus") temp = plus;
    else if(string == "minus") temp = minus;


    while(temp.length >= index){
        let lt, rt, ct, pl;
        if(temp.length == 1){
            //sum+=temp[0];
            arr.push(temp[0]);
            temp.splice(0, 1);
        }
        else if(temp.length == 2){
            pt = temp[index - 1] + temp[index], ct = temp[index - 1] * temp[index];
            //console.log(pt, ct);
            if(pt < ct) {
                //arr.push(ct);
                sum+=ct;
            }else{
                arr.push(temp[index - 1]);
                arr.push(temp[index]);
                //sum+=pt;
            }
            temp.splice(index-1, 2);
    
        }else{
            lt = temp[index-1] * temp[index], rt = temp[index] * temp[index+1];
            console.log(lt, rt);
            if(lt >= rt){
                //arr.push(lt);
                sum+=lt;
                temp.splice(index-1, 2);
            }else{
                //arr.push(rt);
                sum+=rt;
                temp.splice(index, 2);
            }
        }
    }

}

function final(){
    let temp = arr;

    while(temp.length >= index){
        let lt, rt, ct, pl;
        if(temp.length == 1){
            sum+=temp[0];
            //arr.push(temp[0]);
            temp.splice(0, 1);
        }
        else if(temp.length == 2){
            pt = temp[index - 1] + temp[index], ct = temp[index - 1] * temp[index];
            //console.log(pt, ct);
            if(pt < ct) {
                //arr.push(ct);
                sum+=ct;
            }else{
                //arr.push(pt);
                sum+=pt;
            }
            temp.splice(index-1, 2);
    
        }else{
            lt = temp[index-1] * temp[index], rt = temp[index] * temp[index+1];
            //console.log(lt, rt);
            if(lt >= rt){
                //arr.push(lt);
                sum+=lt;
                temp.splice(index-1, 2);
            }else{
                //arr.push(rt);
                sum+=rt;
                temp.splice(index, 2);
            }
        }
    }

}

*/