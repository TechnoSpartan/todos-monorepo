# 🧰@codespartan/dev-tools

Bienvenido al corazón de los proyectos `codespartan`: aquí viven todas las herramientas compartidas y configuraciones cross-proyecto. Incluye configuración de linters, formateadores, hooks de Git, y scripts reutilizables.

## 🔧 Scripts disponibles

Puedes ejecutar estos scripts desde cualquier paquete del monorepo con:

```bash
pnpm exec codespartan-scripts <comando>
```

## 📑 Comandos incluidos:

| Comando |                Descripción                 |
| :-----: | :----------------------------------------: |
|  lint   |     Lint solo de archivos modificados      |
|  test   | Ejecuta tests solo en archivos modificados |
|  build  |     Build solo de paquetes modificados     |
| release |  Ejecuta release-please usando .env local  |

> ⚠️ El script release requiere la variable GITHUB_TOKEN definida en un .env. Node 20.6+ la carga automáticamente.

## 🚀 Integración CI/CD

Puedes usar `release-please` en GitHub Actions. El CLI ya está preparado para trabajar con `secrets.GITHUB_TOKEN`, y también funciona en local con `.env` para pruebas.

```bash
# .env
GITHUB_TOKEN=gh_token_personal
```

## 🧩 Documentación con TypeDoc

Para generar documentación técnica:

```bash
pnpm docs
```

Requiere que exista un archivo `tsconfig.json` en la raíz. Puedes usar el siguiente de ejemplo:

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "emitDeclarationOnly": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "module": "ESNext",
    "target": "ESNext",
    "strict": true,
    "allowJs": true
  },
  "include": ["packages/dev-tools/**/*"]
}
```

Y añade este script:

```json
{
  "scripts": {
    "docs": "typedoc"
  }
}
```

> 📚 Los archivos generados irán por defecto a docs/typedoc

## 📁 Estructura del directorio

```bash
packages/dev-tools
├── commitizen/              # Configuración para Commitizen
├── commitlint/              # Reglas de validación de mensajes de commit
├── eslint-config/          # Configuraciones compartidas de ESLint
├── git-hooks/              # Setup automático de hooks con Husky
├── lint-staged/            # Configuración para lint-staged
├── prettier-config/        # Configuración compartida de Prettier
├── release-please/         # Configuración de release-please
├── scripts/                # Scripts CLI reutilizables como lint/test/build:changed
├── readme.md              # Este README
└── package.json            # Módulo npm de herramientas comunes
```

## ⚙️ ¿Dónde edito qué?

|     Componente     |           ¿Dónde edito?            |                    ¿Qué hace?                     |
| :----------------: | :--------------------------------: | :-----------------------------------------------: |
|   **Commitizen**   |        commitizen/index.js         |  Define cómo se estructura un commit interactivo  |
|   **Commitlint**   |        commitlint/index.js         | Valida los commits siguiendo conventional commits |
|    **Prettier**    |      prettier-config/index.js      |              Estilo global de código              |
|     **ESLint**     |       eslint-config/flat.js        |          Configuración base ESLint Flat           |
|  **Husky Hooks**   | git-hooks/bin/codespartan-hooks.js |   Instala y configura automáticamente los hooks   |
|  **lint-staged**   |        lint-staged/index.js        |  Qué comandos se ejecutan sobre archivos staged   |
| **Release Please** | release-please/release-please.json |       Configuración de versión y changelog        |
|    **Scripts**     |         scripts/bin/\*.js          |    Scripts reutilizables de lint, test y build    |

> ⚠️ IMPORTANTE: No edites directamente `commitlint.config.js`, `lint-staged.config.js` o `.czrc` si fueron creados como symlinks por el hook CLI. Edita los originales dentro de `packages/dev-tools/`.

## 🧪 Tests de los scripts

Puedes probar los comandos desde cualquier paquete del monorepo:

```bash
pnpm exec codespartan-hooks       # Instala todos los hooks Husky y vincula configs
pnpm exec codespartan-scripts lint   # Lint a archivos modificados
pnpm exec codespartan-scripts test   # Test de archivos modificados
pnpm exec codespartan-scripts build  # Build incremental
pnpm exec codespartan-scripts release # Genera un release usando release-please
```

También puedes usar alias cortos si los defines en el root `package.json`:

```json
{
  "scripts": {
    "lint:changed": "codespartan-scripts lint",
    "test:changed": "codespartan-scripts test",
    "build:changed": "codespartan-scripts build"
  }
}
```
