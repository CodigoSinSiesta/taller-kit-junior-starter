import { porcentaje } from "./dinero.js";

export const TIPO_IVA = 10;

// El IVA se calcula línea a línea: ver docs/decisiones.md.
export function calcularLinea(producto, cantidad) {
  const base = producto.precio * cantidad;
  const iva = porcentaje(base, TIPO_IVA);
  return { id: producto.id, nombre: producto.nombre, cantidad, base, iva, total: base + iva };
}

export function sumarLineas(lineas) {
  const base = lineas.reduce((suma, linea) => suma + linea.base, 0);
  const iva = lineas.reduce((suma, linea) => suma + linea.iva, 0);
  return { base, iva, total: base + iva };
}
