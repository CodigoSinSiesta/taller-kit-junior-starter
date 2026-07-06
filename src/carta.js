import { readFileSync } from "node:fs";

const carta = JSON.parse(readFileSync(new URL("../datos/carta.json", import.meta.url)));

export function listarCarta() {
  return carta;
}

export function buscarProducto(id) {
  const producto = carta.find((p) => p.id === id);
  if (!producto) throw new Error(`Producto desconocido: ${id}`);
  return producto;
}
