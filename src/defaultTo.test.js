import defaultTo from './defaultTo.js'


test('Testing null value',() => {
    expect(defaultTo(null, 0)).toBe(0);
});

test('testing NaN value',() => {
    expect(defaultTo(NaN, 0)).toBe(0);
});
test('Testing undefined value',() => {
    expect(defaultTo(undefined, 0)).toBe(0);
});
test('Testing allowed value',() => {
    expect(defaultTo(5, 0)).toBe(5);
});
