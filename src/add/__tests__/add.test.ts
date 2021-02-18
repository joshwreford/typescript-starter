import { add } from '../add';

describe('add()', () => {
  it('should add two numbers together', () => {
    expect(add(1, 3)).toBe(4);
  });
  it('should add three numbers together', () => {
    expect(add(1, 3, 2)).toBe(6);
  });
});
