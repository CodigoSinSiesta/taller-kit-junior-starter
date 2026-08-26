import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { crearServidor } from "../src/api.js";

const servidor = crearServidor();
let url;

before(async () => {
  await new Promise((listo) => servidor.listen(0, listo));
  url = `http://localhost:${servidor.address().port}`;
});

after(() => servidor.close());

test("GET /carta devuelve los productos", async () => {
  const carta = await (await fetch(`${url}/carta`)).json();
  assert.ok(carta.some((producto) => producto.id === "cafe"));
});

test("POST /pedidos crea un pedido", async () => {
  const respuesta = await fetch(`${url}/pedidos`, {
    method: "POST",
    body: JSON.stringify({ items: [{ id: "te" }] }),
  });
  assert.equal(respuesta.status, 201);
  assert.equal((await respuesta.json()).total, 160);
});

test("un pedido no válido devuelve 400", async () => {
  const respuesta = await fetch(`${url}/pedidos`, { method: "POST", body: "{}" });
  assert.equal(respuesta.status, 400);
});
