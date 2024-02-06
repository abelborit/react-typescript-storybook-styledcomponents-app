# React + TypeScript + Vite + Storybook + Styled Components

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

### 1. Storybook

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
- ejemplo

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
