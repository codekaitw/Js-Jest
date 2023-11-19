// uppercase function: convert a string to uppercase
const uppercase = (words) => {
    if (typeof words !== 'string') {
        throw new Error('Input must be a string.');
    }
    return words.toUpperCase();
}

module.exports = uppercase;