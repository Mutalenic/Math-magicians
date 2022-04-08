import calculate from '../logic/calculate';

describe('test calculations', () => {
  test('test addition', () => {
    const obj = {
      total: 4,
      next: 6,
      operation: '+',
    };

    const res = calculate(obj, '+');
    expect(parseInt(res.total, 10)).toBe(10);
  });
  test('test AC button', () => {
    const obj = {
      total: 4,
      next: 6,
      operation: null,
    };

    const res = calculate(obj, 'AC');
    expect(res.total).toBe(null);
  });
  test('test subtraction', () => {
    const obj = {
      total: 41,
      next: 1,
      operation: '-',
    };

    const res = calculate(obj, '-');
    expect(parseInt(res.total, 10)).toBe(40);
  });

  test('test multiplication', () => {
    const obj = {
      total: 2,
      next: 2,
      operation: 'x',
    };

    const res = calculate(obj, 'x');
    expect(parseInt(res.total, 10)).toBe(4);
  });

  test('test division', () => {
    const obj = {
      total: 8,
      next: 4,
      operation: '÷',
    };

    const res = calculate(obj, '÷');
    expect(parseInt(res.total, 10)).toBe(2);
  });

  test('positive and negative', () => {
    const obj = {
      total: 70,
      next: null,
      operation: null,
    };

    const res = calculate(obj, '+/-');
    expect(parseInt(res.total, 10)).toBe(-70);
  });

  test('test equal', () => {
    const obj = {
      total: 70,
      next: 9,
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(parseInt(res.next, 10)).toBe(NaN);
  });

  test('number', () => {
    const obj = {
      total: '0',
      next: null,
      operation: '+',
    };
    const res = calculate(obj, '54');
    expect(res.next).toBe('54');
  });
});
