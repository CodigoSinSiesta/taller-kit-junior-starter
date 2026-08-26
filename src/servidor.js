import { crearServidor } from "./api.js";

const puerto = process.env.PORT ?? 3000;

crearServidor().listen(puerto, () => {
  console.log(`Comanda escuchando en http://localhost:${puerto}`);
});
