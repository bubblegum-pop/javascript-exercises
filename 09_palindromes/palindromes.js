const palindromes = function (str) {
  let initStr = str.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  let reverse = initStr.slice().split("").reverse().join("");
  return initStr == reverse;
};

// Do not edit below this line
module.exports = palindromes;
