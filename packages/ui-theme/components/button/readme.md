# <cs-button>

Componente de botón reutilizable diseñado siguiendo los principios de Atomic Design.

## 🧱 Tipo

Atom

## 🚀 Uso

```html
<cs-button variant="primary">Aceptar</cs-button>
```

## ⚙️ Props / Atributos

| Atributo |  Tipo   |    Descripción     |        Default        |
| :------: | :-----: | :----------------: | :-------------------: |
| variant  | string  |     `"primary"     |      "secondary"      |
| disabled |  bool   | Desactiva el botón |         false         |
| disabled | boolean |         —          | Si está deshabilitado |

## 🎨 Estilos CSS personalizados

Puedes sobrescribir las siguientes variables CSS:

```css
--cs-button-color: #ffffff;
--cs-button-bg: var(--color-primary);
--cs-button-border-radius: 0.375rem;
```

## 🧪 Ejemplo interactivo

```html
<cs-button variant="danger" onclick="alert('Boom!')">Eliminar</cs-button>
```

## 📚 Documentación técnica

El componente está definido en `button.js`, registrado como Custom Element y estilizado con clases Tailwind compiladas.

```js
/**
 * @class CSButton
 * @extends HTMLElement
 * @summary Botón con estilos predefinidos de tailwind + variantes.
 */
```

## 📦 Dependencias

- preset de `@codespartan/ui-theme` (**Taildwind**)
- `theme.css` y `font.css` incluidos globalmente
