import { buscarProducto } from "./carta.js";
import { calcularLinea, sumarLineas } from "./precios.js";

let pedidos = [];

export function crearPedido({ items }) {
  if (!items?.length) throw new Error("El pedido está vacío");

  const lineas = items.map(({ id, cantidad = 1 }) => calcularLinea(buscarProducto(id), cantidad));
  const pedido = { id: pedidos.length + 1, lineas, ...sumarLineas(lineas) };
  pedidos.push(pedido);
  return pedido;
}

export function listarPedidos() {
  return pedidos;
}

export function reiniciarPedidos() {
  pedidos = [];
}
