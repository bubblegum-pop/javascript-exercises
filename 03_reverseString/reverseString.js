const reverseString = function(string) {
    const lastIndex = string.length - 1;
    let result = "";
    
    for (let i = lastIndex; i >= 0; i--) {
        result += string.at(i);
    }

    return result;
};

console.log(reverseString("batman"));

// Do not edit below this line
module.exports = reverseString;
