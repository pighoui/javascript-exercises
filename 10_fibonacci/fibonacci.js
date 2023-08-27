const fibonacci = function(fibIndex) {
    
    // Array to store fibonacci series
    let fibSeries = [1, 1];
    
    if (Number(fibIndex) < 0) {
        return 'OOPS'
    }
    
    // Until there are enough fibonacci numbers, push the sum of the last and second last numbers
    while (fibSeries.length < Number(fibIndex)) {
        fibSeries.push( fibSeries[ fibSeries.length - 1 ] + fibSeries[ fibSeries.length - 2 ] )
    }
    
    return fibSeries[Number(fibIndex) - 1]
};

// Do not edit below this line
module.exports = fibonacci;
