function solution(n, left, right) {
  var answer = [];

  createArray(answer, n);

  console.log(answer);

  return answer;
}

function createArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let tempArr = [];

    for (let j = 0; j < n; j++) {
      let temp = 0;

      if (i == j) {
        if (i == 0) temp = 1;
        else temp = tempArr[j - 1];
      } else if (i > j) {
        temp = arr[i - 1][j] + 1;
      } else {
        // i<j
        temp = tempArr[j - 1] + 1;
      }

      tempArr.push(temp);
    }

    arr.push(tempArr);
  }
}

solution(4, 2, 5);
