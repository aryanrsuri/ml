import { epsilon, gen, k } from "./config.ts";
import { init_matrix, LeReLu, ReLu, sigmoid, softmax, tanh } from "./lib.ts";

export function matrix_linear_model(
  activation_function = sigmoid,
): number[][] {
  const randn = Math.random();

  return init_matrix(10, 2, randn);
}
