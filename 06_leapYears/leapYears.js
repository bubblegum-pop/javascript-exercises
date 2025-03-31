const leapYears = function(year) {
    let isLeapYear;

    const isDivisibleBy = function(dividend, divisor) {
        if (dividend % divisor === 0) {
            return true;
        } else {
            return false;
        }
    }

    const isDivisibleBy4 = isDivisibleBy(year, 4);
    const isDivisibleBy100 = isDivisibleBy(year, 100);
    const isDivisibleBy400 = isDivisibleBy(year, 400);

    if (isDivisibleBy400) {
        isLeapYear = true;
    } else if (isDivisibleBy100) {
        isLeapYear = false;
    } else if (isDivisibleBy4) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
