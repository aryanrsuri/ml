import { sigmoid } from "./lib.ts";

const TRAINING_SET = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];
const epsilon = 1e-3;
const k = 1e-3;
const gen = 10000;

export function linear_combination_model(): number {
  let w1 = Math.random() * 10;
  let w2 = Math.random() * 10;
  w1 = w2 = 5;

  function cost(w1: number, w2: number) {
    let cost = 0;
    for (let i = 0; i < TRAINING_SET.length; i++) {
      const x1: number = TRAINING_SET[i][0];
      const x2: number = TRAINING_SET[i][1];
      const linf: number = sigmoid((x1 * w1) + (x2 * w2));
      const distance: number = linf - TRAINING_SET[i][2];
      cost += distance * distance;
    }
    return cost /= TRAINING_SET.length;
  }

  for (let i = 0; i < gen; i++) {
    const cache = cost(w1, w2);
    const dw1 = (cost(w1 + epsilon, w2) - cache) / epsilon;
    const dw2 = (cost(w1, w2 + epsilon) - cache) / epsilon;
    w1 -= k * dw1;
    w2 -= k * dw2;
  }

  return cost(w1, w2);
}
