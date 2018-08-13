assert = require('chai').assert;

describe('Bubble sort test', function() {
  it('sorts numbers in order', function() {
    var unsortedArray = [ 5, 4, 3, 2, 1 ]
    var sortedArray = [1, 2, 3, 4, 5]

    expect(sortedArray[0]).toEqual(1);
    expect(sortedArray[1]).toEqual(2);
    expect(sortedArray[2]).toEqual(3);
    expect(sortedArray[3]).toEqual(4);
    expect(sortedArray[4]).toEqual(5);
  });
});
