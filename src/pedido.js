import { buscarProducto } from "./carta.js";
import { aplicarCupon } from "./cupones.js";
import { calcularLinea, sumarLineas } from "./precios.js";
import { reservar } from "./stock.js";

let pedidos = [];

export function crearPedido({ items, cupon }) {
  if (!items?.length) throw new Error("El pedido está vacío");

  const lineas = items.map(({ id, cantidad = 1 }) => {
    reservar(id, cantidad);
    const producto = buscarProducto(id);
    return calcularLinea(cupon ? aplicarCupon(producto, cupon) : producto, cantidad);
  });
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
