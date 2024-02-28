/*
뒤에 오는 것을 보고 그리디하게 결정하면 됨
뒤에 있는게 같거나 크면 사고
뒤에 있는게 미만 일때
    팔게 있으면 전부 팔아서 수익 실현
    팔게 없으면 아무것도 안한다.

당장 앞에 있는 걸로 판단하면 안된다.
값이 제일 큰 곳을 찾고
*/

input = `11
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

for(let i=0; i<Number(n); i++){
    let m = Number(arr[i*2]), stock = arr[i*2+1].split(" ").map(e => Number(e));
    //console.log(m, stock)

    let purchase = [], sum = 0;
    for(let j=0; j<m; j++){
        //console.log(j, stock[j])

        let cur = stock[j], next = stock[j+1];
        //console.log(cur, next, next >= cur)
        if(next != undefined && next >= cur){
            //console.log("push", cur)
            purchase.push(cur);
        }else{
            while(purchase.length != 0){
                let first = purchase.shift();
                //console.log("sell", cur-first)
                sum += (cur-first);
            }
        }
    }
    console.log(sum)
}