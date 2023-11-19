const add = require('./add');

// add test group to test the add function
describe('add function tests', () => {
    // using Jest to test: Happy Path
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    // using Jest to unhappy path test: Invalid Inputs
    test('should return NaN when one of the inputs is a string', () => {
        expect(add(1, 'a')).toBeNaN();
        expect(add('a', 1)).toBeNaN();
    });

    test('should return NaN when one of the inputs is NaN', () => {
        expect(add(NaN, 1)).toBeNaN();
        expect(add(1, NaN)).toBeNaN();
    });

    test('should return NaN when not enough arguments are passed', () => {
        expect(add(1)).toBeNaN();
    });

    test('should correctly add the first two arguments and ignore additional arguments', () => {
        expect(add(1, 2, 3)).toBe(3);
    });

    // using Jest to unhappy path test: Edge Cases
    test('adds -2 + -5 to equal -7', () => {
        expect(add(-2, -5)).toBe(-7);
    });
    
    test('should handle Infinity properly', () => {
        expect(add(Infinity, 1)).toBe(Infinity);
        expect(add(-Infinity, 1)).toBe(-Infinity);
    });
    
    test('should handle numbers outside of safe integer range', () => {
        const maxSafeInteger = Number.MAX_SAFE_INTEGER;
        expect(add(maxSafeInteger, 1)).toBe(maxSafeInteger + 1);
        expect(add(maxSafeInteger, maxSafeInteger)).toBe(maxSafeInteger * 2);
    });
});