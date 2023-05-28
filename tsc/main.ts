import { sigmoid } from "./lib/activations.ts";
import { general_model, xor_model } from "./src/general_model.ts";

function main() {
  // console.lo(linear_model());
  // console.log(linear_combination_model(sigmoid));
  // console.log(linear_combination_model(ReLu));
  // console.log(linear_combination_model(LeReLu));
  // console.log(linear_combination_model(tanh));
  console.log(xor_model(sigmoid));
}

if (import.meta.main) main();
