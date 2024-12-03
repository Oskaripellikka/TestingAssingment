import get from './get.js'

const object = { 'a': [{ 'b': { 'c': 3 } }] };

test('should return the value at the specified path', () => {
  expect(get(object, 'a[0].b.c')).toBe(3);
  expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
});

test('should return default value for non-existing paths', () => {
  expect(get(object, 'a[0].b.d', 'default')).toBe('default');
  expect(get(object, 'a.b.c', 'default')).toBe('default');
});

test('should return default value when object is null or undefined', () => {
  expect(get(null, 'a[0].b.c', 'default')).toBe('default');
  expect(get(undefined, 'a[0].b.c', 'default')).toBe('default');
});

test('should return the default value when the path is an empty string', () => {
  expect(get(object, '', 'default')).toBe('default');
});

test('should handle nested objects correctly', () => {
  const nestedObject = { 'x': { 'y': { 'z': 42 } } };
  expect(get(nestedObject, 'x.y.z')).toBe(42);
  expect(get(nestedObject, 'x.y.a', 'default')).toBe('default');
});
