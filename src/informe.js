import { porcentaje } from "./dinero.js";
import { TIPO_IVA } from "./precios.js";

export function informeCaja(pedidos) {
  const base = pedidos.reduce((suma, pedido) => suma + pedido.base, 0);
  const iva = porcentaje(base, TIPO_IVA);
  return { pedidos: pedidos.length, base, iva, total: base + iva };
}
