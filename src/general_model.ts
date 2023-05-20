import * as m from "../lib/algebra.ts";
import * as atf from "../lib/activations.ts";

export function general_model(activation_function = atf.sigmoid) {
  const x: m.Matrix = m.matrix_alloc(2, 1);
  const y: m.Matrix = m.matrix_alloc(1, 2);
  const z: m.Matrix = m.matrix_alloc(4, 4);

  m.matrix_render(x);
  m.matrix_render(y);
  m.matrix_render(z);
  return 0;
}
