import memoize from './memoize';

test('should memoize results of a function', () => {
  const func = jest.fn((x) => x * 2);
  const memoized = memoize(func);

  expect(memoized(2)).toBe(4); // First call, computes the result
  expect(func).toHaveBeenCalledTimes(1);

  expect(memoized(2)).toBe(4); // Cached result
  expect(func).toHaveBeenCalledTimes(1); // No additional calls to func
});

test('should use the first argument as the default cache key', () => {
  const func = jest.fn((x) => x * 2);
  const memoized = memoize(func);

  memoized(3);
  expect(memoized.cache.has(3)).toBe(true);
  expect(memoized.cache.get(3)).toBe(6);
});

test('should allow custom resolver for cache keys', () => {
  const func = jest.fn((x, y) => x + y);
  const resolver = (x, y) => `${x},${y}`;
  const memoized = memoize(func, resolver);

  memoized(1, 2);
  expect(memoized.cache.has('1,2')).toBe(true);
  expect(memoized.cache.get('1,2')).toBe(3);

  expect(memoized(1, 2)).toBe(3); // Cached result
  expect(func).toHaveBeenCalledTimes(1);
});

test('should throw an error if func is not a function', () => {
  expect(() => memoize(null)).toThrow(TypeError);
  expect(() => memoize(42)).toThrow(TypeError);
  expect(() => memoize('not a function')).toThrow(TypeError);
});

test('should throw an error if resolver is not a function', () => {
  const func = jest.fn((x) => x * 2);
  expect(() => memoize(func, 42)).toThrow(TypeError);
  expect(() => memoize(func, 'not a function')).toThrow(TypeError);
});

test('should expose the cache as a property', () => {
  const func = jest.fn((x) => x * 2);
  const memoized = memoize(func);

  memoized(2);
  expect(memoized.cache).toBeInstanceOf(Map);

  memoized.cache.set(3, 6);
  expect(memoized(3)).toBe(6); // Uses the manually set cache
  expect(func).toHaveBeenCalledTimes(1); // No call for 3, because it’s cached
});
