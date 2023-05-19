export declare type Matrix = number[][];
export declare const sigmoid: (x: number) => number;
export declare const ReLu: (x: number) => number;
export declare const LeReLu: (x: number) => number;
export declare const tanh: (x: number) => number;
export declare const softmax: (v: number[]) => number[];
export declare const init_matrix: (
  m: number,
  n: number,
  init_val?: number,
) => Matrix;
export declare const dot_product: (m: Matrix, n: Matrix) => void;

