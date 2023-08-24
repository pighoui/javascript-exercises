const palindromes = function (string) {
    // removes all punctuation and decapitalises letters from original string
    string = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, ""); 
    
    // reverse of original string
    let reverseString = string.split("").reverse().join("");
    
    // returns true if they are the same
    return reverseString == string;
};

// Do not edit below this line
module.exports = palindromes;
