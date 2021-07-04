function multiMultiply(number1, number2) {
    const som = number1 * 2 + number2 * 2;
    const doublesom = som * 2;
    return doublesom;
}

console.log(multiMultiply (25, 20));

const multiMultiply2 = function(number3, number4) {
    const som2 = number3 * 2 + number4 * 2;
    const doublesom2 = som2 * 2;
    return doublesom2;
};

console.log(multiMultiply2 (25, 20));

const multiMultiply3 = (number5, number6) => {
    const som3 = number5 * 2 + number6 * 2;
    const doublesom3 = som3 * 2;
    return doublesom3;
};

console.log(multiMultiply3 (25, 20));