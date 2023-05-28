/**
 * Bound output signal to sigmoid
 * @param {number} x signal
 * @returns {number} sigmoid(x) R [0, 1]
 */
export const sigmoid = (x: number): number => {
  return 1 / (1 + Math.exp(-x));
};

/**
 * Bound output signal to rectified linear unit (ReLu)
 * @param {number} x signal
 * @returns {number} x < 0: 0 ? x
 */

export const ReLu = (x: number): number => {
  if (x < 0) {
    return 0;
  }
  return x;
};

/**
 * Bound output signal to leaky rectified linear unit (LeReLu)
 * @param {number} x signal
 * @returns {number} x < 0: exp(x) ? x
 */

export const LeReLu = (x: number): number => {
  if (x < 0) {
    return Math.exp(x);
  }
  return x;
};

/**
 * Bound output signal to hyperbolic tangent function
 * @param {number} x signal
 * @returns {number} tanh(x) R [-1, 1]
 */

export const tanh = (x: number): number => {
  return Math.tanh(x);
};

/**
 * Computes probability distribution of signal vector
 * @param {number} v signal vector
 * @returns {number} (exp(x) / sum^K_0(exp(x)))
 */

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
