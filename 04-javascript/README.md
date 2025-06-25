# Apuntes de JavaScript

## 1. Definición

JavaScript es un lenguaje de programación interpretado, orientado a objetos, utilizado principalmente para dotar de interactividad a las páginas web. Se ejecuta en el navegador, aunque también puede usarse en el servidor (Node.js). Es multiparadigma: permite programar de manera imperativa, orientada a objetos y funcional, entre otros estilos.

## 2. Sintaxis básica

- Las instrucciones suelen terminar con punto y coma (`;`), aunque es opcional en la mayoría de los casos.
- Es sensible a mayúsculas y minúsculas (`nombre` y `Nombre` son variables diferentes).
- Los bloques de código se delimitan con llaves `{}`.
- Los comentarios se escriben con `//` para una línea o `/* ... */` para varias líneas.

## 3. Variables y Tipos de Datos

- `var`: Declaración antigua, con alcance de función. Puede provocar errores por hoisting y redeclaración, por lo que se recomienda evitarla.
- `let`: Permite declarar variables con alcance de bloque. Es la forma recomendada para variables que cambian su valor.
- `const`: Declara constantes, es decir, variables cuyo valor no puede ser reasignado. También tiene alcance de bloque.

Tipos de datos primitivos:

- **Number**: Números enteros y decimales (`42`, `3.14`)
- **String**: Cadenas de texto (`"Hola"`, `'Mundo'`)
- **Boolean**: Valores lógicos (`true`, `false`)
- **Null**: Ausencia intencional de valor
- **Undefined**: Variable declarada pero sin valor asignado
- **Symbol**: Identificadores únicos (ES6)

Tipo de dato compuesto:

- **Object**: Colección de pares clave-valor, incluye arrays y funciones
- **Function**: Las funciones en JavaScript son objetos especiales de tipo `function` (aunque técnicamente son un subtipo de objeto, `typeof` devuelve "function")

### Operador typeof

El operador `typeof` permite saber el tipo de dato de una variable o valor.

```js
console.log(typeof 42); // "number"
console.log(typeof "hola"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (caso especial)
console.log(typeof function () {}); // "function"
```

> **Observación:** El tipo `null` es un caso especial en JavaScript. Si bien representa la ausencia intencional de valor, el operador `typeof null` devuelve `'object'` debido a un error histórico en el lenguaje. Este comportamiento es conocido y documentado, pero puede resultar confuso para principiantes. [Más información](https://2ality.com/2013/10/typeof-null.html)

## 4. Operadores y Estructuras de Control

- **Aritméticos**: `+`, `-`, `*`, `/`, `%`, `**`
- **Comparación**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` (usar `===` y `!==` para evitar errores de tipo)
- **Lógicos**: `&&` (y), `||` (o), `!` (negación)
- **Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, etc.
- **Ternario**: `condición ? valor1 : valor2`
- **Propagación/Rest**: `...` (ver ES6)

### Condicionales

```js
if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad > 12) {
  console.log("Adolescente");
} else {
  console.log("Menor de edad");
}

// Operador ternario
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

### Bucles

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

do {
  console.log(j);
  j++;
} while (j < 10);
```

## 5. Funciones

Las funciones permiten agrupar código reutilizable y estructurar programas de manera modular. Son ciudadanos de primera clase: pueden asignarse a variables, pasarse como argumentos y devolverse desde otras funciones.

### Declaración de función

```js
function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Ana"));
```

### Expresión de función

```js
const despedir = function (nombre) {
  return "Chau " + nombre;
};
console.log(despedir("Juan"));
```

### Función flecha (Arrow Function, ES6)

```js
const sumar = (a, b) => a + b;
const enMayus = (texto) => texto.toUpperCase();
const multiplicar = (a, b) => {
  const resultado = a * b;
  return resultado;
};
```

### Hoisting

Las declaraciones de función se "elevan" y pueden usarse antes de ser declaradas. Las expresiones y funciones flecha no:

```js
console.log(sumar(2, 2)); // 4
function sumar(a, b) {
  return a + b;
}

console.log(restar(5, 2)); // Error
const restar = function (a, b) {
  return a - b;
};
```

### Parámetros por defecto y argumentos variables

```js
function saludar(nombre = "Invitado") {
  return "Hola " + nombre;
}
console.log(saludar());

function sumarTodo(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumarTodo(1, 2, 3, 4));
```

### IIFE (Immediately Invoked Function Expression)

```js
(function () {
  console.log("Esto se ejecuta inmediatamente");
})();

