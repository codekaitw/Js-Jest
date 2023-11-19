const uppercase = require('./uppercase');

describe('uppercase function tests', () => {
    test('should convert a string to uppercase', () => {
        expect(uppercase('hello')).toBe('HELLO');
        expect(uppercase('world')).toBe('WORLD');
    });

    test('should throw an error for non-string inputs', () => {
        expect(() => uppercase(123)).toThrowError('Input must be a string.');
        expect(() => uppercase(null)).toThrowError('Input must be a string.');
        expect(() => uppercase(undefined)).toThrowError('Input must be a string.');
    });

    test('should handle an empty string input', () => {
        expect(uppercase('')).toBe('');
    });
});