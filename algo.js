function quickSort(arr) {
  // 如果数组数量只有一个，递归返回
  if (arr.length < 2) {
    return arr;
  } else {
    let normalNum = arr[0];
    // left half
    let leftArr = [];
    // right half
    let rightArr = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= normalNum) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    return [
      ...quickSort(leftArr), 
      normalNum, 
      ...quickSort(rightArr)
    ];
  }
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let lastNum = arr[0]; 
    // delete lastNum
    arr.splice(0, 1);
    return lastNum + sum(arr);
  }
}

module.exports = {
  quickSort,
  sum,
}