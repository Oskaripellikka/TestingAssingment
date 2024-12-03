import ceil from './ceil.js' 

test('Testing without decimals',() => {
    expect(ceil(531.8674, 0)).toBe(532);
});

test('Testing without decimals and using default value',() => {
    expect(ceil(531.8674)).toBe(532);
});

test('testing with 2 decimals ',() => {
    expect(ceil(34.56789, 2)).toBe(34.57);
});
test('Testing rounding up to two numbers',() => {
    expect(ceil(2515.56, -2)).toBe(2600);
});
