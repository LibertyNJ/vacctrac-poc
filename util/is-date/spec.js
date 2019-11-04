import { isDate } from './index';

describe('isDate(value)', () => {
  test('returns true when passed a Date object', () => {
    const value = new Date();
    expect(isDate(value)).toBe(true);
  });

  test('returns false when passed a value other than a Date object', () => {
    const value = 'foo';
    expect(isDate(value)).toBe(false);
  });
});
