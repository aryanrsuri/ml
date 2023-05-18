import { linear_combination_model } from "./src/linear_combination_model.ts";
import { linear_model } from "./src/linear_model.ts";

function main() {
  console.log(linear_model());
  console.log(linear_combination_model());
}
if (import.meta.main) main();
