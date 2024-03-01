/*
bfs

무조건 DFS 익어있는 토마토가 1개이상

가로세로 N^2 이어도 백만 이기 때문에 1초에 한참못미친다.

visited 만들기

1. 전부 순회하면서 0이 없으면 전부 익은 상태 console.log(0)
1.1 순회하면서 queue에 [y,x,count] 추가하기
2. queue에 있는 것을 돌기
2-1 상하좌우 돌면서 익은 토마토 만들기
3. queue 순회가 전부 끝나고 한번 더 전부 순회하면서 0이있으면 console.log(-1)
else 전부 1이면 console.log(count)

계속 bfs 할때 queue에서 첫번째 값을 꺼내기 위해서 array.shift 하는데 이거는 O(N)이기 때문에 
index를 활용해서 하면 될 것이다.

또한, 이젠 shift 하지 않기 때문에 모든 경우의 수를 array에 넣으면 안되고
넣기 전에 조건을 확인하고 넣어야한다. 유효한것만 넣으면 된다는 뜻

메모리를 확보하기 위해서 visited 사용 x
토마토가 익지 않은 애들만 하면 됨
MAP에서 count 증가하기 때문에 할수잇음

*/

let input = `2 2
1 -1
-1 1`.split("\n");

let [NM, ...MAP] = input;
let [M, N] = NM.split(" ").map(e => +e);
MAP = MAP.map(e => e.split(" ").map(e => +e));
let dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
//console.log(N, M, MAP)

let queue = [], zeroCount = 0;
for(let y=0; y<N; y++){
    for(let x=0; x<M; x++){
        if(MAP[y][x] == 1) queue.push([y, x, 1]);
        if(MAP[y][x] == 0) zeroCount++;
    }
}
// left, right, up, down
let index = 0, max = 0;
while(index < queue.length){
    let [y, x, count] = queue[index++];
    if(max <= count) max = count;

    for(let i=0; i<4; i++){
        let nx = x+dx[i], ny = y+dy[i]; 
        if(nx < 0 || ny < 0 || ny >= N || nx >= M) continue;

        if(MAP[ny][nx] == 0){
            MAP[ny][nx] = count;
            queue.push([ny, nx, count+1]);
            zeroCount--;
        }
    }
}

console.log( zeroCount == 0 ? max-1 : -1);


// visited를 사용하고 메모리 초과가 뜨는 코드
/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [NM, ...MAP] = input;
let [M, N] = NM.split(" ").map(e => +e);
MAP = MAP.map(e => e.split(" ").map(e => +e));
let visited = Array.from({length: N}, () => Array.from({length: M}, () => false));

//console.log(N, M, MAP)
//console.log(visited);

let queue = [];
for(let y=0; y<N; y++){
    for(let x=0; x<M; x++){
        if(MAP[y][x] == 1) queue.push([y, x, 1]);
        if(MAP[y][x] == -1) visited[y][x] = true;
    }
}
//console.log(queue);

let index = 0;
// left, right, up, down
let dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
while(index < queue.length){
    let [y, x, count] = queue[index++];
    visited[y][x] = true;
    MAP[y][x] = count;

    for(let i=0; i<4; i++){
        let nx = x+dx[i], ny = y+dy[i]; 
        if(nx < 0 || ny < 0 || ny >= N || nx >= M) continue;
        if(!visited[ny][nx]){
            queue.push([ny, nx, count+1]);
        }
    }
}

let max = 0;
for(let y=0; y<N; y++){
    for(let x=0; x<M; x++){
        if(MAP[y][x] == 0) {
            console.log(-1);
            return;
        }
        if(max <= MAP[y][x]) max = MAP[y][x];
    }
}
console.log(max-1);


*/