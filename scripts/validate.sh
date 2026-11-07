#!/usr/bin/env bash
#
# validate.sh: comprueba que el entorno del taller está listo.
#
#   ./scripts/validate.sh
#
# No cambia nada. Sale con error si falta algo imprescindible; lo opcional solo avisa.
set -uo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$RAIZ" || exit 1

fallos=0
avisos=0
bien() { printf '✅ %s\n' "$*"; }
mal() { printf '❌ %s\n' "$*"; fallos=$((fallos + 1)); }
aviso() { printf '⚠️  %s\n' "$*"; avisos=$((avisos + 1)); }

# Node 22 o superior
if command -v node >/dev/null 2>&1 && [ "$(node -p 'process.versions.node.split(".")[0]')" -ge 22 ]; then
  bien "Node $(node --version)"
else
  mal "Necesitas Node 22 o superior. Abre el proyecto en Codespaces o en el dev container."
fi

# Git
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  bien "Repositorio de git con $(git rev-list --count HEAD) commits"
else
  mal "Esto no es un repositorio de git. Clónalo o abre un Codespace."
fi

# Tests del proyecto
if resultado="$(npm test --silent 2>&1)"; then
  bien "Tests en verde"
else
  mal "Hay tests fallando. Ejecuta npm test para verlos."
  [ -n "$resultado" ] && printf '%s\n' "$resultado" | tail -n 5
fi

# OpenCode
if command -v opencode >/dev/null 2>&1; then
  version="$(opencode --version 2>/dev/null | sed 's/^opencode //')"
  case "$version" in
    *v1.* | 1.*) mal "Tienes OpenCode 1 ($version) y el taller usa OpenCode 2." ;;
    *) bien "OpenCode $version" ;;
  esac
else
  mal "No encuentro OpenCode. Abre el proyecto en Codespaces o en el dev container."
fi

# Copilot: no se puede saber aquí si el cupo alcanza, solo si la cuenta está conectada.
# En Codespaces, OpenCode lista Copilot por el GITHUB_TOKEN del entorno, pero eso no es una cuenta conectada.
if command -v opencode >/dev/null 2>&1; then
  if opencode auth list 2>/dev/null | grep -i 'copilot' | grep -qvi 'environment'; then
    bien "GitHub Copilot conectado en OpenCode"
  else
    aviso "Copilot no está conectado. Dentro de OpenCode escribe /connect y elige GitHub Copilot, aunque ya salga con una ✓."
  fi
fi

echo
if [ "$fallos" -eq 0 ] && [ "$avisos" -eq 0 ]; then
  echo "Entorno listo para el taller."
elif [ "$fallos" -eq 0 ]; then
  echo "Casi listo: revisa el aviso de arriba."
else
  echo "$fallos comprobación(es) sin pasar. Revisa los ❌ de arriba."
  exit 1
fi
