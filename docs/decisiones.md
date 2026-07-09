# Decisiones

## Importes en céntimos enteros

Los decimales de JavaScript acumulan errores: `0.1 + 0.2` no da `0.3`. Por eso los importes se guardan en céntimos y solo
se convierten a euros para enseñarlos.

## El IVA se calcula por línea

La gestoría exige que el IVA de cada línea aparezca en el ticket, redondeado al céntimo, y que el total del ticket sea la
suma de esas líneas. Calcularlo sobre el total del pedido daría otra cifra: 1,35 €, 1,25 € y 1,45 € suman 42 céntimos de
IVA por líneas y 41 sobre el total.

Lo que se declara a Hacienda es la suma de los tickets, así que cualquier otro cálculo debe partir de esas líneas.
