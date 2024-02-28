// 틀림 .. 


// baekjoon
//const fs = require('fs');
//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// test
let input = "10\n2 15 3 23\n4 12 6 5\n5 2 5 31\n9 14 12 1\n6 15 9 3\n6 3 6 15\n2 28 4 25\n6 15 9 27\n7 14 9 1".toString().trim().split("\n");


let [n, ...arr] = input;

let flowers = arr.map(e => e.split(" ").map(ee => Number(ee)))
.sort((a,b) => {
    if(a[0] === b[0]){
        return a[1] - b[1];
    }else{
        return a[0] - b[0];
    }
});

//console.log(flowers)

let count = 0, date = [3, 1], max = [0, 0];
for(let i=0; i<flowers.length; i++){
    let flower = flowers[i];
    //console.log(i, "번째", flower, date, max)
    
    // 만기일을 넘기는 날을 확인했을 때
    if(date[0] < flower[0] || (date[0] == flower[0] && date[1] < flower[1])){
        if(max[0] < flower[0] || (max[0] == flower[0] && max[1] < flower[1])){
            console.log(0);
            return;
        }

        //console.log("plus", flower)
        count++;
        date = [...max];
        if(12 <= date[0] && 1 <= date[1]) break;
    }
    
    // 꽃 살아있는 기간 max 찾기
    if(max[0] < flower[2] || (max[0] == flower[2] && max[1] < flower[3])){
        max[0] = flower[2];
        max[1] = flower[3];
    }
}

if(date[0] != max[0] && date[1] != max[1]) {
    //console.log("last plus");
    count++;
    date = max;
}

//console.log(date, max)

if(date[0] < 12) console.log(0);
else console.log(count);
