/*
BFS

(1, 1) 부터 시작해서 상하좌우 이동 => n, m 도착까지 => 무조건 하나는 길이 있음

dfs보다 bfs가 빨리 끝남 => 잘못된 길이 많으면 그만큼 늦음

*/

let input = `4 6
101111
101010
101011
111011`.split("\n");

let [NM, ...MIRO] = input;
let [N, M] = NM.split(" ").map(e => +e);
MIRO = MIRO.map(e => e.split("").map(e => +e));
let visited = Array.from({length: N}, () => Array.from({length: M}, () => false));

//console.log(N, M, MIRO)
//console.log(visited);

// [y, x, count]
let query = [[0, 0, 1]];
while(query.length != 0){
    let [y, x, count] = query.shift();

    if(y < 0 || y >= N || x < 0 || x >= M || MIRO[y][x] == 0 || visited[y][x]) continue;
    if(y == N-1 && x == M-1) {
        console.log(count);
        break;
    }

    visited[y][x] = true;
    // left, right, up, down
    query.push([y, x-1, count+1]);
    query.push([y, x+1, count+1]);
    query.push([y-1, x, count+1]);
    query.push([y+1, x, count+1]);
}
