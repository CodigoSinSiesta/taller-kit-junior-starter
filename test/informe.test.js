import { test } from "node:test";
import assert from "node:assert/strict";
import { informeCaja } from "../src/informe.js";

test("resume los pedidos del día", () => {
  const pedidos = [
    { base: 200, iva: 20, total: 220 },
    { base: 300, iva: 30, total: 330 },
  ];
  assert.deepEqual(informeCaja(pedidos), { pedidos: 2, base: 500, iva: 50, total: 550 });
});

test("un día sin pedidos da cero", () => {
  assert.deepEqual(informeCaja([]), { pedidos: 0, base: 0, iva: 0, total: 0 });
});
