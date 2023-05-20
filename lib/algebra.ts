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
 * Returns the enumeration of Matrix position (m, n)
 * @param {Matrix} a - Matrix
 * @param {number} m - row
 * @param {number} n - cols
 * @returns {number[]} position index, element value
 */
const matrix_enum = (a: Matrix, m: number, n: number): number[] => {
  const pos = (m) * (a).n + (n);
  const elem = (a).data[pos];
  return [pos, elem];
};

/**
 * Calculates the product of two matrices
 * @param {Matrix} c
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {Matrix}
 */
export const matrix_mult = (
  c: Matrix,
  a: Matrix,
  b: Matrix,
): Matrix => {
  if (a.n !== b.m || c.m !== a.m || c.n !== b.n) {
    throw new Error(`matrix spaces are uequal`);
  }

  for (let i = 0; i < c.m; i++) {
    for (let j = 0; j < c.n; j++) {
      const [pos_c] = matrix_enum(c, i, j);
      for (let k = 0; k < a.n; k++) {
        const [, elem_a] = matrix_enum(a, i, k);
        const [, elem_b] = matrix_enum(b, k, j);
        c.data[pos_c] += elem_a * elem_b;
      }
    }
  }
  return c;
};

/**
 * Calculates the sum of two matrices
 * @param {Matrix} c
 * @param {Matrix} a
 * @returns {Matrix}
 */
export const matrix_sum = (c: Matrix, a: Matrix): Matrix => {
  if (c.m !== a.m || c.n !== a.n) {
    throw new Error(`matrix spaces are unequal`);
  }
  for (let i = 0; i < c.m; i++) {
    for (let j = 0; j < c.n; j++) {
      const [pos_c] = matrix_enum(c, i, j);
      const [_, elem_a] = matrix_enum(a, i, j);
      c.data[pos_c] += elem_a;
    }
  }
  return c;
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
