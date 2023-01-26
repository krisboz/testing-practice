import analyzeArray from "../functions/analyzeArray.js";

//average
//min
//max
// length

test("Array values", () => {
  const data = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(data.average).toEqual(4);
  expect(data.min).toEqual(1);
  expect(data.max).toEqual(8);
  expect(data.length).toEqual(6);
});
