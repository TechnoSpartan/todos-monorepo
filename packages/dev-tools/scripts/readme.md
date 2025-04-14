# 🧪 @codespartan/dev-tools/scripts

Este paquete agrupa scripts reutilizables para operaciones comunes como lint, test y build solo sobre los archivos modificados en Git.

## 🚀 Instalación y uso

Puedes ejecutar los scripts como CLI desde cualquier parte del monorepo:

```bash
pnpm exec codespartan-scripts lint
pnpm exec codespartan-scripts test
pnpm exec codespartan-scripts build
```

También puedes configurar scripts cortos en tu `package.json`:

```json
{
  "scripts": {
    "lint:changed": "codespartan-scripts lint",
    "test:changed": "codespartan-scripts test",
    "build:changed": "codespartan-scripts build"
  }
}
```

## 📦 Scripts disponibles

|     Comando      |                          Descripción                          |
| :--------------: | :-----------------------------------------------------------: |
| lint-changed.js  |      Ejecuta ESLint solo sobre los archivos modificados       |
| test-changed.js  |       Ejecuta tests solo sobre los archivos modificados       |
| build-changed.js | Ejecuta build solo sobre los archivos modificados (si aplica) |

## 🛠 Estructura interna

```bash
scripts/bin
├── build-changed.js         # Lógica para detectar cambios y lanzar build
├── lint-staged.js           # Comando usado por lint-staged
├── lint-changed.js          # Lógica para detectar cambios y lanzar lint
├── test-changed.js          # Lógica para testear archivos modificados
├── codespartan-scripts.js   # CLI que redirige los comandos anteriores
```

> 🧠 Puedes extender este paquete con más scripts si necesitas automatizar tareas adicionales.
