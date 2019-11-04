import { formatDate } from './index';

describe('formatDate(date)', () => {
  test('returns a propertly formatted string', () => {
    const date = new Date();
    expect(formatDate(date)).toEqual(
      expect.stringMatching(/^\d\d\/\d\d\/\d\d\d\d$/)
    );
  });
});
