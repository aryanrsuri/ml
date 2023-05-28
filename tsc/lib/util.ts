export const mean_squared_error = (x: number[], y: number[]): number => {
  const len = x.length;
  let error = 0;
  for (let i = 0; i < len; i++) {
    error += (x[i] - y[i]) * (x[i] - y[i]);
  }
  return (error / len);
};
