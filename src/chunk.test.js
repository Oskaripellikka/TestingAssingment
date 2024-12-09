import chunk from './chunk.js'

test('Testing that chunk splits arrays to right sizes',() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});

test('Testing that chunk returns empty if array is empty',() => {
    const arr = []
    expect(chunk(arr)).toEqual([]);
});

test('Test that chunk size greater than array length works', () => {
    const arr = [1, 2];
    expect(chunk(arr, 5)).toEqual([[1, 2]]);
});

test('Testing that chunk splits arrays to right sizes with chars',() => {
    const strarr = ['a', 'b', 'c', 'd'];
    expect(chunk(strarr, 2)).toEqual([['a', 'b'], ['c', 'd']]);
});

test('should return empty array when array is null', () => {
    expect(chunk(null)).toEqual([]);
});
