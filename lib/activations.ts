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

