# Apuntes básicos de React

## ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de manera eficiente y declarativa. Permite crear aplicaciones web interactivas y escalables, facilitando la construcción de componentes reutilizables.

- **¿Para qué se utiliza?** Para desarrollar interfaces de usuario dinámicas, especialmente en aplicaciones de una sola página (SPA).
- **Objetivo:** Facilitar la creación y gestión de interfaces complejas, optimizando el rendimiento y la experiencia del usuario.

## Babel

**Babel** es un compilador que transforma el código JSX (y otras características modernas de JavaScript) en código JavaScript compatible con todos los navegadores. Gracias a Babel, podemos escribir código moderno y JSX sin preocuparnos por la compatibilidad.

### Alternativa moderna: SWC

**SWC** (Speedy Web Compiler) es un compilador/transpilador escrito en Rust, mucho más rápido que Babel, y compatible con la mayoría de los proyectos modernos de React. SWC también transforma JSX y código moderno de JavaScript, y es la opción que se va a utilizar en este curso/proyecto.

## Root

El **root** es el punto de entrada de la aplicación React en el DOM. Se suele crear un elemento `<div id="root">` en el HTML y React renderiza la app dentro de ese nodo usando el método `ReactDOM.createRoot` o `ReactDOM.render`.

```html
<!-- index.html -->
<body>
  <div id="root"></div>
</body>
```

```js
// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

## Hidratación

La **hidratación** es el proceso por el cual React "toma el control" de un HTML generado previamente (por ejemplo, en aplicaciones renderizadas en el servidor) y lo convierte en una aplicación interactiva en el navegador. Es fundamental en aplicaciones que usan renderizado del lado del servidor (SSR).

## JSX

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. **No es HTML**, aunque se parece mucho. JSX se transforma a llamadas de JavaScript que crean elementos de React.

### Ejemplo básico de JSX

```jsx
const elemento = <h1>Hola, mundo!</h1>;
```

Esto NO es HTML, es una sintaxis especial que Babel transforma en:

```js
const elemento = React.createElement("h1", null, "Hola, mundo!");
```

### Diferencias clave con HTML

- En JSX, los atributos se escriben en camelCase: `className` en vez de `class`, `htmlFor` en vez de `for`.
- Todo debe estar contenido en un solo elemento padre.
- Puedes insertar expresiones de JavaScript usando llaves `{}`:

```jsx
const nombre = "Ana";
const saludo = <h2>Hola, {nombre}!</h2>;
```

- Los comentarios en JSX se escriben así: `{/* Esto es un comentario en JSX */}`

## Componentes

Un **componente** es una función (o clase) que retorna JSX. Los componentes permiten dividir la UI en piezas reutilizables y aisladas.

### Ejemplo de componente funcional

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}
```

Los componentes deben empezar con mayúscula.

## Props

Las **props** (propiedades) son los datos que se pasan a los componentes desde su "padre". Son de solo lectura.

```jsx
<Saludo nombre="Juan" />
```

### Props especiales: key y children

- **key:** Es una prop especial que ayuda a React a identificar elementos únicos en listas. Es obligatoria cuando se renderizan listas de componentes.

```jsx
<ul>
  {usuarios.map((usuario) => (
    <li key={usuario.id}>{usuario.nombre}</li>
  ))}
</ul>
```

- **children:** Es una prop especial que representa el contenido "hijo" que se coloca entre las etiquetas de apertura y cierre de un componente.

```jsx
function Contenedor(props) {
  return <div>{props.children}</div>;
}

<Contenedor>
  <p>Este es un hijo</p>
</Contenedor>;
```

## Hooks

Un **hook** es una función especial de React que permite usar características como el estado y el ciclo de vida en componentes funcionales. Los hooks permiten escribir componentes funcionales con capacidades que antes solo tenían las clases.

### Reglas de los hooks

- Los hooks **siempre** deben empezar con la palabra `use` (por ejemplo, `useState`, `useEffect`).
- **Solo** se pueden llamar en el nivel superior de un componente funcional o en un custom hook (no dentro de condicionales, bucles ni funciones anidadas).
- **No** se pueden usar en clases, ni fuera de componentes de React.
- El orden de los hooks debe ser siempre el mismo en cada renderizado.

