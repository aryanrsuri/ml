export const TRAINING_SET = [
  [1, 2],
  [2, 4],
  [4, 8],
  [10, 20],
];

export function ml_linear() {
  const rand_number: number = Math.random() * 10;

  function cost(res: [number[]]): number {
    let cost = 0;
    for (let i = 0; i < res.length; i++) {
      const dist = res[i][0] - res[i][1];
      cost += dist * dist;
    }
    return cost / res.length;
  }

  function linear_combination(rand_number: number) {
    const res: [number[]] = [[0, 0]];
    for (let i = 0; i < TRAINING_SET.length; i++) {
      const x = TRAINING_SET[i][0];
      const y = x * rand_number;
      const exp = TRAINING_SET[i][1];
      res.push([y, exp]);
    }
    return res;
  }

  console.log(`random weight generated is: ${rand_number}`);
  const lc_result = linear_combination(rand_number);
  console.log(cost(lc_result));
}

ml_linear();
