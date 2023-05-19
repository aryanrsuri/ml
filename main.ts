// import { linear_model } from "./src/linear_model.ts";
import { LeReLu, ReLu, sigmoid, tanh } from "./src/lib.ts";
import { linear_combination_model } from "./src/linear_combination_model.ts";

function main() {
  // console.lo(linear_model());
  console.log(linear_combination_model(sigmoid));
  console.log(linear_combination_model(ReLu));
  console.log(linear_combination_model(LeReLu));
  console.log(linear_combination_model(tanh));
}

if (import.meta.main) main();
