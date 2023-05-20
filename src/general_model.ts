import * as m from "../lib/algebra.ts";
import * as atf from "../lib/activations.ts";

export function general_model(activation_function = atf.sigmoid) {
  const x: m.Matrix = m.matrix_alloc(2, 1);
  let xx: m.Matrix = m.matrix_alloc(2, 1);
  m.matrix_fill(x, 2);
  m.matrix_fill(xx, 3);
  const y: m.Matrix = m.matrix_alloc(1, 2);
  m.matrix_fill(y, 1);
  let d: m.Matrix = m.matrix_alloc(2, 2);
  d = m.matrix_mult(d, x, y);
  xx = m.matrix_sum(xx, x);
  return [m.matrix_render(d), m.matrix_render(xx)];
}
