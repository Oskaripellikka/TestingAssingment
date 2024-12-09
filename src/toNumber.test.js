import toNumber from "./toNumber";

test('should return the number when input is a number', () => {
  expect(toNumber(3.2)).toBe(3.2);
  expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  expect(toNumber(Infinity)).toBe(Infinity);
  expect(toNumber(-Infinity)).toBe(-Infinity);
});

test('should convert string representations of numbers to numbers', () => {
  expect(toNumber('3.2')).toBe(3.2);
  expect(toNumber('0')).toBe(0);
  expect(toNumber('42')).toBe(42);
  expect(toNumber('   42   ')).toBe(42); // Test with whitespace
});

test('should handle binary strings', () => {
  expect(toNumber('0b101')).toBe(5);
  expect(toNumber('0B1111')).toBe(15);
  expect(toNumber('0b0')).toBe(0);
  expect(toNumber('0b')).toBe(NaN); // Invalid binary
});

test('should handle octal strings', () => {
  expect(toNumber('0o10')).toBe(8);
  expect(toNumber('0O77')).toBe(63);
  expect(toNumber('0o0')).toBe(0);
  expect(toNumber('0o')).toBe(NaN); // Invalid octal
});

test('should return NaN for invalid inputs', () => {
  expect(toNumber('abc')).toBe(NaN);
  expect(toNumber(null)).toBe(0); // Null should return 0
  expect(toNumber(undefined)).toBe(NaN);
  expect(toNumber({})).toBe(NaN); // Object should return NaN
  expect(toNumber(Symbol('symbol'))).toBe(NaN); // Symbol should return NaN
  expect(toNumber('non-numeric string')).toBe(NaN);
});

test('should handle valid hexadecimal strings', () => {
  expect(toNumber('0x1A')).toBe(26); // Valid hex
  expect(toNumber('0x0')).toBe(0); // Valid hex zero
  expect(toNumber('0x10')).toBe(16); // Valid hex
});

test('should return NaN for bad hexadecimal strings', () => {
  expect(toNumber('0x1G')).toBe(NaN); // Invalid hex
  expect(toNumber('0x')).toBe(NaN); // Invalid hex
  expect(toNumber('0xG1')).toBe(NaN); // Invalid hex
  expect(toNumber('-0x')).toBe(NaN); // Negative hex prefix without digits
});

test('should handle cases where valueOf is not a function or missing', () => {
  const custom1 = {
    valueOf: 42, // valueOf is not a function
    toString: () => '123',
  };
  expect(toNumber(custom1)).toBe(123); // Should fall back to toString

  const custom2 = {
    toString: () => '456', // No valueOf
  };
  expect(toNumber(custom2)).toBe(456); // Should fall back to toString
});

test('should handle non-object returns from valueOf', () => {
  const custom = {
    valueOf: () => 42,
  };
  expect(toNumber(custom)).toBe(42); // Should use valueOf result
});

test('should return 0 when input is 0 or -0', () => {
  expect(toNumber(0)).toBe(0);
  expect(toNumber(-0)).toBe(-0);
});

test('should handle objects with conflicting valueOf and toString', () => {
  const custom = {
    valueOf: () => '42',
    toString: () => '43',
  };
  expect(toNumber(custom)).toBe(42); // Should prioritize valueOf
});

test('should return 0 when input is an object that is equal to 0', () => {
  const objEqualToZero = {
    valueOf: () => 0, // valueOf returns 0
    toString: () => 'not used' // toString is not used in this case
  };
  
  expect(toNumber(objEqualToZero)).toBe(0); // Should return 0
});

test('should return 0 for falsy values', () => {
  expect(toNumber(false)).toBe(0); // Should return 0
  expect(toNumber(null)).toBe(0);
  expect(toNumber([])).toBe(0); // Should return 0
  expect(toNumber('')).toBe(0); // Should return 0
});

