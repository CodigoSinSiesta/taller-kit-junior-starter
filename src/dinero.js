// Todos los importes van en céntimos enteros.
export function euros(centimos) {
  return `${(centimos / 100).toFixed(2).replace(".", ",")} €`;
}
