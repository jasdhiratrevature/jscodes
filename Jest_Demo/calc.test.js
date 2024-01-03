const mathOperations=require('./calculator')
describe("Calculator tests", () => {
    var input1 = 0
   var input2 = 0
   
   beforeAll(() => {
     console.log("beforeAll called");
   });
   
   afterAll(() => {
     console.log("afterAll called");
   });
    beforeEach(() => {
     console.log("beforeEach called");
     input1 = 1;
     input2 = 2;
   });
    afterEach(() => {
     console.log("afterEach called");
   });
   
   test('adding 1 + 2 should return 3', () => {
     // arrange and act
     var result = mathOperations.sum(input1,input2)
   
     // assert
     expect(result).toBe(3);
   });
})