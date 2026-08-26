import { createServer } from "node:http";
import { listarCarta } from "./carta.js";
import { crearPedido, listarPedidos } from "./pedido.js";

async function leerJson(peticion) {
  let cuerpo = "";
  for await (const trozo of peticion) cuerpo += trozo;
  return JSON.parse(cuerpo || "{}");
}

function responder(respuesta, estado, datos) {
  respuesta.writeHead(estado, { "content-type": "application/json" });
  respuesta.end(JSON.stringify(datos));
}

export function crearServidor() {
  return createServer(async (peticion, respuesta) => {
    const ruta = `${peticion.method} ${peticion.url}`;
    try {
      if (ruta === "GET /carta") return responder(respuesta, 200, listarCarta());
      if (ruta === "GET /pedidos") return responder(respuesta, 200, listarPedidos());
      if (ruta === "POST /pedidos") return responder(respuesta, 201, crearPedido(await leerJson(peticion)));
      responder(respuesta, 404, { error: "No existe esa ruta" });
    } catch (error) {
      responder(respuesta, 400, { error: error.message });
    }
  });
}
