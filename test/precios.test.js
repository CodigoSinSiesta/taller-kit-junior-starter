import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularLinea, sumarLineas } from "../src/precios.js";

test("calcula base, IVA y total de una línea", () => {
  const linea = calcularLinea({ id: "x", nombre: "X", precio: 200 }, 2);
  assert.deepEqual(linea, { id: "x", nombre: "X", cantidad: 2, base: 400, iva: 40, total: 440 });
});

test("el IVA del pedido es la suma del IVA de cada línea", () => {
  const lineas = [
    calcularLinea({ id: "a", nombre: "A", precio: 135 }, 1),
    calcularLinea({ id: "b", nombre: "B", precio: 125 }, 1),
    calcularLinea({ id: "c", nombre: "C", precio: 145 }, 1),
  ];
  assert.deepEqual(sumarLineas(lineas), { base: 405, iva: 42, total: 447 });
});
