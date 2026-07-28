import { beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { disponible, reiniciarStock, reservar } from "../src/stock.js";

beforeEach(reiniciarStock);

test("reservar descuenta del stock", () => {
  const antes = disponible("cafe");
  reservar("cafe", 2);
  assert.equal(disponible("cafe"), antes - 2);
});

test("no reserva más de lo disponible", () => {
  assert.throws(() => reservar("cafe", 1000), /Sin stock/);
});
