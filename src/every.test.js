import every from './every.js'
const isInteger = (value) => Number.isInteger(value);
const isString = (value) => typeof value === 'string';
const isBoolean = (value) => typeof value === 'boolean';
test('Testing that every value in array is integer',() => {
    expect(every([1,2,3,4,5,6,7,8,9], isInteger)).toBe(true);
});

test('Testing that every value in array is integer, false one',() => {
    expect(every([1,2,3,4,5,'hello',7,8,9], isInteger)).toBe(false);
});

test('Testing string array',() => {
    expect(every(['hello', 'world', 'does', 'this', 'work'], isString)).toBe(true);
});
test('Testing string array, false one',() => {
    expect(every(['hello', 'world', 4, 'this', 'work'], isString)).toBe(false);
});

test('Testing boolean array',() => {
    expect(every([true, false, true], isBoolean)).toBe(true);
});
test('Testing boolean array, false one',() => {
    expect(every([true, 'world', 4, false, 'work'], isBoolean)).toBe(false);
});