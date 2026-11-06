# Ejercicio 1 · Prepara tu entorno

**15 minutos.** Al acabar, el agente responde dentro del proyecto.

Si hiciste la preparación previa, solo te falta el paso 4.

## 1. Abre el proyecto

Elige un camino:

- **En el navegador:** pulsa **Code → Codespaces → Create codespace**.
- **En tu ordenador:** con Docker en marcha, abre el repo en VS Code y elige **Reopen in Container**.

Espera a ver `Entorno listo`.

## 2. Conecta OpenCode con Copilot

```bash
opencode
```

Dentro de OpenCode:

1. Escribe `/connect`, elige **GitHub Copilot** y sigue los pasos para entrar con tu cuenta.
2. Escribe `/models` y elige un modelo.
3. Escribe `Responde solo: funciona`.

Sal de OpenCode con `Ctrl+C`.

## 3. Comprueba el entorno

```bash
./scripts/validate.sh
```

Tiene que acabar con `Entorno listo para el taller`.

## 4. Conoce el proyecto

Mira tus tickets y el historial, sin agente:

```bash
ls tickets
```

```bash
git log --oneline
```

Si algo falla, avisa antes de seguir. Siguiente: [delega el primer ticket](02-delegar.md).
