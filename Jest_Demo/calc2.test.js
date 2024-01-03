const sum2=require('./calculator2')

test('adding 1 + 2 should return 3', () => {
    // arrange and act
    var result = sum2(1,2)
  
    // assert
    expect(result).toBe(3);
  });