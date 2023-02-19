const capitalize = (string) => {
    let arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    let final = arr.join("");
    return final;
};

const reverseString = (string) => {
    return string.split("").reverse().join("");
};


let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

function caesarCipher(str, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        let index = alphabet.indexOf(string[i]);
        result += alphabet[(index + key) % 26];
      } else {
        result += " ";
      }
    }
  
    return result;
  }

module.exports = { capitalize, reverseString, calculator, caesarCipher };