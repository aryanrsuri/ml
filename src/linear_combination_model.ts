import { sigmoid } from "./lib.ts";

const OR_TRAINING_SET = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];

const AND_TRAINING_SET = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

const XAND_TRAINING_SET = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];

const epsilon = 1e-3;
const k = 1e-1;
const gen = 1_000_000;

export function linear_combination_model(): number[] {
  const TRAINING_SET = AND_TRAINING_SET;
  let w1 = Math.random() * 10;
  let w2 = Math.random() * 10;
  let b = Math.random() * 10;

  function cost(w1: number, w2: number, b: number) {
    let cost = 0;
    for (let i = 0; i < TRAINING_SET.length; i++) {
      const x1: number = TRAINING_SET[i][0];
      const x2: number = TRAINING_SET[i][1];
      const linf: number = sigmoid((x1 * w1) + (x2 * w2) + b);
      const distance: number = linf - TRAINING_SET[i][2];
      cost += distance * distance;
    }
    return cost /= TRAINING_SET.length;
  }

  for (let i = 0; i < gen; i++) {
    const cache = cost(w1, w2, b);
    const dw1 = (cost(w1 + epsilon, w2, b) - cache) / epsilon;
    const dw2 = (cost(w1, w2 + epsilon, b) - cache) / epsilon;
    const db = (cost(w1, w2, b + epsilon) - cache) / epsilon;
    w1 -= k * dw1;
    w2 -= k * dw2;
    b -= k * db;
  }

  return [w1, w2, b, cost(w1, w2, b)];
}
