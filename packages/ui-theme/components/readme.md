# 🧬 Web Components — `@codespartan/ui-theme/components`

Esta carpeta contiene componentes UI reutilizables basados en **Web Components nativos**. Están desarrollados bajo el enfoque de **Atomic Design**, empezando por átomos como `Button`, `Input`, `Label`, etc.

---

## ⚛️ ¿Qué componentes hay?

```txt
components/
├── button.js      # <cs-button> — Botón reutilizable
├── input.js       # <cs-input> — Input con estilos base
├── label.js       # <cs-label> — Etiqueta accesible
├── avatar.js      # <cs-avatar> — Componente de avatar
├── typography.js  # <cs-typography> — Sistema de textos
├── icon.js        # <cs-icon> — Iconos SVG inline
├── tag.js         # <cs-tag> — Etiquetas estilo badge
├── table.js       # <cs-table> — Tabla responsive
└── ... más por venir
```

## 💡 Cómo se usan

Los componentes se registran con prefijo `cs-` (cs de CodeSpartan) y pueden utilizarse directamente en `HTML`.

1. Importa el componente

```js
import "@codespartan/ui-theme/components/button.js";
```

> O si los quieres todos:

```js
import.meta.glob("@codespartan/ui-theme/components/*.js", { eager: true });
```

2. Úsalo en HTML

```html
<cs-button variant="primary" size="md"> Click aquí </cs-button>
```

## 🛠️ Props y atributos comunes

| **Propiedad** | **Tipo** |        **Valores**        |        **Descripción**         |
| :-----------: | :------: | :-----------------------: | :----------------------------: |
|    variant    |  string  | primary, secondary, ghost | Variante visual del componente |
|     size      |  string  |        sm, md, lg         |       Tamaño predefinido       |
|   disabled    | boolean  |             —             |     Si está deshabilitado      |

> ⚠️ Cada componente expone sus propias props y estilos en shadow DOM, con estilos extraídos desde theme.css + Tailwind.

## ✨ Ventajas

- 100% independientes del framework (vanilla JS)
- Reutilizables en múltiples proyectos (React, Vue, Angular, Lit, Svelte, etc)
- Integrados con variables CSS y sistema de diseño de CodeSpartan
- Pueden usarse con SSR, si haces `hydrate` luego
- Soporte futuro para slots y eventos personalizados

## 💅 Estilos

Cada componente se autoaplica su estilo basado en el `theme.css`. Puedes sobreescribir con `:host` o clases globales si lo necesitas:

```css
cs-button::part(base) {
  background-color: var(--color-accent);
}
```

## 📦 Build e importación

Cada componente está exportado individualmente, lo que permite importar sólo lo necesario:

```js
import "@codespartan/ui-theme/components/button.js";
```

Todos los builds usan:

- `tsup` con splitting
- `ESM` + `CJS` + `CSS minificado`
- Sin dependencias externas

## 🧱 ¿Y los siguientes pasos?

- [ ] Documentar cada componente con TypeDoc o JSDoc
- [ ] Añadir más moléculas (form fields, modals...)
- [ ] Incluir temas dinámicos con CSS Custom Properties
- [ ] Sistema de slots dinámicos
- [ ] Documentación en Storybook / Historia

## 🧬 Atomic Design en marcha

Este es solo el nivel **"Átomo"**. Vendrán luego:

- Moléculas: `<cs-form-field>`, `<cs-card>`, `<cs-modal>`.
- Organismos: `<cs-navbar>`, `<cs-sidebar>`.
- Plantillas y páginas para prototipado rápido.

© 2025 [CodeSpartan.es](https://www.codespartan.es) - Tecnología que impulsa
