import sum from '../src/sum';

test('should sum two numbers', () => {
  // Arrange
  const a = 1;
  const b = 2;
  const expected = 3;
  // Act
  const result = sum(a, b);
  // Assert
  expect(result).toBe(expected);
  expect(result).not.toBe(4);
});
