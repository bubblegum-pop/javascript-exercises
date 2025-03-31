const removeFromArray = function(array, ...valuesToRemove) {
    const result = [];

    for (const item of array) {
        let remove = false;
        for (const value of valuesToRemove) {
            if (item === value) {
                remove = true;
            }
        }
        if (remove === false) {
            result.push(item);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
