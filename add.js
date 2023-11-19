// add function: add two numbers
const add = (num1, num2) => {
    // modify the code to pass the test ('should return NaN when one of the inputs is a string')
    // check the type of num1 and num2
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return NaN;
    }
    const result = num1 + num2;
    return result;
};
module.exports = add;