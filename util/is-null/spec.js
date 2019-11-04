import { isNull } from './index';

describe('isNull(value)', () => {
  test('returns true when passed null', () => {
    const value = null;
    expect(isNull(value)).toBe(true);
  });

  test('returns false when passed a value other than null', () => {
    const value = 'foo';
    expect(isNull(value)).toBe(false);
  });
});
