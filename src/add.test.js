import add from './add.js'


test('Adding positive numbers',() => {
    expect(add(1,5)).toBe(6);
});

test('Adding negative numbers',() => {
    expect(add(-2,-4)).toBe(-6);
});
test('Adding negative and positive numbers',() => {
    expect(add(9,-3)).toBe(6);
});
test('Checking that inputs are numbers, and throwing error if not',() => {
    expect(() => add('b', 'o')).toThrow('Inputs must be numbers');
});
