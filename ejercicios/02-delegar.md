# Ejercicio 2 · Delega el primer ticket

**15 minutos.** Vas a hacer lo más cómodo: dejar que el agente trabaje por ti. Después, tu responsable pasa por tu mesa.

## 1. Mira el problema

Lee [`tickets/TICKET-101.md`](../tickets/TICKET-101.md) y reprodúcelo:

```bash
npm run caja
```

## 2. Delégalo

Abre OpenCode, comprueba que estás en el agente `build` y pídele:

```text
Resuelve tickets/TICKET-101.md
```

## 3. Comprueba que está arreglado

```bash
npm run caja
```

```bash
npm test
```

Las dos cifras deben coincidir y los tests, seguir en verde.

## 4. Cierra OpenCode

No leas qué ha cambiado. Es lo que pasa cuando se delega con prisa.

## 5. El examen

Sin agente y sin mirar el código, responde en papel:

1. ¿Qué estaba mal? Explícalo con tus palabras.
2. ¿Por qué el IVA se calcula por línea? ¿Quién lo exige?
3. ¿Qué commit introdujo el problema y por qué se hizo así?
4. ¿Por qué no lo detectaron los tests? ¿Qué test añadirías?

Puntúate tú: una por pregunta. Ahora busca las respuestas que te falten con `git log`, `git diff` y `docs/decisiones.md`.

Guarda tu arreglo:

```bash
git add -A && git commit -m "Resuelve el TICKET-101"
```

Siguiente: [monta tu tutor](03-tutor.md).
