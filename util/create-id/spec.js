import { createId } from './index';

describe('createId()', () => {
  test('returns a string that contains digits', () => {
    expect(createId()).toEqual(expect.stringMatching(/\d+/));
  });

  test('returns a string that does not contain non-digits', () => {
    expect(createId()).toEqual(expect.not.stringMatching(/\D+/));
  });

  test('returns different strings when called repeatedly', () => {
    expect(createId()).not.toBe(createId());
  });
});
