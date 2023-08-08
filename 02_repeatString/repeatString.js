const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }

    let repeatStringValue = '';
    for (let i = 0; i < num; i++) {
        repeatStringValue += string;
    }
    return repeatStringValue;
};

// Do not edit below this line
module.exports = repeatString;
