const toCurrency = function(value, unit = 'USD', dir = 'right') {
    // USD 12 - 12 USD
    if(dir === 'right') {
        return value + ' ' + unit;
    } else {
        return unit + ' ' + value;
    }
}

// export default chi export duoc 1 ham, export thi export duoc nhieu ham
export {
    toCurrency
}