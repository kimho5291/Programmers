
// heap 자료구조
/*
개념
1. 삽입 삭제 둘다 O(logn) 이다.
2. 완전 이진트리 모양을 하고 있다.

구현 tip
1. index 0은 사용하지 않는다. 1부터 사용
2. 자식노드는 부모 노드의 *2 혹은 *2+1 이다.
3. 부모 인덱스 parseInt(현재 index / 2) -> 소수점을 잘라야 부모 찾을수있음
4. 추가의 경우 맨마지막에 추가하는것을 기본으로 둔다. 그 중 
- max의 경우 : 나의 부모값이 나보다 작으면 변경 -> 최상단 부모까지 반복 -> 부모가 나보다 크면 종료
- min의 경우 : 나의 부모값이 나보다 크면 변경 -> 최상단 부모까지 반복 -> 부모가 나보다 작으면 종료
5. 삭제의 경우 root가 빠져나가는게 일반적이며 -> 우선순위 큐 구현 가능
   중간에서 삭제한다는 소리는 검색해도 모르겠다. 하지만 삭제한다면 해당 노드부터 자식 노드를 당기는 식으로 할듯?
- max의 경우 : root가 빠지면서 맨 마지막을 root로 넣고 root의 자식을 시작해서 자신이 모든 자식 노드보다 클때까지 반복
- min의 경우 : root가 빠지막 마지막 노드가 대체, 자신의 자식 노드가 자신보다 낮으면 자리 변경, 자식 노드가 나보다 작을 때까지 진행
- min, max 둘다 조건에 끝까지 돌려야함

*/

class MaxHeap{
    constructor(length){
        this.array = Array.from({length:length+1}, () => -1);
        this.length = 0;
    }
    push(value){
        let i= ++this.length;
        while(i != 1 && value > this.array[parseInt(i/2)]){
            this.array[i] = this.array[parseInt(i/2)]
            i=parseInt(i/2);
        }
        this.array[i] = value;
    }
    pop(){
        let result = this.array[1];
        let value = this.array[this.length--];
        let parent = 1, child = 2;
        // while 조건이 child인 이유는 자식이 없을수도 있기 때문이다.
        while(child <= this.length){
            // 자식중 누가 큰지 확인 후 비교할 child 선택
            if(child < this.length && this.array[child] < this.array[child+1]) child++;
            // 현재 값과 자식 중 큰값 비교 -> 내가 더 크면 종료
            if(value > this.array[child]) break;
            // 자식 중 큰 쪽과 변경
            this.array[parent] = this.array[child];
            parent = child;
            child = parent*2;
        }
        this.array[parent] = value;

        return result;
    }
    get(index){
        return this.array[index+1];
    }
    printHeap(){
        console.log("----------- Max Heap ----------");
        let temp = "";
        for(let i=1; i<=this.length; i++){
            temp = temp + " "+ this.array[i];
        }
        console.log(temp);
        console.log("----------- Max Heap ----------");
    }
}

class MinHeap{
    constructor(length){
        this.array = Array.from({length:length}, () => -1);
        this.length = 0;
    }
    push(value){
        let i= ++this.length;
        while(i != 1 && value < this.array[parseInt(i/2)]){
            this.array[i] = this.array[parseInt(i/2)]
            i=parseInt(i/2);
        }
        this.array[i] = value;
    }
    pop(){
        let result = this.array[1];
        let value = this.array[this.length--];
        let parent = 1, child = 2;
        // while 조건이 child인 이유는 자식이 없을수도 있기 때문이다.
        while(child <= this.length){
            // 자식중 누가 큰지 확인 후 비교할 child 선택
            if(child < this.length && this.array[child] > this.array[child+1]) child++;
            // 현재 값과 자식 중 큰값 비교 -> 내가 더 크면 종료
            if(value < this.array[child]) break;
            // 자식 중 큰 쪽과 변경
            this.array[parent] = this.array[child];
            parent = child;
            child = parent*2;
        }
        this.array[parent] = value;

        return result;
    }
    get(index){
        return this.array[index+1];
    }
    printHeap(){
        console.log("----------- Min Heap ----------");
        let temp = "";
        for(let i=1; i<=this.length; i++){
            temp = temp + " "+ this.array[i];
        }
        console.log(temp);
        console.log("----------- Min Heap ----------");
    }
}



function main(){

    let maxHeap = new MaxHeap(5);
    maxHeap.push(1);
    maxHeap.push(2);
    maxHeap.push(3);
    maxHeap.push(4);
    maxHeap.push(5);
    maxHeap.printHeap();
    maxHeap.pop();
    maxHeap.printHeap();

    let minHeap = new MinHeap(5);
    minHeap.push(5);
    minHeap.push(4);
    minHeap.push(3);
    minHeap.push(2);
    minHeap.push(1);
    minHeap.printHeap();
}

main();