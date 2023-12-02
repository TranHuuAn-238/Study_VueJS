const toCurrency = function(value, unit = 'USD', dir = 'right') {
    // USD 12 - 12 USD
    if(dir === 'right') {
        return value + ' ' + unit;
    } else {
        return unit + ' ' + value;
    }
}

// kiem tra xem string ep kieu ve int co hop le hay khong? - check quantity > 1 hay khong
const validateQuantity = function(quantity) {
    let num = parseInt(quantity);
    if(num == quantity && !isNaN(num)) {
        return num >= 1;
    }
    return false;
}

// export default chi export duoc 1 ham, export thi export duoc nhieu ham
export {
    toCurrency,
    validateQuantity
}