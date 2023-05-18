export function sigmoid(val: number): number {
  return 1 / (1 + Math.exp(-val));
}
