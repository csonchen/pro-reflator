const expect = require('chai').expect;
const { 
  quickSort, 
  sum, 
  count, 
  maxNum, 
  weightedGraph, 
  depthInSearch,
} = require('../algo');

describe('quickSort', () => {
  it('normal array', () => {
    const result = quickSort([1,23,4,45,92]);
    expect(result).to.deep.equal([1,4,23,45,92]);
  });
  it('empty array', () => {
    expect(quickSort([])).to.deep.equal([]);
  })
});

describe('sum', () => {
  it('normal array', () => {
    const result = sum([2,4,6]);
    expect(result).equal(12);
  });
  it('empty array', () => {
    expect(sum([])).equal(0);
  })
});

describe('count', () => {
  it('normal array', () => {
    expect(count([2, 2, 34, 323])).equal(4);
  });
});

describe('maxNum', () => {
  it('normal array', () => {
    expect(maxNum([1,2, 23,12, 199, 1000])).equal(1000);
  })
});

describe('weighted graph', () => {
  it('normal', () => {
    // 每个节点到兄弟节点花销
    const graph = {
      start: {
        a: 6,
        b: 2,
      },
      a: {
        fin: 1,
      },
      b: {
        a: 3,
        fin: 5
      },
      fin: {}
    };
    // 当前花销集合
    const costs = {
      a: 6,
      b: 2,
      fin: Infinity,
    };
    // 父节点
    const parents = {
      a: 'start',
      b: 'start',
      fin: null
    };
    weightedGraph(graph, costs, parents);
    expect(costs['fin']).equal(6);
  })
});

describe('depthInSearch', () => {
  it('normal', () => {
    const graph = {
      you: ['alice', 'bob', 'clarire'],
      bob: ['anuj', 'peggy'],
      alice: ['peggy'],
      clarire: ['thom', 'jonny'],
      anuj: [],
      peggy: [],
      thom: [],
      jonny: [],
    }
    expect(depthInSearch(graph, 'you')).equal('thom');
  });
});