> **Ejemplo incorrecto:**
>
> ```jsx
> if (condicion) {
>   const [valor, setValor] = useState(0); // ❌ No hacer esto
> }
> ```

> **Ejemplo correcto:**
>
> ```jsx
> const [valor, setValor] = useState(0); // ✅ Siempre en la raíz del componente
> if (condicion) {
>   // ...
> }
> ```

## useState

`useState` es el hook más básico y utilizado. Permite agregar estado a un componente funcional.

### ¿Cómo funciona?

- Se importa desde React: `import { useState } from "react";`
- Recibe un **valor inicial** (puede ser cualquier tipo de dato).
- Devuelve un array con dos elementos: el **estado actual** y una **función para actualizarlo**.
- Al actualizar el estado, **provoca un re-renderizado** del componente.
- La actualización del estado es **asincrónica**: el valor no cambia inmediatamente después de llamar a la función de actualización.

### Ejemplo básico

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // valor inicial: 0

  const incrementar = () => {
    setContador(contador + 1);
    // console.log(contador); // ¡Ojo! Aquí aún no se actualizó el valor
  };

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={incrementar}>Sumar</button>
    </div>
  );
}
```

### Detalles importantes

- El valor inicial solo se usa la **primera vez** que se monta el componente.
- Si necesitas calcular el valor inicial, puedes pasar una función: `useState(() => valorCalculado)`.
- La función de actualización puede recibir una función para obtener el valor más reciente:

```jsx
setContador((prev) => prev + 1);
```

- Cambiar el estado provoca un **re-render** del componente y de sus hijos.
- El estado es **privado** para cada instancia del componente.
- No modifiques el estado directamente, siempre usa la función de actualización.

### Ejemplo avanzado: valor inicial por función

```jsx
const [fecha] = useState(() => new Date().toLocaleDateString());
```

### Advertencias

- No confíes en el valor actualizado inmediatamente después de llamar a la función de actualización.
- No uses hooks dentro de condicionales, bucles ni funciones anidadas.
- Cada llamada a `useState` es independiente y mantiene su propio estado.

## Estados e Inputs controlados

El **estado** es la información que puede cambiar a lo largo del tiempo en un componente. Los **inputs controlados** son elementos de formulario cuyo valor es gestionado por el estado de React.

### Ejemplo de input controlado

```jsx
function Formulario() {
  const [nombre, setNombre] = useState("");
  return <input value={nombre} onChange={(e) => setNombre(e.target.value)} />;
}
```

### ¿Qué elementos se pueden controlar?

- `<input>`, `<textarea>`, `<select>`, etc. Todos pueden ser controlados mediante el estado de React.

## Elevación del estado (Lifting State Up)

Cuando varios componentes necesitan compartir o modificar el mismo estado, se recomienda "elevar" ese estado al ancestro común más cercano y pasar funciones y valores por props.

> **Advertencia:** No es buena práctica pasar directamente la función `setState` (por ejemplo, `setValor`) como prop a los hijos. Es preferible pasar una función personalizada que encapsule la lógica de actualización, para mantener el control y evitar dependencias innecesarias entre componentes.

### Ejemplo básico

```jsx
function Padre() {
  const [valor, setValor] = useState("");

  // Función personalizada para actualizar el estado
  const actualizarValor = (nuevoValor) => setValor(nuevoValor);

  return (
    <>
      <Hijo valor={valor} onActualizar={actualizarValor} />
      <OtroHijo valor={valor} />
    </>
  );
}

function Hijo({ valor, onActualizar }) {
  return <input value={valor} onChange={(e) => onActualizar(e.target.value)} />;
}

function OtroHijo({ valor }) {
  return <p>El valor es: {valor}</p>;
}
```

De esta forma, el componente padre mantiene el control sobre cómo se actualiza el estado y los hijos solo notifican los cambios a través de funciones específicas.

## Recursos recomendados

- [Documentación oficial de React (en español)](https://es.react.dev/)
- [Tutorial interactivo de React](https://es.react.dev/learn/tutorial-tic-tac-toe)
- [React: Guía completa en MDN](https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [usehooks.com (ejemplos de hooks personalizados)](https://usehooks.com/)
- [React en YouTube: Midudev](https://www.youtube.com/playlist?list=PLUofhDIg_38q4D1pyaXsu2Ic1Q0Q8kB1l)
