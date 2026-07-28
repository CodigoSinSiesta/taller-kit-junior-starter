import { beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { crearPedido, listarPedidos, reiniciarPedidos } from "../src/pedido.js";
import { reiniciarStock } from "../src/stock.js";

beforeEach(() => {
  reiniciarPedidos();
  reiniciarStock();
});

test("crea un pedido con sus líneas y totales", () => {
  const pedido = crearPedido({ items: [{ id: "cafe" }, { id: "croissant" }, { id: "te" }] });
  assert.equal(pedido.base, 405);
  assert.equal(pedido.iva, 42);
  assert.equal(pedido.total, 447);
});

test("guarda los pedidos en orden", () => {
  crearPedido({ items: [{ id: "cafe" }] });
  crearPedido({ items: [{ id: "te" }] });
  assert.deepEqual(listarPedidos().map((p) => p.id), [1, 2]);
});

test("rechaza un pedido vacío", () => {
  assert.throws(() => crearPedido({ items: [] }), /vacío/);
});

test("no vende lo que no hay", () => {
  assert.throws(() => crearPedido({ items: [{ id: "croissant", cantidad: 99 }] }), /stock/i);
});
