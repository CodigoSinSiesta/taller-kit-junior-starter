// Simula dos mesas y compara lo cobrado con el informe de caja.
import { euros } from "../src/dinero.js";
import { informeCaja } from "../src/informe.js";
import { crearPedido, listarPedidos } from "../src/pedido.js";

const mesa = [{ id: "cafe" }, { id: "croissant" }, { id: "te" }];
crearPedido({ items: mesa });
crearPedido({ items: mesa });

const cobrado = listarPedidos().reduce((suma, pedido) => suma + pedido.total, 0);

console.log(`Suma de los tickets: ${euros(cobrado)}`);
console.log(`Informe de caja:     ${euros(informeCaja(listarPedidos()).total)}`);
