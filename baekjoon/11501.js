/*
풀이 1
너무 그리디 하게 푼듯 ?
뒤에 오는 것을 보고 그리디하게 결정하면 됨
뒤에 있는게 같거나 크면 사고
뒤에 있는게 미만 일때
    팔게 있으면 전부 팔아서 수익 실현
    팔게 없으면 아무것도 안한다.

당장 앞에 있는 걸로 판단하면 안된다.
값이 제일 큰 곳을 찾고
*/


// 풀이 1 실패
// 뒤에 있는것만 보고 판단하면 안됨 

// let [n, ...arr] = input;
// //console.log(input);
// for(let i=0; i<Number(n); i++){
//     let m = Number(arr[i*2]), stock = arr[i*2+1].split(" ").map(e => Number(e));
//     //console.log(m, stock)

//     let purchase = [], sum = 0;
//     for(let j=0; j<m; j++){
//         //console.log(j, stock[j])

//         let cur = stock[j], next = stock[j+1];
//         //console.log(cur, next, next >= cur)
//         if(next != undefined && next >= cur){
//             //console.log("push", cur)
//             purchase.push(cur);
//         }else{
//             while(purchase.length != 0){
//                 let first = purchase.shift();
//                 //console.log("sell", cur-first)
//                 sum += (cur-first);
//             }
//         }
//     }
//     console.log(sum)
// }

// 풀이 2
// 뒤에 있는 애들도 보면서 진행
// 다른 테케는 전부 맞는데 메모리 초과 뜸
// 매개변수에 들어가는 것을 최대한으로 줄인다 => 전역변수로 쓴다는 뜻
// 함수에서 불필요한 내용을 삭제해준면 된다.
// 해결
let input = `11
3
3 6 1
3
6 7 5
4
6 4 7 2
5
9 3 10 9 5
4
6 9 8 5
3
4 10 1
4
6 9 2 2
5
5 7 7 8 5
3
7 8 4
5
7 6 9 1 6
10
1 2 5 4 3 7 6 5 9 8`.split("\n");

let [n, ...arr] = input;
//console.log(input);

let m, stock;

for(let i=0; i<Number(n); i++){
    m = Number(arr[i*2]), stock = arr[i*2+1].split(" ").map(e => Number(e));
    //console.log(m, stock)
    let stockRank = createArr();

   // console.log(stockRank);
    let value = [0, 0];
    for(let j=0; j<stockRank.length; j++){
        for(let k=0; k<stockRank[j][1].length; k++){
            let cur = stockRank[j][0], curIndex = stockRank[j][1][k];
            //console.log("cur", cur, curIndex);
            action(value, cur, curIndex);

            //console.log("value", value);
            
            if(curIndex == m-1) break;
        }
    }

    console.log(value[1]);
}

function action(value, cur, curIndex){
    if(value[0] >= curIndex) return;
    for(let i=value[0]; i<curIndex; i++){
        if(cur <= stock[i]) continue;
        value[1] += (cur-stock[i]);
    }
    value[0] = curIndex;
}

function createArr(){
    let obj = {}, arr= [];
    stock.forEach((e, i)=> {
        if(obj[e] == undefined) obj[e] = [i];
        else obj[e].push(i);
    });

    for(let key in obj){
        arr.push([Number(key), obj[key]]);
    }

    return arr.sort((a,b) => b[0]- a[0]);
}