import { epsilon, gen, k } from "./config.ts";
import {
  dot_product,
  init_matrix,
  LeReLu,
  Matrix,
  ReLu,
  sigmoid,
  softmax,
  tanh,
} from "./lib.ts";

export function matrix_linear_model(
  activation_function = sigmoid,
): number | Error {
  const randn = Math.random();

  let m: Matrix = init_matrix(10, 1, randn);
  let n: Matrix = init_matrix(10, 1, 2 * randn);

  return dot_product(m, n);
}
