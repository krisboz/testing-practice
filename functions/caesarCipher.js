const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const caesarCipher = (string, shiftFactor) => {
  const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  let originalArr = string.split("");
  let result = [];
  console.log(originalArr);
  originalArr.forEach((element) => {
    //If it's a letter (it leaves out punctuation)
    if (alphabet.hasOwnProperty(element)) {
      const number = alphabet[element];
      //Handles wrapping from z to a
      if (number + shiftFactor > 25) {
        let letter = getKeyByValue(
          alphabet,
          alphabet[element] + shiftFactor - 26
        );
        result.push(letter);
      } else {
        let letter = getKeyByValue(alphabet, alphabet[element] + shiftFactor);
        result.push(letter);
      }
    } else {
      result.push(element);
    }
  });

  return result.join("");
};

export default caesarCipher;
