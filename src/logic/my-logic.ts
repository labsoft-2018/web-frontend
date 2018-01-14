export const factorial = (x: number): number | null => {
  if (x < 0) { return null }
  if (x === 0) { return 1 }
  return x * factorial(x - 1)
}
