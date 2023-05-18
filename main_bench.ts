import { ml_linear } from "./main";

Deno.bench(function ml_linear() {
  ml_linear();
});
