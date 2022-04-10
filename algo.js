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

function count(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    // delete one num
    arr.splice(0, 1);
    return 1 + count(arr);
  }
}

function maxNum(arr) {
  if (arr.length < 2) {
    throw new Error('your array size must more than 2.')
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  } else {
    let lastNum = arr[0];
    // delete last num
    arr.splice(0, 1);
    let subMax = maxNum(arr);
    return lastNum > subMax ? lastNum : subMax;
  }
}

const processed = [];

function findLowestNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const property in costs) {
    let cost = costs[property];
    if (cost < lowestCost && !processed.includes(property)) {
      lowestCost = cost;
      lowestCostNode = property;
    }
  }
  return lowestCostNode;
}

function weightedGraph(graph, costs, parents) {
  let node = findLowestNode(costs);
  while (node !== null) {
    cost = costs[node];
    neighbors = graph[node];

    for (let key of Object.keys(neighbors)) {
      let newCost = cost + neighbors[key];
      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = key;
      }
    }
    processed.push(node);
    node = findLowestNode(costs);
  }
}

const searched = [];

function isMatcher(str) {
  return str[str.length - 1] === 'm';
}

function depthInSearch(graph, key) {
  let queue = graph[key];

  while (queue.length) {
    const person = queue.shift();
    if (!searched.includes(person)) {
      if (isMatcher(person)) {
        return person;
      } else {
        searched.push(person);
        queue = [...queue, ...graph[person]];
      }
    }
  }
  return null;
}

module.exports = {
  quickSort,
  sum,
  count,
  maxNum,
  findLowestNode,
  weightedGraph,
  depthInSearch,
}