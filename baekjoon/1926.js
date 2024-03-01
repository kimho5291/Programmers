/*
BFS

2중 for문으로 전부 순회
visited를 두고 이미 방문한곳은 제외
그리고 방문 dfs 값이 1이상이면 
count 증가 및 최대 넓이 저장

*/

let input = `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`.split("\n");

let [NM, ...ARR] = input;
let [N, M] = NM.split(" ").map(e => +e);
ARR = ARR.map(e => e.split(" ").map(e => +e));
let visited = Array.from({length: N}, () => Array.from({length: M}, () => false));

//console.log(N, M, ARR)
//console.log(visited);

let max = 0, count = 0;
for(let y = 0; y < N; y++){
    for(let x = 0; x <M; x++){
        let temp = dfs(y, x);
        if(temp >= 1) count++;
        if(max <= temp) max = temp;
        //console.log(y,x,visited);
    }
}
console.log(count + "\n" + max);

function dfs(y, x){
    if(y >= N || x >= M || y < 0 || x < 0 || visited[y][x] || ARR[y][x] == 0) return 0;
    visited[y][x] = true;
    // left, right, up, down
    return 1 + dfs(y, x-1) + dfs(y, x+1) + dfs(y-1, x) + dfs(y+1, x);
}

