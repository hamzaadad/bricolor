import { greater } from '../src/main';


describe('count greater than 50', () => {
  const arrayExmaple = [40, 20, 430, 56, 32, 564];
  const count = 3;
  it('should fail', () => {
    const arrayCount = greater(arrayExmaple);
    expect(arrayCount).toBe(count + 1);

  })
  it("return $count giving $arrayExmaple", () => {
    const arrayCount = greater(arrayExmaple);
    expect(arrayCount).toBe(count);
  })
})
