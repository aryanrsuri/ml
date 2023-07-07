import {
  activationfn,
  Matrix,
  matrix_alloc,
  matrix_apply,
  matrix_enum,
  matrix_fill,
  matrix_mult,
  matrix_sum,
} from "../lib/algebra.ts";
import * as atf from "../lib/activations.ts";
const XOR_SET = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
];

export type xor_gate = {
  inputs: Matrix;
  w1: Matrix;
  b1: Matrix;
  a1: Matrix;
  w2: Matrix;
  b2: Matrix;
  a2: Matrix;
};

export function forward_prop(m: xor_gate, fn: activationfn) {
  matrix_mult(m.a1, m.inputs, m.w1);
  matrix_sum(m.a1, m.b1);
  matrix_apply(m.a1, fn);
  matrix_mult(m.a2, m.a1, m.w2);
  matrix_sum(m.a2, m.b2);
  matrix_apply(m.a2, fn);
  return m.a2.data;
}

export function cost(m: xor_gate, train_in: Matrix, train_out: Matrix) {
  if (train_in.m !== train_out.m) {
    throw new Error(`matrix spaces unequal`);
  }

  let cost = 0;
  for (let i = 0; i < train_in.m; i++) {
    for (let j = 0; j < train_in.n; j++) {
    }
  }
}

export function xor_model() {
  let m: xor_gate = {
    inputs: {
      m: 1,
      n: 2,
      data: [0, 1],
    },
    w1: matrix_alloc(2, 2),
    w2: matrix_alloc(2, 1),
    b1: matrix_alloc(1, 2),
    b2: matrix_alloc(1, 1),
    a1: matrix_alloc(1, 2),
    a2: matrix_alloc(1, 1),
  };

  matrix_fill(m.w1, Math.random());
  matrix_fill(m.b1, Math.random());
  matrix_fill(m.w2, Math.random());
  matrix_fill(m.b2, Math.random());

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const [pos] = matrix_enum(m.inputs, 0, 0);
      const [pos2] = matrix_enum(m.inputs, 0, 1);
      m.inputs.data[pos] = i;
      m.inputs.data[pos2] = j;
      forward_prop(m, atf.sigmoid);
      const x = forward_prop(m, atf.sigmoid);
      console.log(`${i} ^ ${j}: ${x}`);
    }
  }

  return 1;
}

// 1:41:10
