# Práctica de JavaScript — Guía completa para el alumno

Bienvenido a la ejercitación práctica de JavaScript. Acá no vas a encontrar ejercicios de manual. Vas a resolver problemas reales: un dueño de bicicletería que necesita llevar el stock, una florería con bugs en su sistema de precios, un restaurante que quiere filtrar su menú online.

El HTML y el CSS ya están hechos. Tu trabajo es escribir JavaScript.

---

## Índice

1. [Requisitos previos](#1-requisitos-previos)
2. [Descargar el repositorio](#2-descargar-el-repositorio)
3. [Configurar VS Code](#3-configurar-vs-code)
4. [Cómo abrir y ejecutar un ejercicio](#4-cómo-abrir-y-ejecutar-un-ejercicio)
5. [Dónde está la consigna de cada ejercicio](#5-dónde-está-la-consigna-de-cada-ejercicio)
6. [Estructura de un ejercicio](#6-estructura-de-un-ejercicio)
7. [Cómo usar la consola del navegador](#7-cómo-usar-la-consola-del-navegador)
8. [Ejercicios disponibles](#8-ejercicios-disponibles)
9. [Reglas y buenas prácticas](#9-reglas-y-buenas-prácticas)
10. [¿Te trabaste?](#10-te-trabaste)
11. [Errores frecuentes](#11-errores-frecuentes)

---

## 1. Requisitos previos

Antes de arrancar, necesitás tener instalado:

| Herramienta | Para qué sirve | Dónde descargar |
|-------------|----------------|-----------------|
| **Git** | Descargar el repositorio | https://git-scm.com |
| **VS Code** | Editor de código | https://code.visualstudio.com |
| **Google Chrome** o **Firefox** | Ejecutar y depurar el código | Ya los tenés |

> No necesitás instalar Node.js para estos ejercicios. Todo corre directamente en el navegador.

---

## 2. Descargar el repositorio

Tenés dos opciones:

### Opción A — Con Git (recomendada)

Abrí una terminal y ejecutá:

```bash
git clone https://github.com/[usuario]/UTN-programacion3.git
```

Luego entrá a la carpeta:

```bash
cd UTN-programacion3
```

### Opción B — Sin Git (descarga directa)

1. Entrá al repositorio en GitHub
2. Hacé clic en el botón verde **"Code"**
3. Seleccioná **"Download ZIP"**
4. Descomprimí el archivo en tu computadora

---

## 3. Configurar VS Code

### 3.1 Abrir la carpeta del proyecto

```
Archivo → Abrir carpeta → Seleccioná la carpeta UTN-programacion3
```

O desde la terminal:

```bash
code UTN-programacion3
```

### 3.2 Instalar la extensión Live Server

Live Server recarga el navegador automáticamente cada vez que guardás un archivo. Es FUNDAMENTAL para estos ejercicios.

**Cómo instalarla:**

1. Abrí el panel de extensiones con `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)
2. Buscá: `Live Server`
3. Instalá la extensión de **Ritwick Dey** (la más popular, con millones de descargas)
4. Reiniciá VS Code si te lo pide

### 3.3 Extensiones opcionales pero útiles

| Extensión | Qué hace |
|-----------|----------|
| **Prettier** | Formatea el código automáticamente al guardar |
| **Error Lens** | Muestra errores directamente en el editor |
| **JavaScript (ES6) code snippets** | Atajos para escribir código más rápido |

---

## 4. Cómo abrir y ejecutar un ejercicio

### Paso 1 — Navegá hasta el ejercicio

En el explorador de VS Code (panel izquierdo), abrí la carpeta:

```
04-javascript/
  practica-js/
    nivel-1/
      01-bicicletas-del-barrio/
        index.html    ← acá
        styles.css
        main.js
```

### Paso 2 — Abrí el ejercicio con Live Server

Hacé **clic derecho** sobre el archivo `index.html` → **"Open with Live Server"**

Esto abre el navegador automáticamente en `http://127.0.0.1:5500/...`

> Cada vez que guardés `main.js` con `Ctrl+S`, el navegador se va a recargar solo.

### Paso 3 — Abrí el archivo main.js en el editor

Hacé clic sobre `main.js`. Este es el único archivo que vas a modificar.

### Paso 4 — Abrí la consola del navegador

Presioná **F12** en el navegador para abrir las DevTools. Asegurate de estar en la pestaña **"Console"**.

---

## 5. Dónde está la consigna de cada ejercicio

**La consigna está dentro del archivo `main.js`**, al principio, como comentario.

Al abrir cualquier `main.js` vas a ver algo así:

```js
// ============================================================
// 🚲 BICICLETAS DEL BARRIO
// ============================================================
// Juan tiene una bicicletería de barrio y lleva el stock en
// un cuaderno. Te pidió que le armes una pantalla donde pueda
// ver cuántas bicis tiene de cada tipo, sumar cuando llega
// mercadería y restar cuando vende una.
//
// La interfaz ya está lista. Tu trabajo: conectar los datos.
// ============================================================
```

Después de la historia, vas a encontrar el código con tareas marcadas como `TODO`:

```js
function mostrarStock() {
  // TODO: Asigna el valor de stock.mountain al .textContent de stockMountain

  // TODO: Asigna el valor de stock.bmx al .textContent de stockBmx

  // TODO: Asigna el valor de stock.ruta al .textContent de stockRuta
}
```

**Cada TODO te dice exactamente qué tenés que hacer** — incluyendo una pista con el método o concepto a usar.

---

## 6. Estructura de un ejercicio

Cada carpeta de ejercicio contiene exactamente tres archivos:

```
nombre-del-ejercicio/
├── index.html   → La interfaz completa. NO lo modificás.
├── styles.css   → El diseño visual. NO lo modificás.
└── main.js      → Acá escribís todo tu código.
```

### ¿Qué hay en el main.js?

El archivo está organizado en secciones claramente separadas:

```
1. Historia del ejercicio (comentario al inicio)
2. Referencias al DOM — ya escritas, no las tocás
3. Estado inicial / datos del ejercicio — no lo modificás
4. Funciones con TODO — acá está tu trabajo
5. Conexión de eventos — ya escrita, no la tocás
6. Arranque inicial — no lo modificás
```

Las **referencias al DOM** y los **addEventListener** siempre están dados. Solo tenés que completar el CUERPO de las funciones.

---

## 7. Cómo usar la consola del navegador

La consola es tu mejor herramienta. Es donde vas a ver errores y depurar tu código.

### Abrir la consola

- **Windows / Linux:** `F12` o `Ctrl+Shift+I`
- **Mac:** `Cmd+Option+I`
- Luego hacé clic en la pestaña **"Console"**

### console.log() — tu aliado

Podés usar `console.log()` en cualquier parte del código para ver qué valor tiene una variable:

```js
function mostrarStock() {
  console.log("El stock de mountain es:", stock.mountain); // ← imprime en consola
  stockMountain.textContent = stock.mountain;
}
```

### Leer los errores

Si hay un error, la consola te lo muestra en rojo con la línea donde ocurrió:

```
Uncaught TypeError: Cannot set properties of null (reading 'textContent')
    at mostrarStock (main.js:25)
```

Esto significa: en la línea 25 de `main.js`, intentaste modificar un elemento que no existe. Revisá que el ID en el HTML coincida con el que usás en el JavaScript.

### Tipos de errores comunes

| Error | Causa probable |
|-------|----------------|
| `is not a function` | Llamaste algo que no es función, o el nombre está mal escrito |
| `Cannot read properties of undefined` | El objeto no existe o el nombre de la propiedad está mal |
| `is not defined` | La variable no fue declarada |
| `Unexpected token` | Error de sintaxis (falta un `)`, `}` o `"`) |

---

## 8. Ejercicios disponibles

### 📌 Nivel 1 — Fundamentos

Temas: variables, funciones, DOM, eventos, condicionales.
No necesitás saber nada de arrays ni objetos complejos todavía.

| # | Carpeta | Historia | Qué practicás |
|---|---------|----------|---------------|
| 1 | `nivel-1/01-bicicletas-del-barrio/` | Juan necesita ver su stock de bicis en pantalla | Variables, `textContent`, eventos, `if/else` |
| 2 | `nivel-1/02-floreria-bugueada/` | Florencia tiene un sistema con 3 bugs que hay que encontrar y arreglar | Funciones con `return`, depuración, operador ternario |
| 3 | `nivel-1/03-calculadora-del-kiosco/` | Don Raúl quiere una calculadora de vuelto y contador de ventas | Estado, `parseFloat`, acumuladores, historial |

📚 Teoría de referencia: secciones de Variables, Funciones, DOM y Eventos en `04-javascript/README.md`

---

### 📌 Nivel 2 — Arrays y Objetos

Temas: `map`, `filter`, `reduce`, `find`, destructuring, spread operator.
Completá el Nivel 1 antes de arrancar este.

| # | Carpeta | Historia | Qué practicás |
|---|---------|----------|---------------|
| 1 | `nivel-2/01-menu-del-restaurante/` | Ramón necesita filtrar su menú por categoría y armar pedidos | `filter`, `map`, `reduce`, `innerHTML` dinámico |
| 2 | `nivel-2/02-playlist-de-nicolas/` | Nicolás el DJ quiere gestionar su playlist con estadísticas | spread, `filter`, `findIndex`, `sort`, `reduce` |
| 3 | `nivel-2/03-turnero-medico/` | La Dra. Valeria necesita un turnero digital | Objetos, `Date`, `filter` por propiedad, spread |

📚 Teoría de referencia: secciones de Arrays, Objetos y ES6+ en `04-javascript/README.md`

---

### 📌 Nivel 3 — Avanzado

Temas: closures, clases, `async/await`, `fetch`, `localStorage`.
Completá el Nivel 2 antes de arrancar este.

| # | Carpeta | Historia | Qué practicás |
|---|---------|----------|---------------|
| 1 | `nivel-3/01-carrito-del-super/` | Marta pierde el carrito al cerrar el navegador | `localStorage`, closure factory, persistencia |
| 2 | `nivel-3/02-pokebusqueda/` | Tomás quiere buscar Pokémon con una API real | `fetch`, `async/await`, `try/catch`, PokeAPI |
| 3 | `nivel-3/03-panel-de-logros/` | Sofía quiere trackear logros de gaming | Clases ES6, closures avanzados, `localStorage` |

📚 Teoría de referencia: secciones de Closures, Clases, Asincronismo y localStorage en `04-javascript/README.md`

> **Nivel 3, ejercicio 2 (PokéBúsqueda):** necesita conexión a internet para consultar la PokeAPI.

---

## 9. Reglas y buenas prácticas

### Lo que tenés que hacer

- ✅ Leé la historia del ejercicio completa antes de escribir una sola línea
- ✅ Mirá la interfaz en el navegador antes de empezar — entendé qué debería pasar
- ✅ Resolvé los TODO de arriba hacia abajo — cada uno se apoya en el anterior
- ✅ Usá `console.log()` constantemente para verificar tus valores
- ✅ Guardá con `Ctrl+S` cada vez que escribas algo — Live Server va a recargar solo
- ✅ Leé los mensajes de error de la consola — te dicen exactamente qué está mal

### Lo que NO tenés que hacer

- ❌ Modificar `index.html` o `styles.css` — no es necesario
- ❌ Copiar código sin entender qué hace
- ❌ Saltarte niveles — cada uno se construye sobre el anterior
- ❌ Usar librerías externas (`jQuery`, etc.) — solo JavaScript vanilla
- ❌ Usar `var` — usá siempre `let` o `const`
- ❌ Ver la solución antes de intentarlo al menos 20-30 minutos

---

## 10. ¿Te trabaste?

Seguí este orden antes de pedir ayuda:

**1. Intentalo 20-30 minutos solo.**
Es normal trabarse. La frustración es parte del aprendizaje.

**2. Leé el error en la consola.**
La consola (F12) te dice exactamente qué línea falló y por qué.
Copiá el mensaje de error y leelo despacio.

**3. Usá console.log() para depurar.**
Agregá `console.log()` antes y después del TODO que te está fallando.
Verificá que tus variables tengan los valores que esperás.

```js
function sumarBici(tipo) {
  console.log("Tipo recibido:", tipo);         // ¿llegó bien el parámetro?
  console.log("Stock antes:", stock[tipo]);    // ¿qué había antes?
  stock[tipo] = stock[tipo] + 1;
  console.log("Stock después:", stock[tipo]);  // ¿cambió bien?
  mostrarStock();
}
```

**4. Revisá la teoría.**
Cada ejercicio indica qué sección del `04-javascript/README.md` es la referencia.
Leé esa sección antes de consultar.

**5. Consultá con el docente.**
Mostrá el código, el error de la consola, y explicá qué intentaste hacer.

---

## 11. Errores frecuentes

### "No pasa nada cuando hago clic en el botón"

Causas posibles:
- La función existe pero no está conectada al evento
- Hay un error en otra parte del código que impide que el script cargue
- El ID del botón en el HTML no coincide con el que usás en `document.getElementById()`

Verificá: abrí la consola (F12) y fijate si hay algún error en rojo.

---

### "La pantalla muestra 'undefined' en vez de un número"

```js
// Mal: la función no retorna nada
function calcularSubtotal(cantidad, precio) {
  cantidad * precio; // ← falta el return
}

// Bien:
function calcularSubtotal(cantidad, precio) {
  return cantidad * precio;
}
```

---

### "Modifiqué una variable pero la pantalla no cambió"

Cambiar una variable en JavaScript NO actualiza el DOM automáticamente.
Después de modificar el estado, siempre hay que llamar a la función que renderiza:

```js
function sumarBici(tipo) {
  stock[tipo] = stock[tipo] + 1;
  mostrarStock(); // ← sin esto, la pantalla no se actualiza
}
```

---

### "El ejercicio funciona pero al recargar la página pierde todo"

Eso es esperado en el Nivel 1 y 2 — el estado vive solo en memoria.
El Nivel 3 (Carrito del Super y Panel de Logros) te enseña a persistir datos con `localStorage`.

---

### "Live Server no recarga solo"

- Verificá que guardaste el archivo (`Ctrl+S`)
- Verificá que Live Server esté corriendo (debe decir "Port : 5500" en la barra de estado de VS Code)
- Si no corre, hacé clic derecho sobre `index.html` → "Open with Live Server"

---

## Estructura completa de esta carpeta

```
practica-js/
├── README.md                          ← Este archivo
│
├── nivel-1/
│   ├── 01-bicicletas-del-barrio/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── main.js  ← acá trabajás
│   ├── 02-floreria-bugueada/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── main.js  ← acá trabajás
│   └── 03-calculadora-del-kiosco/
│       ├── index.html
│       ├── styles.css
│       └── main.js  ← acá trabajás
│
├── nivel-2/
│   ├── 01-menu-del-restaurante/
│   ├── 02-playlist-de-nicolas/
│   └── 03-turnero-medico/
│
└── nivel-3/
    ├── 01-carrito-del-super/
    ├── 02-pokebusqueda/
    └── 03-panel-de-logros/
```

---

> Cualquier duda o problema, consultá con el docente. Pero intentalo primero — el error siempre te está diciendo algo.
