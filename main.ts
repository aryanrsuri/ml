// import { LeReLu, ReLu, sigmoid, tanh } from "./src/lib.ts";
import { general_model } from "./src/general_model.ts";

function main() {
  // console.lo(linear_model());
  // console.log(linear_combination_model(sigmoid));
  // console.log(linear_combination_model(ReLu));
  // console.log(linear_combination_model(LeReLu));
  // console.log(linear_combination_model(tanh));
  console.log(general_model());
}

if (import.meta.main) main();
