import slice from './slice';

test('should return an empty array when input array is null or undefined', () => {
  expect(slice(null)).toEqual([]);
  expect(slice(undefined)).toEqual([]);
});

test('should return the entire array when no start or end is specified', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array)).toEqual([1, 2, 3, 4]);
});

test('should return elements from the specified start index to the end of the array', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, 2)).toEqual([3, 4]);
  expect(slice(array, 0)).toEqual([1, 2, 3, 4]);
  expect(slice(array, 4)).toEqual([]);
});

test('should return elements from the start index up to, but not including, the end index', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, 1, 3)).toEqual([2, 3]);
  expect(slice(array, 0, 2)).toEqual([1, 2]);
  expect(slice(array, 2, 2)).toEqual([]);
});

test('should handle negative start indices correctly', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, -2)).toEqual([3, 4]);
  expect(slice(array, -4)).toEqual([1, 2, 3, 4]);
  expect(slice(array, -5)).toEqual([1, 2, 3, 4]); // Exceeds array length, starts at 0
});

test('should handle negative end indices correctly', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, 0, -1)).toEqual([1, 2, 3]);
  expect(slice(array, 1, -2)).toEqual([2]);
  expect(slice(array, 2, -3)).toEqual([]);
});

test('should handle both start and end as negative indices', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, -3, -1)).toEqual([2, 3]);
  expect(slice(array, -4, -3)).toEqual([1]);
  expect(slice(array, -1, -2)).toEqual([]); // Invalid range
});

test('should return an empty array when start is greater than end', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, 3, 1)).toEqual([]);
  expect(slice(array, 2, 2)).toEqual([]);
});

test('should handle empty arrays gracefully', () => {
  expect(slice([], 1, 3)).toEqual([]);
  expect(slice([], -1, 1)).toEqual([]);
  expect(slice([], 0)).toEqual([]);
});

test('should handle edge cases for large indices', () => {
  const array = [1, 2, 3, 4];
  expect(slice(array, 10)).toEqual([]);
  expect(slice(array, -10)).toEqual([1, 2, 3, 4]);
  expect(slice(array, 0, 10)).toEqual([1, 2, 3, 4]);
  expect(slice(array, -10, -5)).toEqual([]);
});
