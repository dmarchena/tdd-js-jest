import fibonacci from '../src/fibonacci';

describe('Fibonacci should', () => {
  it('return zero if receive zero', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('return one if receive one', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('return one if receive two', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('returns two if receive three', () => {
    expect(fibonacci(3)).toBe(2);
  });

  it('returns three if receive four', () => {
    expect(fibonacci(4)).toBe(3);
  });
});
