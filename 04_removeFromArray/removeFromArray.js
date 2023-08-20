const removeFromArray = function(array, ...removed) {

    const newArray = [];
    
    for (let arrayElement of array) {

        for (let removedElement of removed) {
            
            if (arrayElement === removedElement) {
                console.log('same');
                break;
            } 
            
            // Once all removed elements have been checked, push arrayElement to newArray
            else if (removedElement === removed[removed.length - 1]) {
                newArray.push(arrayElement);
            }
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
