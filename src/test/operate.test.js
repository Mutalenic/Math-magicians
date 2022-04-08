import operate from '../logic/operate';

describe('test operations', () => {
  test('test addition', () => {
    expect(operate(6, 7, '+')).toBe('13');
  });
  test('test subtraction', () => {
    expect(operate(10, 1, '-')).toBe('9');
  });
  test('test multiplication', () => {
    expect(operate(10, 1, 'x')).toBe('10');
  });
  test('test division', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });
  test('test percentage', () => {
    expect(operate(9, 2, '%')).toBe('1');
  });

  test('divide by 0', () => {
    expect(operate(9, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
