// uppercase function: convert a string to uppercase
const uppercase = (words) => {
    // check the type of words, throw an error if not a string
    if (typeof words !== 'string') {
        throw new Error('Input must be a string.');
    }
    // convert words to uppercase
    return words.toUpperCase();
}

module.exports = uppercase;