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
  expect(toNumber('0x1G')).toBe(NaN); // Invalid hex
  expect(toNumber(null)).toBe(0); // Null should return 0
  expect(toNumber(undefined)).toBe(NaN);
  expect(toNumber({})).toBe(NaN); // Object should return NaN
  expect(toNumber(Symbol('symbol'))).toBe(NaN); // Symbol should return NaN
});

test('should handle objects without valueOf as a function', () => {
  const obj = { toString: () => '123' }; // No valueOf method
  expect(toNumber(obj)).toBe(123); // Should use toString
});

test('should handle invalid hexadecimal strings', () => {
  expect(toNumber('-0x1G')).toBe(NaN);
  expect(toNumber('0x')).toBe(NaN); // Just '0x' is invalid
});

test('should handle non-object returns from valueOf', () => {
  const custom = {
    valueOf: () => 42,
  };
  expect(toNumber(custom)).toBe(42); // Should use valueOf result
});

test('should return 0 when input is 0 or -0', () => {
  expect(toNumber(0)).toBe(0);
  expect(toNumber(-0)).toBe(-0); // Ensuring -0 remains -0
});

test('should handle objects with conflicting valueOf and toString', () => {
  const custom = {
    valueOf: () => '42',
    toString: () => '43',
  };
  expect(toNumber(custom)).toBe(42); // Should prioritize valueOf
});

test('should differentiate null and undefined', () => {
  expect(toNumber(null)).toBe(0); // Null -> 0
  expect(toNumber(undefined)).toBe(NaN); // Undefined -> NaN
});