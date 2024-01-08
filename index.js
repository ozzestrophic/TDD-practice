function capitalize(string) {
  string = string.trimStart();
  return string.replace(string.at(0), string.at(0).toUpperCase());
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(string.at(i));
  }
  return reversedString;
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },
};

function ceasarCipher(string, key) {
  let ciphered = "";

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (const letter of string) {
    if (lowerCase.includes(letter)) {
      let newLetter = cipherLower(letter, key);
      ciphered = ciphered.concat(newLetter);
    } else if (upperCase.includes(letter)) {
      let newLetter = cipherUpper(letter, key);
      ciphered = ciphered.concat(newLetter);
    } else {
      ciphered = ciphered.concat(letter);
    }
  }
  return ciphered;
}

function cipherLower(letter, key) {
  let code = letter.charCodeAt(0) + key;
  while (code > "z".charCodeAt(0)) {
    code = code - 26;
  }
  return String.fromCharCode(code);
}
function cipherUpper(letter, key) {
  let code = letter.charCodeAt(0) + key;
  while (code > "Z".charCodeAt(0)) {
    code = code - 26;
  }
  return String.fromCharCode(code);
}

function analyzeArray(array) {
  return {
    average: average(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function average(array) {
  const sum = array.reduce(getSum);
  return sum / array.length;

  function getSum(total, num) {
    return total + num;
  }
}

function getMin(array) {
  let min = array[0];
  array.forEach((item) => {
    if (item < min) min = item;
  });
  return min;
}

function getMax(array) {
  let max = array[0];
  array.forEach((item) => {
    if (item > max) max = item;
  });
  return max;
}

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
