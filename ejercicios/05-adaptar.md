# Ejercicio 5 · Hazlo tuyo

**8 minutos.** Un tutor útil se parece a tu trabajo. Todo lo que vas a tocar está en tu copia de `kit-junior`, dentro de
`opencode/`.

**Edítalo en GitHub, no en el Codespace.** Abre tu repo `kit-junior` en otra pestaña y pulsa la tecla `.`: se abrirá un
editor en el navegador. Desde el Codespace no podrías hacer `git push` a tu kit, y al borrarlo perderías los cambios.

## 1. Rellena tu perfil

Edita `skills/perfil-tutor/SKILL.md`: tu tecnología, tu nivel, tu idioma y tu exigencia.

## 2. Pon tu plantilla

Edita `skills/plantillas/SKILL.md` con la plantilla de PR, ticket o notas de tu equipo.

## 3. Abre un permiso

Si no usas Node.js, deja que lance tus tests. En `agents/tutor.md`, añade tu línea debajo de las de `npm` y `pnpm`, y encima
de las dos reglas finales:

```yaml
- { action: shell, resource: "mvn test *", effect: allow }
```

Las dos reglas finales deben seguir siendo las últimas.

## 4. Guarda lo aprendido

Con el tutor:

```text
/aprendido
```

Escribe tú la nota en `aprendizajes/`, en el editor de GitHub, y guarda los cambios desde **Control de código fuente**.

## 5. Tráelo al entorno

```bash
git -C ~/kit-junior pull
```

Vuelve a abrir OpenCode para que el tutor use tu versión.

## Después del taller

- Si usas un Codespace, bórralo al terminar: tu kit ya está en tu repo.
- Antes de usar el tutor con código de tu empresa, pregunta qué herramientas están aprobadas.
- Usa el tutor en tu próximo ticket real.
