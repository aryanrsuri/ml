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

// Linear algebra support functions
export type Matrix = number[][];
export const init_matrix = (m: number, n = 1, init_val = 0): Matrix => {
  const matrix: Matrix = [];
  for (let i = 0; i < m; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      row.push(init_val);
    }

    matrix.push(row);
  }

  return matrix;
};

export const dot_product = (m: Matrix, n: Matrix): number | Error => {
  let dot_product = 0;
  if (m.length !== n.length) {
    return new Error(`m and n matrices un-equal space!`);
  }
  for (let i = 0; i < m.length; i++) {
    const p: number = m[i][0] * n[i][0];
    console.log(m[i][0], n[i][0]);
    dot_product += p;
  }

  return dot_product;
};

/** initiziale matrix of m x n space with some std. value
 * @param 'm'  {number}
 * @param 'n' {number}
 * @param 'init_val' {number}
 * @returns 'matrix' {number[][]}
 */
