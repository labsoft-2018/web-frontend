import { factorial } from './my-logic';

describe('factorial', () => {
  it ('calculates correctly for positive numbers', () => {
    expect(factorial(2)).toBe(2)
    expect(factorial(10)).toBe(3628800)
    expect(factorial(150)).toBe(5.7133839564458505e+262)
  })

  it ('calculates correctly for 1', () => {
    expect(factorial(1)).toBe(1)
  })

  it ('calculates correctly for 0', () => {
    expect(factorial(0)).toBe(1)
  })

  it ('returns null for negatives', () => {
    expect(factorial(-1)).toBe(null)
  })
})
