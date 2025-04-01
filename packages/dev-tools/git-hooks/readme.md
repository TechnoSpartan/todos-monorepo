# 🐶 @codespartan/dev-tools/git-hooks

Este paquete se encarga de configurar de forma automatizada todos los Git Hooks del monorepo utilizando Husky. Ideal para mantener calidad y consistencia en cada commit, push o merge.

## 🚀 Instalación

Ejecuta el setup desde la raíz del monorepo:

```bash
pnpm exec codespartan-hooks
```

Esto hará lo siguiente:

1. Instala Husky si no existe
2. Crea los siguientes hooks:

|        Hook        |                       Acción                        |
| :----------------: | :-------------------------------------------------: |
|     pre-commit     | Ejecuta lint-staged para comprobar los staged files |
|     commit-msg     |   Valida el mensaje del commit usando commitlint    |
| prepare-commit-msg |        Hook placeholder para personalización        |
|      pre-push      |            Lanza pnpm lint && pnpm test             |
|     post-merge     |    Reinstala dependencias si el lockfile cambia     |
|   post-checkout    | Placeholder: útil para tareas tras cambiar de rama  |
|     pre-rebase     |      Placeholder para tareas previas a rebase       |
|    post-commit     |       Placeholder para tareas tras un commit        |

3. Crea symlinks a los archivos de configuración centralizados:

|   Archivo generado    |                 Origen                  |
| :-------------------: | :-------------------------------------: |
| commitlint.config.js  | packages/dev-tools/commitlint/index.js  |
| lint-staged.config.js | packages/dev-tools/lint-staged/index.js |
|         .czrc         | packages/dev-tools/commitizen/index.js  |

## ⚙️ Personalización

Si deseas modificar la lógica de algún hook:

- Modifica directamente en packages/dev-tools/git-hooks/bin/codespartan-hooks.js

- O sobrescribe los hooks manualmente si necesitas lógica custom avanzada.

> 🛡️ Los hooks no se sobrescriben si ya existen, por lo que puedes personalizarlos sin miedo.

## 🧠 Tips

- Asegúrate de tener ejecutado `chmod +x` sobre el binario:

```bash
chmod +x packages/dev-tools/git-hooks/bin/codespartan-hooks.js
```

- Puedes volver a lanzar el comando si necesitas regenerar symlinks o hooks.
