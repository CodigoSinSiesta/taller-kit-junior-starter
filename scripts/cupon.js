// Sirve tres cafés: uno con cupón entre dos sin cupón.
import { euros } from "../src/dinero.js";
import { crearPedido } from "../src/pedido.js";

const cafe = [{ id: "cafe" }];

console.log(`Sin cupón:         ${euros(crearPedido({ items: cafe }).total)}`);
console.log(`Con cupón CAFE10:  ${euros(crearPedido({ items: cafe, cupon: "CAFE10" }).total)}`);
console.log(`Otra vez sin cupón: ${euros(crearPedido({ items: cafe }).total)}`);
