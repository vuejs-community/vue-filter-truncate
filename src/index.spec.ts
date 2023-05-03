import { describe, expect, it } from 'vitest';

import { truncate } from './index.ts';

describe('truncate', () => {
  it('This is sample => This is sample', () => {
    const truncateString = truncate('This is sample', 20);

    expect(truncateString).toBe('This is sample');
  });

  it('This is sample => This …', () => {
    const truncateString = truncate('This is sample', 4);

    expect(truncateString).toBe('This …');
  });
});
