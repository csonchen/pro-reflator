const expect = require('chai').expect;
const { quickSort, sum } = require('../algo');

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
})