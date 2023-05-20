export const sigmoid = (x: number): number => {
  return 1 / (1 + Math.exp(-x));
};

export const ReLu = (x: number): number => {
  if (x < 0) {
    return 0;
  }
  return x;
};

export const LeReLu = (x: number): number => {
  if (x < 0) {
    return Math.exp(x);
  }
  return x;
};

export const tanh = (x: number): number => {
  return Math.tanh(x);
};

export const softmax = (v: number[]): number[] => {
  const prob_vector: number[] = [];
  let sum_exp = 0;
  for (let i = 0; i < v.length; i++) {
    sum_exp += Math.exp(v[i]);
  }

  for (let i = 0; i < v.length; i++) {
    prob_vector.push(Math.exp(v[i]) / sum_exp);
  }

  return prob_vector;
};

/**
 * Struct to represent Matrix
 * @interface Matrix
 */
export interface Matrix {
  m: number;
  n: number;
  data: number[];
}

/**
 * Computes the element of the matrix at position (m, n)
 *
 * @param {Matrix} a - Matrix
 *
 * @param {number} m - row
 *
 * @param {number} n - cols
 *
 * @returns {number} element at given tuple position
 */
const matrix_enum = (a: Matrix, m: number, n: number): number[] => {
  const pos = (m) * (a).n + (n);
  const elem = (a).data[pos];
  return [pos, elem];
};

/**
 * Initialises a new Matrix
 * @param {number} m
 * @param {number} n
 * @returns {Matrix} new matrix
 */
export const matrix_alloc = (m: number, n: number): Matrix => {
  const zeros = Array(m * n).fill(0);
  return {
    m: m,
    n: n,
    data: zeros,
  };
};

/**
 * Calculates the product of two matrices
 * @param {Matrix} c
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {Matrix}
 */
export const matrix_mult = (c: Matrix, a: Matrix, b: Matrix): Matrix => {
  for (let i = 0; i < a.data.length; i++) {
    console.log(i);
  }
};

/**
 * Calculates the sum of two matrices
 * @param {Matrix} c
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {Matrix}
 */
export const matrix_sum = (c: Matrix, a: Matrix, b: Matrix): Matrix => {
  for (let i = 0; i < a.data.length; i++) {
    console.log(i);
  }
};

/**
 * Fill each position of matrix with element x
 * @param {Matrix} a
 * @param {number} x
 * @return {Matrix} a matrix
 */
export const matrix_fill = (a: Matrix, x: number): Matrix => {
  for (let i = 0; i < a.m; i++) {
    for (let j = 0; j < a.n; j++) {
      const [p, _] = matrix_enum(a, i, j);
      a.data[p] = x;
    }
  }

  return a;
};

/**
 * Render matrix in m x n format
 * @param {Matrix} a
 * @returns {void}
 */
export const matrix_render = (a: Matrix): void => {
  let render = "";
  for (let i = 0; i < a.m; i++) {
    for (let j = 0; j < a.n; j++) {
      const [_, elem] = matrix_enum(a, i, j);
      render += elem + " ";
    }
    render += "\n";
  }

  console.log(render);
};
