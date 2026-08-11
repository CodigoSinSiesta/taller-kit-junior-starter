import { test } from "node:test";
import assert from "node:assert/strict";
import { aplicarCupon } from "../src/cupones.js";

test("aplica el descuento del cupón", () => {
  assert.equal(aplicarCupon({ precio: 200 }, "CAFE10").precio, 180);
});

test("rechaza un cupón desconocido", () => {
  assert.throws(() => aplicarCupon({ precio: 200 }, "GRATIS"), /no válido/);
});
