import {
  Matrix,
  matrix_alloc,
  matrix_fill,
  matrix_mult,
  matrix_render,
  matrix_sum,
} from "./lib.ts";

export function general_model() {
  const x: Matrix = matrix_alloc(2, 1);
  const y: Matrix = matrix_alloc(1, 2);
  const z: Matrix = matrix_alloc(4, 4);

  return [
    matrix_render(x),
    matrix_render(y),
    matrix_render(z),
  ];
}
