# Ejercicio 1 · Prepara tu entorno

**15 minutos.** Al acabar, el agente responde dentro del proyecto.

Si hiciste la preparación previa, solo te falta el paso 4.

## 1. Abre el proyecto

Elige un camino:

- **En el navegador:** pulsa **Code → Codespaces → Create codespace**.
- **En tu ordenador:** con Docker en marcha, abre el repo en VS Code y elige **Reopen in Container**.

Espera a ver `Entorno listo`.

Si arriba aparece **Modo restringido**, pulsa **Administrar** y después **Confiar en la carpeta y continuar**. Sin eso no
tendrás terminal.

## 2. Conecta OpenCode con Copilot

```bash
opencode
```

Dentro de OpenCode:

1. Escribe `/connect` y elige **GitHub Copilot** y **GitHub.com**. En Codespaces ya sale con una ✓ y `$GITHUB_TOKEN`:
   elígelo igualmente, porque esa marca no significa que estés conectado.
2. Abre <https://github.com/login/device> y pega el código que te muestra.
3. Escribe `/models` y elige un modelo de **GitHub Copilot**.
4. Escribe `Responde solo: funciona`.

Si ves `This model is not available in your country` o `Free usage limit reached`, OpenCode está usando un modelo gratuito:
falta el paso 2 o el 3.

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
