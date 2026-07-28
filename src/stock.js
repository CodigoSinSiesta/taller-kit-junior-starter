import { listarCarta } from "./carta.js";

let stock;

export function reiniciarStock() {
  stock = new Map(listarCarta().map((producto) => [producto.id, producto.stock]));
}

reiniciarStock();

export function disponible(id) {
  return stock.get(id) ?? 0;
}

export function reservar(id, cantidad) {
  if (disponible(id) < cantidad) throw new Error(`Sin stock de ${id}`);
  stock.set(id, disponible(id) - cantidad);
}
