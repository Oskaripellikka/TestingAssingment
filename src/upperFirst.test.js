import upperFirst from "./upperFirst";

test('should convert the first character of a string to upper case', () => {
  expect(upperFirst('fred')).toBe('Fred');
  expect(upperFirst('hello')).toBe('Hello');
  expect(upperFirst('world')).toBe('World');
});

test('should not change the string if the first character is already upper case', () => {
  expect(upperFirst('FRED')).toBe('FRED');
  expect(upperFirst('Hello')).toBe('Hello');
});

test('should handle empty strings', () => {
  expect(upperFirst('')).toBe('');
});

test('should handle strings with leading whitespace', () => {
  expect(upperFirst('  fred')).toBe('  Fred');
  expect(upperFirst('   hello')).toBe('   Hello');
});

test('should handle single character strings', () => {
  expect(upperFirst('a')).toBe('A');
  expect(upperFirst('Z')).toBe('Z');
});

test('should return an empty string when input is undefined', () => {
  expect(upperFirst(undefined)).toBe('');
});

test('should return an empty string when input is null', () => {
  expect(upperFirst(null)).toBe('');
});

test('should handle non-string inputs gracefully', () => {
  expect(upperFirst(123)).toBe(''); // Return empty string for number
  expect(upperFirst(true)).toBe(''); // Return empty string for boolean
  expect(upperFirst([])).toBe(''); // Return empty string for empty array
  expect(upperFirst({})).toBe(''); // Return empty string for object
  expect(upperFirst(undefined)).toBe(''); // Return empty string for undefined
});