const analyzeArray = (arr) => {
  //length
  const length = arr.length;
  //average
  const average =
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    length;
  //min
  const min = Math.min(...arr);
  //max
  const max = Math.max(...arr);

  return { length, average, min, max };
};

export default analyzeArray;
