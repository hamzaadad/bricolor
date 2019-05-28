import { greater } from '../src/main';


describe('count greater than 50', () => {
  
  it('should be greated than 3', () => {
    const arrayExmaple = [51, 50, 430, 56, 50.9, 49.999999999999, 564];
    const minCount = 3;
    const arrayCount = greater(arrayExmaple);
    expect(arrayCount).toBeGreaterThan(minCount);

  })

  it('should not bet 6', () => {
    const arrayExmaple = [51, 50, 430, 56, 50.9, 49.999999999999, 564];
    const fasleCount = 6;
    const arrayCount = greater(arrayExmaple);
    expect(arrayCount).not.toBe(fasleCount);

  })
  it("return 3 giving $arrayExmaple", () => {
    const arrayExmaple = [40, 20, 430, 56, 32, 564];
    const exprecTedCount = 3;
    const arrayCount = greater(arrayExmaple);
    expect(arrayCount).toBe(exprecTedCount);
  })
})
