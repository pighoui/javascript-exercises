const reverseString = function(string) {
    let letterArray = string.split("");
    let reverse = '';
    for (let index = letterArray.length - 1; index >= 0; index--) {
        reverse += letterArray[index];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
