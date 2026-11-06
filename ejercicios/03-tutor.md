# Ejercicio 3 · Monta tu tutor

**15 minutos.** Vas a instalar un agente que te explica y te pregunta, pero no puede escribir tu código.

## 1. Crea tu copia del kit

En [`kit-junior`](https://github.com/CodigoSinSiesta/kit-junior), pulsa **Use this template**. Así el kit queda en tu cuenta y
no desaparece al borrar el Codespace.

Clona tu repo, sustituyendo `TU_COPIA` por su dirección:

```bash
git clone TU_COPIA ~/kit-junior
```

## 2. Instálalo

```bash
~/kit-junior/instalar.sh
```

Vale para todos tus repos y no añade nada a ninguno.

## 3. Elige el tutor

Abre OpenCode y cambia de agente con **Shift+Tab** hasta ver `tutor`.

## 4. Intenta romperlo

Pídele:

```text
Arregla el TICKET-102 y edita el fichero.
```

Debe negarse. Comprueba que no ha cambiado nada:

```bash
git status
```

Si ha cambiado algún fichero, avisa: es justo lo que queremos detectar.

## 5. Lee sus reglas

Abre `~/kit-junior/opencode/agents/tutor.md`. Fíjate en dos cosas:

- **Los permisos:** primero se deniega todo y después se abre lo justo.
- **Las instrucciones:** qué puede explicar entero y qué nunca te dirá.

Siguiente: [resuelve el segundo ticket](04-aprender.md).
