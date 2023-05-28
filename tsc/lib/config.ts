export const OR_TRAINING_SET = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];

export const AND_TRAINING_SET = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

export const NAND_TRAINING_SET = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 0],
];

export const epsilon = 1e-3;
export const k = 1e-1;
export const gen = 1_000_000;
