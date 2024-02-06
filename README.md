# React + TypeScript + Vite + Storybook + Styled Components

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

## 1. Storybook

Se trabajará con Storybook (https://storybook.js.org/) que es una interfaz frontend para crear UI Components y páginas de forma aislada. Esto nos ayudará a probar y desarrollar de una mejor manera nuestros componentes.

Se estarán implementando las bases y temas adicionales de Storybook. Para instalar Storybook (https://storybook.js.org/docs/react/get-started/install/) dentro de un proyecto existente se deberá colocar: `npx storybook@latest init`

- Integrar Storybook en una aplicación de React con npx
- Crear un componente desde cero
- Crear historias
- Configurar historias
- Utilizar varios controles para las properties
- Integración con TypeScript
- Crear documentaciones de componentes
- Desplegar documentación a diferentes sitios
- Implementar Styled Components para la creación de componentes estilizados

Para la estructura de carpetas se deberá eliminar del src los archivos App.css, App.tsx, index.css, main.tsx ya que este proyecto es para poder usar storybook entonces al hacer npm run dev correrá la página de storybook y no el típico proyecto de React. Luego crear un archivo index.tsx y exportar todos los componentes que vamos a usar.

## 2. How to write a story

Las historias de Storybook o Storybook stories representa la llave de estados por cada uno de los componentes.

- #### Imports

  - First, import Meta and StoryObj for type safety and autocompletion in TypeScript stories.
  - Next, import a component. In this case, the Button component.

- #### Meta

  - The default export, Meta, contains metadata about this component's stories. The title field (optional) controls where stories appear in the sidebar.

- #### Story

  - Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options.

- #### Args

  - Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the initial control values for the story.

- #### Create your first story

  - Now it's your turn. See how easy it is to create your first story by following these steps below.

    1. Copy the Warning story.
    2. Open the Button story in your current working directory: ./​src/​stories/​Button.stories.ts
    3. Paste it at the bottom of the file and save.

```js
// Button.stories.ts
/* Imports */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/* Meta */
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  // ...
};
export default meta;

/* Story */
type Story = StoryObj<Button>;
export const Primary: Story = {
  /* Args */
  args: {
    primary: true,
    label: "Click",
    background: "red",
  },
};

// Copy the code below
export const Warning: Story = {
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red",
  },
};
```

## 3. Hacer el build de storybook

En la terminal se colocará "npm run build-storybook" y luego automáticamente se creará una carpeta llamada "storybook-static" y esa carpeta es básicamente la aplicación como tal la cual se montará en algún servidor. Por ejemplo, si se sube a Netlify solo se utilizará la carpeta "storybook-static".

Una vez hecho el build se puede desplegar por ejemplo en Netlify, npm para tenerlo como paquete, etc.
También se puede probar usando la extensión Live Server de Visual Studio Code. Una vez instalada la extensión entonces nos vamos a la carpeta storybook-static y vamos al index.html y luego presionar click derecho y buscar la opción Open with Live Server o sino directamente presionando Go Live que está en el Visual Studio Code en la barra inferior.

---

### \* PASOS A REALIZAR:

1. ejemplo
2. ejemplo
3. ejemplo

### \* RECURSOS A USAR:

- Storybook: https://storybook.js.org/
  - `npx storybook@latest init`
  - eslint-plugin-storybook: https://github.com/storybookjs/eslint-plugin-storybook#readme
- Styled Components: https://styled-components.com/
  - `npm install styled-components`
- storybook-addon-a11y: https://storybook.js.org/addons/@storybook/addon-a11y
  - `npm i --dev @storybook/addon-a11y`

### \* NOTAS:

- Se utilizó este proyecto como base: https://github.com/abelborit/react-typescript-storybook-app
- ejemplo
- ejemplo

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