(function (nombre) {
  console.log("Hola, " + nombre);
})("Mundo");
```

> **Advertencia:** Hoy en día, para la mayoría de los casos, es preferible usar módulos o bloques con `let`/`const` para evitar variables globales. Las IIFE aún pueden ser útiles en scripts simples o para encapsular variables privadas.

#### Caso práctico: Encapsulamiento de variables privadas

```js
const contador = (function () {
  let valor = 0;
  return {
    incrementar: function () {
      valor++;
    },
    obtener: function () {
      return valor;
    },
  };
})();
contador.incrementar();
console.log(contador.obtener()); // 1
```

## 6. Objetos y Arrays

### Objetos

```js
const persona = {
  nombre: "Ana",
  edad: 30,
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
persona.saludar();
```

### Arrays

```js
const numeros = [1, 2, 3, 4];
console.log(numeros[0]); // 1
```

### Métodos útiles de arrays

```js
const dobles = numeros.map((n) => n * 2);
const pares = numeros.filter((n) => n % 2 === 0);
const suma = numeros.reduce((acc, n) => acc + n, 0);
numeros.forEach((n) => console.log(n));
const primeroMayorA2 = numeros.find((n) => n > 2);
```

## 7. Manipulación del DOM

El DOM (Document Object Model) es la representación estructurada de una página web. JavaScript permite acceder y modificar el DOM para cambiar el contenido, estilos y estructura de la página en tiempo real.

### Selección de elementos

```js
document.getElementById("miElemento").textContent = "Nuevo texto";
document.querySelector(".clase").style.color = "red";
const items = document.querySelectorAll("li");
items.forEach((item) => (item.style.fontWeight = "bold"));
```

### Parentescos y navegación en el DOM

```js
const lista = document.getElementById("miLista");
console.log(lista.parentNode); // Nodo padre
console.log(lista.children); // HTMLCollection de hijos (elementos)
console.log(lista.childNodes); // NodeList de todos los nodos hijos
console.log(lista.firstChild); // Primer nodo hijo (puede ser texto)
console.log(lista.firstElementChild); // Primer hijo que es un elemento
console.log(lista.lastChild); // Último nodo hijo
console.log(lista.lastElementChild); // Último hijo que es un elemento

const primerItem = lista.firstElementChild;
console.log(primerItem.nextElementSibling); // Segundo elemento de la lista
console.log(primerItem.previousElementSibling); // null (no hay anterior)
```

### Modificación de contenido y atributos

```js
document.getElementById("miElemento").innerHTML =
  "<strong>Texto en negrita</strong>";
document.getElementById("miElemento").setAttribute("title", "Tooltip");
```

### Creación y eliminación de elementos

```js
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un nuevo div";
document.body.appendChild(nuevoDiv);
document.body.removeChild(nuevoDiv);
```

### Cambiar estilos

```js
document.getElementById("miElemento").style.backgroundColor = "yellow";
```

## 8. Eventos

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("¡Clic!");
});
document.addEventListener("keydown", function (event) {
  console.log("Tecla presionada: " + event.key);
});
```

- Se recomienda usar `addEventListener` en vez de atributos HTML (`onclick`, etc.) para separar lógica y estructura.

## 9. Callbacks y Closures

### Callback

```js
function procesarUsuario(nombre, callback) {
  callback("Hola " + nombre);
}
procesarUsuario("Juan", function (mensaje) {
  console.log(mensaje);
});
```

### Closure

```js
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}
const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
```

## 10. localStorage

Permite almacenar datos en el navegador de forma persistente (incluso si se cierra la pestaña o el navegador). Los datos se guardan como cadenas de texto.

```js
localStorage.setItem("usuario", "Ana");
const usuario = localStorage.getItem("usuario");
localStorage.removeItem("usuario");
localStorage.clear();
```

- Ideal para guardar configuraciones, temas, preferencias, etc.
- No usar para datos sensibles (no es seguro).

### Guardar y recuperar objetos o arrays

Para almacenar estructuras complejas (objetos, arrays), es necesario convertirlas a texto usando `JSON.stringify` y luego recuperarlas con `JSON.parse`:

```js
const persona = { nombre: "Ana", edad: 30 };
localStorage.setItem("persona", JSON.stringify(persona));

const personaGuardada = JSON.parse(localStorage.getItem("persona"));
console.log(personaGuardada.nombre); // "Ana"
```

## 11. ES6 (ECMAScript 2015+) y características modernas

ES6 introdujo muchas mejoras y nuevas características al lenguaje. Aquí se agrupan las más importantes y modernas:

### let y const

Permiten declarar variables con alcance de bloque, evitando problemas de hoisting y redeclaración.

### Funciones flecha (Arrow Functions)

Sintaxis más corta para funciones anónimas. No tienen su propio `this`.

```js
const sumar = (a, b) => a + b;
```

### Template strings

Permiten crear cadenas de texto con variables y saltos de línea fácilmente usando backticks (`` ` ``).

```js
const nombre = "Ana";
console.log(`Hola, ${nombre}!");
```

### Destructuring (Desestructuración)

Permite extraer valores de objetos o arrays en variables individuales de forma concisa.

```js
// Objetos
const persona = { nombre: "Ana", edad: 30, ciudad: "Córdoba" };
const { nombre, edad, ciudad: localidad, pais = "Argentina" } = persona;
console.log(nombre, edad, localidad, pais);

// Arrays
const numeros = [1, 2, 3, 4];
const [primero, segundo, ...resto] = numeros;
console.log(primero, segundo, resto);
```

### Spread Operator (`...`)

Permite expandir elementos de un array u objeto.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combinado = [...arr1, ...arr2];
console.log(combinado);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const objCombinado = { ...obj1, ...obj2 };
console.log(objCombinado);
```

### Rest Operator (`...`)

Permite agrupar el resto de los elementos en un array o los argumentos en una función.

```js
function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumar(1, 2, 3, 4));
```

### Clases

Sintaxis para crear objetos y herencia de forma más clara y similar a otros lenguajes.

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + " hace un ruido");
  }
}
class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " ladra");
  }
}
const miPerro = new Perro("Toby");
miPerro.hablar();
```

### Módulos (import/export)

Permiten dividir el código en archivos reutilizables y organizados.

```js
// archivo suma.js
export function suma(a, b) {
  return a + b;
}
export const PI = 3.14;
export default function restar(a, b) {
  return a - b;
}

// archivo principal.js
import suma, { PI } from "./suma.js";
import * as operaciones from "./suma.js";
console.log(operaciones.suma(1, 2));
```

## 12. Asincronismo, Promesas y async/await

JavaScript es asíncrono por naturaleza, lo que significa que puede ejecutar código mientras espera que otras tareas finalicen (como peticiones a servidores, temporizadores, etc.).

### setTimeout y setInterval

```js
setTimeout(() => {
  console.log("Hola después de 1 segundo");
}, 1000);

let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  if (contador === 5) clearInterval(intervalo);
}, 1000);
```

### Promesas

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Listo!"), 2000);
});
promesa.then((res) => console.log(res)).catch((err) => console.error(err));
```

### async/await

```js
async function obtenerDatos() {
  try {
    const resultado = await promesa;
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}
obtenerDatos();
```

### fetch: peticiones HTTP modernas

`fetch` es la API moderna para hacer solicitudes HTTP en JavaScript. Devuelve una promesa que resuelve con un objeto `Response`.

#### Ejemplo básico de fetch

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });
```

#### Usando async/await con fetch

```js
async function traerUsuario() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) throw new Error("Error en la respuesta");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
traerUsuario();
```

### Estructura de una Request

Una `Request` es el objeto que representa la petición HTTP. Sus partes principales son:

- **URL**: dirección a la que se envía la petición
- **Método**: `GET`, `POST`, `PUT`, `DELETE`, etc.
- **Headers**: información adicional (tipo de contenido, autenticación, etc.)
- **Body**: datos enviados (solo en métodos como POST o PUT)

Ejemplo de uso avanzado:

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Estructura de una Response

Una `Response` es el objeto que representa la respuesta del servidor. Sus propiedades más importantes son:

- **ok**: indica si la respuesta fue exitosa (status 200-299)
- **status**: código de estado HTTP (200, 404, 500, etc.)
- **statusText**: texto del estado
- **headers**: cabeceras de la respuesta
- **body**: el cuerpo de la respuesta (accesible con métodos como `.json()`, `.text()`, etc.)

Ejemplo de inspección de una Response:

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.ok); // true
    console.log(response.status); // 200
    console.log(response.headers.get("Content-Type"));
    return response.json();
  })
  .then((data) => console.log(data));
```

## 13. Recursos recomendados

- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://es.javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [Eloquent JavaScript (libro gratuito)](https://eloquentjavascript.net/)

## 14. Preparación para React

Antes de comenzar a aprender React, es fundamental tener una base sólida en los siguientes conceptos de JavaScript:

- Sintaxis básica y variables (`let`, `const`)
- Tipos de datos
- Funciones (declaradas, expresadas, flecha, IIFE)
- Ámbito (scope) y hoisting
- Callbacks y closures
- Manipulación de arrays y objetos (métodos como `map`, `filter`, `reduce`)
- Destructuring (objetos y arrays)
- Spread y rest operator (`...`)
- Estructuras de control (if, for, while, ternario)
- Manejo de eventos en el DOM
- Promesas, async/await y asincronismo
- Uso de `fetch` para peticiones HTTP
- Manejo de módulos (`import`/`export`)
- Uso de `localStorage` y JSON
