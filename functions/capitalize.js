const capitalize = (word) => {
  let tempArr = word.split("");
  tempArr[0] = tempArr[0].toUpperCase();
  let res = tempArr.join("");
  return res;
};
export default capitalize;
