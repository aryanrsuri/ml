export const TRAINING_SET = [
  [1, 2],
  [2, 4],
  [4, 8],
  [10, 20],
];

export function linear_model() {
  const epsilon = 1e-3;
  const k = 1e-3;
  const gen = 500;
  let w = 7.5;

  function cost(w: number) {
    let cost = 0;
    for (let i = 0; i < TRAINING_SET.length; i++) {
      const x: number = TRAINING_SET[i][0];
      const f: number = x * w;
      const expected: number = TRAINING_SET[i][1];
      const distance: number = f - expected;
      cost += distance * distance;
    }
    return cost / TRAINING_SET.length;
  }

  for (let i = 0; i < gen; i++) {
    console.log(cost(w));
    const dCost = (cost(w + epsilon) - cost(w)) / epsilon;
    w -= k * dCost;
    console.log(cost(w));
  }
}
