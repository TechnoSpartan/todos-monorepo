# 🧩 @codespartan/ui-theme

**Theme corporativo reutilizable basado en TailwindCSS** + tipografía personalizada, sistema de diseño y soporte para Web Components nativos. Ideal para proyectos Vanilla, React, Vue, Angular... ¡y hasta para tunear tu consola si te apetece! 😎

Este paquete contiene:

- Paleta de colores corporativos (`colors.css`)
- Tipografías oficiales (`fonts.css`)
- Presets de configuración para **Tailwind CSS**
- Temas en dos versiones:
  - `theme-full.css`: incluye fuentes + estilos base
  - `theme-slim.css`: solo incluye los estilos base
- Script de instalación automática
- Sistema de componentes base (WIP)
- Tokens de diseño sincronizables (`src/tokens.raw.js` → `styles/colors.css`)

---

## 📦 Instalación

```bash
pnpm add -D @codespartan/ui-theme --workspace
```

## 🧙‍♂️ Setup automático

Ejecuta el siguiente comando dentro del proyecto:

```bash
pnpm exec codespartan-ui-theme
```

Esto:

- Instala las dependencias necesarias
- Crea los archivos de configuración:
  - `tailwind.config.js` (con el preset aplicado)
  - `postcss.config.js`
- `src/theme.css` (pregunta si quieres versión `full` o `slim`)
- Modifica tu `main.ts`/`main.js` para importar el `theme.css`

## 🧩 ¿Full o Slim?

- `theme-full.css`:Carga los estilos y las fuentes desde Google Fonts automáticamente (ideal para prototipos, apps completas, etc.)
- `theme-slim.css`: Solo incluye los estilos (útil si ya tienes las fuentes gestionadas de otra forma, o las importas globalmente).

## 🧼 Sincronizar tokens

Este proyecto separa los tokens de diseño en dos capas:

- `src/tokens.raw.js`: contiene los valores reales de color (hex, rgba, etc.)
- `src/tokens.semantic.js`: mapea esos valores como variables CSS (`var(--color-*)`) para su uso en Tailwind y estilos.

Para mantenerlos sincronizados:

```bash
pnpm exec node scripts/build-tokens.js
```

Esto actualizará el colors.css automáticamente a partir del archivo de configuración.

## 📦 Exports

```javascript
// Temas
import "@codespartan/ui-theme/theme-full.css";
import "@codespartan/ui-theme/theme-slim.css";

// Tokens CSS
import "@codespartan/ui-theme/colors.css";
import "@codespartan/ui-theme/fonts.css";
import "@codespartan/ui-theme/common.css";

// Configuración para Tailwind
import { preset } from "@codespartan/ui-theme/preset";

// Config JS (para uso en Tailwind o extend)
import colors from "@codespartan/ui-theme/colors";
import typography from "@codespartan/ui-theme/typography";
import tailwindConfig from "@codespartan/ui-theme/tailwind-config";
```

## ⚙️ Scripts disponibles

|      **Script**      |                              **¿Qué hace?**                              |
| :------------------: | :----------------------------------------------------------------------: |
|     \_pnpm build     |                          Alias de build:preset                           |
| _pnpm build:preset_  | Compila la configuración principal como un preset global (dist/index.\*) |
| _pnpm build:modular_ |    Compila los Web Components de forma individual con code splitting     |
|      _pnpm dev_      |                        Build modular con --watch                         |
| `pnpm tokens:build`     | Genera el archivo `styles/colors.css` a partir de `src/tokens.raw.js`      |
|   _pnpm prebuild_    |      Compila los tokens y limpia la carpeta dist antes de compilar       |
| _pnpm postbuild_     |   Copia los archivos generados a la carpeta dist (esm, cjs, css)         |

> Se recomienda usar cross-env para portabilidad de BUILD_MODE. Ya viene incluido como devDependency.

## 🧠 Estructura del paquete

```tree
packages/ui-theme/
├── fonts.css          # @import de Google Fonts (tipografías personalizadas)
├── theme.css          # Variables CSS y estilos globales base
├── tailwind.config.js # Configuración base de Tailwind
├── preset.js          # Exporta un preset consumible para otros proyectos
├── index.js           # Entrada principal: colores, tipografía y preset
├── components/        # Web Components nativos basados en Atomic Design
│   ├── button.js
│   ├── input.js
│   └── ...
└── dist/              # Archivos generados tras build (esm, cjs, css)
```

## ✨ ¿Qué incluye?

- 🎨 Paleta corporativa con variables CSS
- 🔤 Tipografías personalizadas importadas desde Google Fonts
- 💅 Web Components para átomos básicos (Botón, Input, Label...)
- 💨 Preset de TailwindCSS listo para usar con @tailwind y postcss
- 📦 Exportación ESM + CJS para compatibilidad total
- 🛠️ Soporte para Vite, Webpack, Rollup...

## 🧩 ¿Cómo usarlo?

1. En tu `tailwind.config.js`

```js
import theme from "@codespartan/ui-theme/preset.js";

export default {
  presets: [theme],
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
};
```

2. En tu **CSS global**

```css
@import "@codespartan/ui-theme/fonts.css";
@import "@codespartan/ui-theme/theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. En tu `main.ts` / `main.js`

```js
// Activa los Web Components
import "@codespartan/ui-theme/components/button.js";
// o
import("@codespartan/ui-theme/components/button.js");
```

## 🔁 Compilación

```bash
# Modo preset
pnpm build:preset

# Modo modular (con splitting para componentes)
pnpm build:modular

# Watch en desarrollo
pnpm dev
```

## 🧪 Recomendaciones extra

- Usa [TypeDoc](https://typedoc.org/) para generar documentación automática
- Conecta este paquete a tu _CI/CD_ para publicar cambios de forma automática
- Usa `release-please` para control de versiones y changelogs

## 💬 Soporte

¿Dudas, mejoras, PRs o bromas de Tailwind?

Te leemos en el [Blog](https://codespartan.es/blog/)

© 2025 [CodeSpartan.es](https://www.codespartan.es) - Tecnología que impulsa
