import { porcentaje } from "./dinero.js";

const CUPONES = { CAFE10: 10, BIENVENIDA: 20 };

export function aplicarCupon(producto, codigo) {
  const descuento = CUPONES[codigo];
  if (!descuento) throw new Error(`Cupón no válido: ${codigo}`);
  return { ...producto, precio: producto.precio - porcentaje(producto.precio, descuento) };
}
