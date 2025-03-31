const sumAll = function(arg1, arg2) {
    let sum = "ERROR";

    // Returns true if the argument is a positive integer
    const isPosInt = function(arg) {
        let result = false;
            
        if (typeof arg === "number") {
            if (arg > 0) {
                if (arg % 1 === 0) {
                    result = true;
                }
            }
        }

        return result;
    }

    // If both arguments are positive integers, sum all values in range
    if (isPosInt(arg1) === true) {
        if (isPosInt(arg2) === true) {
            let numberToAdd = Math.min(arg1, arg2);
            const endValue = Math.max(arg1, arg2);
            sum = 0;

            while (numberToAdd <= endValue) {
                sum += numberToAdd;
                numberToAdd++;
            }
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
