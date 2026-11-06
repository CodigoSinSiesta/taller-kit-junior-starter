# Ejercicio 5 · Hazlo tuyo

**8 minutos.** Un tutor útil se parece a tu trabajo. Todo lo que vas a tocar está en tu copia de `kit-junior`, dentro de
`opencode/`.

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

Escribe tú la nota en `aprendizajes/` de tu kit y súbelo todo:

```bash
cd ~/kit-junior && git add -A && git commit -m "Adapta el kit" && git push
```

## Después del taller

- Si usas un Codespace, bórralo cuando hayas subido tu kit.
- Antes de usar el tutor con código de tu empresa, pregunta qué herramientas están aprobadas.
- Usa el tutor en tu próximo ticket real.
