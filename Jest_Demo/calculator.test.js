const mathOperations=require('./calculator')

describe("Testing the Calculator",()=>{
    test('adding 1 and 2 should return 3',()=>{
        expect(mathOperations.sum(1,2)).toBe(3);
    });
   test('Difference of 2 and 1 should return 1',()=>{
    expect(mathOperations.diff(2,1)).toBe(3);
   })
})