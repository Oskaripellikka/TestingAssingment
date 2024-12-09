import filter from './filter.js';

describe('Testing module that filters arrays', () => {
  test('testing if filters through array containing userdata', () => {
    const users = [
      { user: 'Barney', active: true },
      { user: 'Fred', active: false },
      { user: 'Tim', active: false },
      { user: 'Bob', active: true },
      { user: 'Sam', active: false },
      { user: 'Ben', active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'Barney', active: true },
      { user: 'Bob', active: true },
    ]);
  });

  test('Testing that can filter items by attributes', () => {
    const items = [
      { item: 'banana', type: ['food', 'fruit'] },
      { item: 'phone', type: ['electronics', 'mobile'] },
      { item: 'chicken', type: ['food', 'meat'] },
      { item: 'beef', type: ['food', 'meat'] },
      { item: 'washing machine', type: ['electronics', 'large'] },
      { item: 'freezer', type: ['electronics', 'large'] },
    ];

    const result = filter(items, ({ type }) => type.includes('meat'));
    expect(result).toEqual([
      { item: 'chicken', type: ['food', 'meat'] },
      { item: 'beef', type: ['food', 'meat'] },
    ]);
  });;

  test('Should return an empty nested array if input array is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });

  test('Should handle an empty nested array gracefully', () => {
    const result = filter([], () => true);
    expect(result).toEqual([[]]);
  });
});