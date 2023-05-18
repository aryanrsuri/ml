const TRAINING_SET = [
  [1, 2],
  [2, 4],
  [4, 8],
  [10, 20],
];
const epsilon = 1e-3;
const k = 1e-3;
const gen = 5000;

export function linear_model(): number {
  let w = Math.random() * 10;
  let b = Math.random() * 1;

  function cost(w: number, b: number) {
    let cost = 0;
    for (let i = 0; i < TRAINING_SET.length; i++) {
      const x: number = TRAINING_SET[i][0];
      const linf: number = x * w;
      const expected: number = TRAINING_SET[i][1];
      const distance: number = linf - expected;
      cost += distance * distance;
    }
    return cost /= TRAINING_SET.length;
  }

  for (let i = 0; i < gen; i++) {
    const cache = cost(w, b);
    const dw = (cost(w + epsilon, b) - cache) / epsilon;
    const db = (cost(w, b + epsilon) - cache) / epsilon;
    w -= k * dw;
    b -= k * db;
  }

  return cost(w, b);
}
