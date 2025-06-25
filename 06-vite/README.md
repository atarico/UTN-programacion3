# Vite

## ¿Qué es Vite?

Vite es una herramienta moderna para el desarrollo de aplicaciones web. Su nombre significa "rápido" en francés, y su objetivo es ofrecer un entorno de desarrollo ultrarrápido y eficiente para proyectos de JavaScript, React, Vue, y otros frameworks modernos.

Vite funciona como:

- **Servidor de desarrollo**: Proporciona recarga instantánea y hot module replacement (HMR) para una experiencia de desarrollo fluida.
- **Empaquetador (bundler)**: Usa [Rollup](https://rollupjs.org/) bajo el capó para empaquetar el código para producción.
- **Minificador**: Optimiza y reduce el tamaño de los archivos finales usando herramientas modernas como [esbuild](https://esbuild.github.io/) o [terser](https://terser.org/).
- **Compilador**: Transforma código moderno (ES6+, JSX, TypeScript, etc.) a JavaScript compatible con todos los navegadores.

## Creación de la build

Cuando ejecutas `vite build`, Vite genera una versión optimizada y lista para producción de tu aplicación. Esto incluye:

- Minificación de archivos JS, CSS y HTML.
- Empaquetado de módulos en archivos finales eficientes.
- Optimización de recursos estáticos (imágenes, fuentes, etc.).
- Generación de archivos hash para cacheo eficiente.

El resultado se guarda en la carpeta `dist/`.

## Estructura de archivos en un proyecto Vite (JavaScript/React)

Al crear un proyecto con Vite y React (`npm create vite@latest` y eligiendo React), la estructura típica es:

```
my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── ...
```

### Explicación de cada archivo/carpeta

- **node_modules/**: Dependencias del proyecto.
- **public/**: Archivos estáticos que se copian tal cual a la build final. Ideal para imágenes, favicon, etc.
  - `vite.svg`: Ejemplo de recurso estático.
- **src/**: Código fuente de la aplicación.
  - `App.jsx`: Componente principal de React.
  - `main.jsx`: Punto de entrada de la app, donde se monta React en el DOM.
  - `index.css`: Estilos globales de la app.
  - `assets/`: Carpeta para imágenes, fuentes y otros recursos usados en el código fuente.
- **.gitignore**: Archivos y carpetas que Git debe ignorar (por ejemplo, `node_modules/`, `dist/`).
- **index.html**: Archivo HTML principal. Vite lo usa como plantilla y lo inyecta con los scripts y estilos generados.
- **package.json**: Define las dependencias, scripts y metadatos del proyecto.
- **README.md**: Documentación del proyecto.
- **vite.config.js**: Archivo de configuración de Vite (plugins, rutas, alias, etc.).
- **dist/** (se genera tras la build): Carpeta con la versión final y optimizada de la app lista para producción.

## Scripts útiles en Vite

- `npm run dev`: Inicia el servidor de desarrollo con recarga instantánea.
- `npm run build`: Genera la build optimizada para producción en `dist/`.
- `npm run preview`: Sirve la build de producción localmente para probarla antes de desplegar.

## Ventajas de Vite

- Arranque y recarga ultrarrápidos.
- Soporte nativo para ES Modules.
- Configuración mínima y fácil de extender.
- Integración sencilla con React, Vue, Svelte, TypeScript, etc.
- Plugins y ecosistema en crecimiento.

## Recursos recomendados

- [Documentación oficial de Vite](https://vitejs.dev/)
- [Guía de Vite + React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
