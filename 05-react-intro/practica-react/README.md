# Práctica de React — Guía completa para el alumno

Bienvenido a la ejercitación práctica de React. Vas a resolver problemas reales usando los conceptos que estudiaste: componentes, props, `useState`, inputs controlados y lifting state up.

A diferencia de los ejercicios de JavaScript (que abren directo en el navegador), React necesita un entorno de construcción. Este proyecto usa **Vite**, que ya configuramos para que solo tengas que instalarlo y ejecutarlo.

---

## Índice

1. [Requisitos previos](#1-requisitos-previos)
2. [Instalar y ejecutar](#2-instalar-y-ejecutar)
3. [Cómo navegar entre ejercicios](#3-cómo-navegar-entre-ejercicios)
4. [Dónde están los TODOs](#4-dónde-están-los-todos)
5. [Estructura de un ejercicio](#5-estructura-de-un-ejercicio)
6. [Ejercicios disponibles](#6-ejercicios-disponibles)
7. [Conceptos clave antes de arrancar](#7-conceptos-clave-antes-de-arrancar)
8. [Reglas y buenas prácticas](#8-reglas-y-buenas-prácticas)
9. [Errores frecuentes en React](#9-errores-frecuentes-en-react)
10. [¿Te trabaste?](#10-te-trabaste)

---

## 1. Requisitos previos

| Herramienta | Versión mínima | Verificar |
|-------------|----------------|-----------|
| **Node.js** | 18 o superior | `node --version` |
| **npm** | Incluido con Node | `npm --version` |
| **VS Code** | Cualquier versión reciente | — |

### Instalar Node.js

Si todavía no tenés Node.js, descargalo desde [nodejs.org](https://nodejs.org). Elegí la versión **LTS** (recomendada para la mayoría).

Verificá que quedó instalado:
```bash
node --version   # debe mostrar v18.x.x o superior
npm --version    # debe mostrar 9.x.x o superior
```

---

## 2. Instalar y ejecutar

### Paso 1 — Posicionarte en la carpeta del proyecto

```bash
cd 05-react-intro/practica-react
```

### Paso 2 — Instalar las dependencias (una sola vez)

```bash
npm install
```

Esto descarga React, Vite y todo lo necesario. Puede tardar unos segundos. Se crea la carpeta `node_modules/` — es normal que pese bastante.

### Paso 3 — Iniciar el servidor de desarrollo

```bash
npm run dev
```

Deberías ver algo así en la terminal:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Paso 4 — Abrir el navegador

Entrá a `http://localhost:5173` y vas a ver el menú de ejercicios.

> **Recarga automática (HMR):** a diferencia de Live Server, Vite recarga solo las partes que cambiaron. Guardás con `Ctrl+S` y la app se actualiza instantáneamente, sin perder el estado.

### Para detener el servidor

Presioná `Ctrl+C` en la terminal.

---

## 3. Cómo navegar entre ejercicios

Al abrir la app en el navegador vas a ver un menú con los 6 ejercicios organizados por nivel. Hacé clic en cualquiera para entrar.

Una vez dentro del ejercicio, hay un botón **"← Volver al menú"** en la barra superior para regresar.

> El menú en sí también usa `useState` — miralo en `src/App.jsx`. Cuando llegues al Nivel 2 vas a entender exactamente qué hace.

---

## 4. Dónde están los TODOs

**Los TODOs están en los archivos `.jsx` de cada ejercicio**, dentro de `src/ejercicios/`.

Al abrir cualquier `.jsx` vas a ver:
- Una historia del cliente al principio (comentario)
- El código esqueleto ya organizado
- Los `{/* TODO: ... */}` con instrucciones específicas de qué escribir

### Ejemplo de cómo se ven los TODOs

```jsx
function TarjetaJugador({ nombre, posicion, numero, activo }) {
  return (
    <div className="tarjeta-jugador">
      {/* TODO: Mostrá el número con un <span className="numero-camiseta"> */}

      {/* TODO: Mostrá el nombre en un <h3> */}

      {/* TODO: Badge de estado:
               Si activo → <span className="badge-activo">Disponible ✓</span>
               Si no    → <span className="badge-lesionado">Lesionado ✗</span>
               Pista: usá el operador ternario */}
    </div>
  )
}
```

---

## 5. Estructura de un ejercicio

### Nivel 1 y 2 — Un o dos archivos `.jsx`

```
01-tarjetas-jugadores/
├── TarjetasJugadores.jsx   ← componente principal (con TODOs)
├── TarjetaJugador.jsx      ← componente hijo (con TODOs)
└── TarjetasJugadores.css   ← estilos completos (no tocar)
```

### Nivel 3 — Tres archivos `.jsx` (padre + dos hijos)

```
05-tienda-de-mariana/
├── TiendaDeMariana.jsx     ← PADRE: tiene el estado (con TODOs)
├── CatalogoProductos.jsx   ← hijo 1 (con TODOs)
├── CarritoCompras.jsx      ← hijo 2 (con TODOs)
└── TiendaDeMariana.css     ← estilos completos (no tocar)
```

### ¿Qué tocar y qué no?

| Archivo | ¿Lo modificás? |
|---------|----------------|
| `*.jsx` de los ejercicios | ✅ Sí — ahí están los TODOs |
| `*.css` | ❌ No — los estilos ya están |
| `App.jsx` | ❌ No — es el menú de navegación |
| `main.jsx` | ❌ No |
| `package.json` / `vite.config.js` | ❌ No |

---

## 6. Ejercicios disponibles

### 📌 Nivel 1 — Componentes y Props

Sin `useState` todavía. Toda la información viene de datos fijos pasados como props.

| # | Ejercicio | Historia | Qué practicás |
|---|-----------|----------|---------------|
| 1 | Tarjetas de Jugadores | El Club Deportivo Unión quiere digitalizar las fichas de sus jugadores | JSX, props, destructuring, `.map()` + `key`, renderizado condicional (`&&` y ternario) |
| 2 | Catálogo de Auriculares | SoundStore quiere mostrar su catálogo con estado de stock visual | Composición de componentes, props booleanas, clases CSS dinámicas |

---

### 📌 Nivel 2 — useState + Inputs controlados

El componente tiene su propio estado que cambia con las acciones del usuario.

| # | Ejercicio | Historia | Qué practicás |
|---|-----------|----------|---------------|
| 3 | Lista de Tareas de Bruno | Bruno necesita gestionar sus pendientes del día | `useState` con array, input controlado, agregar/eliminar/completar, filtros |
| 4 | Calculadora de Cuotas | CréditoYa necesita una calculadora de cuotas para sus asesores | `useState` múltiple, select controlado, valores derivados del estado |

---

### 📌 Nivel 3 — Lifting State Up

El estado vive en el componente padre y se comparte entre hijos hermanos.

| # | Ejercicio | Historia | Qué practicás |
|---|-----------|----------|---------------|
| 5 | Tienda de Plantas de Mariana | Catálogo y carrito deben compartir el estado | Lifting state up clásico, callbacks del padre al hijo |
| 6 | VideoClub Nostalgia | El buscador y la lista son componentes separados | Lifting state up con filtros, datos calculados en el padre |

---

## 7. Conceptos clave antes de arrancar

### ¿Qué es JSX?

JSX es la sintaxis de React para escribir HTML dentro de JavaScript. Algunas diferencias importantes:

```jsx
// En HTML normal:
<div class="tarjeta" for="input">

// En JSX:
<div className="tarjeta" htmlFor="input">
//   ↑ className en lugar de class
//   ↑ htmlFor en lugar de for
```

### ¿Cómo se pasan props?

```jsx
// Pasar props al componente hijo:
<TarjetaJugador nombre="Lucas" numero={9} activo={true} />
//                       ↑ string   ↑ número  ↑ boolean con {}

// Recibirlas en el componente hijo:
function TarjetaJugador({ nombre, numero, activo }) {
  // nombre = "Lucas", numero = 9, activo = true
}
```

### ¿Cómo se usa useState?

```jsx
import { useState } from 'react'

function MiComponente() {
  const [contador, setContador] = useState(0)  // estado inicial: 0

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  )
}
```

### ¿Qué es un input controlado?

```jsx
const [texto, setTexto] = useState("")

<input
  value={texto}                           // el valor viene del estado
  onChange={(e) => setTexto(e.target.value)}  // actualiza el estado al escribir
/>
```

### ¿Qué es Lifting State Up?

Cuando dos componentes necesitan compartir el mismo dato, el estado sube al padre:

```
        Padre (tiene el estado)
       /                      \
   Hijo A                   Hijo B
(modifica el estado)    (lee el estado)
```

---

## 8. Reglas y buenas prácticas

- ✅ Leé la historia del ejercicio antes de escribir código
- ✅ Resolvé los TODOs de arriba hacia abajo — cada uno se apoya en el anterior
- ✅ Usá `console.log()` para verificar props y estado
- ✅ Las DevTools de React (`F12` → `Components`) muestran el árbol de componentes y su estado
- ❌ No modifiques los archivos `.css`
- ❌ No instales librerías adicionales con `npm install ...`
- ❌ No uses `var` — siempre `const` o `let`
- ❌ No mutés el estado directamente: `tareas.push(...)` — siempre usá `setTareas([...tareas, ...])`
- ❌ No saltes niveles

---

## 9. Errores frecuentes en React

### "Warning: Each child in a list should have a unique 'key' prop"

Cuando renderizás una lista con `.map()`, cada elemento necesita la prop `key`:

```jsx
// ❌ Mal:
{jugadores.map(j => <TarjetaJugador nombre={j.nombre} />)}

// ✅ Bien:
{jugadores.map(j => <TarjetaJugador key={j.id} nombre={j.nombre} />)}
```

---

### "Cannot read properties of undefined"

El componente intentó leer una prop que no recibió. Verificá que la estés pasando desde el padre:

```jsx
// Si el padre no pasa la prop "nombre":
<TarjetaJugador />  // nombre es undefined → falla al intentar .length etc.

// ✅ Siempre pasá las props que el componente necesita:
<TarjetaJugador nombre={jugador.nombre} />
```

---

### "La pantalla no se actualiza cuando cambio una variable"

En React, cambiar una variable normal no dispara un re-render. Siempre usá `useState`:

```jsx
// ❌ Esto no actualiza la pantalla:
let contador = 0
function sumar() { contador++ }

// ✅ Esto sí:
const [contador, setContador] = useState(0)
function sumar() { setContador(contador + 1) }
```

---

### "Mutación de estado: el array no actualiza"

No mutés el estado directamente — creá un nuevo array:

```jsx
// ❌ Mal (mutación directa):
tareas.push(nuevaTarea)
setTareas(tareas)

// ✅ Bien (nuevo array con spread):
setTareas([...tareas, nuevaTarea])
```

---

### "El componente crashea pero no entiendo por qué"

1. Abrí DevTools (`F12`) → pestaña `Console`
2. Leé el error — generalmente te dice el archivo y la línea
3. Fijate si el error dice `undefined` — eso significa que una prop no llegó
4. Revisá que estés pasando todas las props requeridas desde el padre

---

## 10. ¿Te trabaste?

1. **Leé el error en la consola** (`F12` → Console). React da mensajes bastante claros.
2. **Usá `console.log()` dentro del componente** para ver qué valor tienen las props o el estado.
3. **Revisá la teoría** en `05-react-intro/README.md` — cada ejercicio indica qué sección es la referencia.
4. **Verificá que el servidor está corriendo** — si la pantalla está en blanco y no hay errores, probá `npm run dev` de nuevo.
5. **Consultá con el docente** mostrando el error de la consola y el código que intentaste.

---

## Estructura completa de esta carpeta

```
practica-react/
├── README.md                    ← Este archivo
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx                  ← Menú de navegación (no modificar)
    ├── App.css
    ├── index.css
    └── ejercicios/
        ├── nivel-1/
        │   ├── 01-tarjetas-jugadores/
        │   │   ├── TarjetasJugadores.jsx   ← hacé los TODOs acá
        │   │   ├── TarjetaJugador.jsx      ← y acá
        │   │   └── TarjetasJugadores.css
        │   └── 02-catalogo-auriculares/
        │       ├── CatalogoAuriculares.jsx ← hacé los TODOs acá
        │       ├── TarjetaProducto.jsx     ← y acá
        │       └── CatalogoAuriculares.css
        ├── nivel-2/
        │   ├── 03-lista-de-bruno/
        │   │   ├── ListaDeBruno.jsx        ← hacé los TODOs acá
        │   │   └── ListaDeBruno.css
        │   └── 04-calculadora-cuotas/
        │       ├── CalculadoraCuotas.jsx   ← hacé los TODOs acá
        │       └── CalculadoraCuotas.css
        └── nivel-3/
            ├── 05-tienda-de-mariana/
            │   ├── TiendaDeMariana.jsx     ← hacé los TODOs acá (PADRE)
            │   ├── CatalogoProductos.jsx   ← y acá
            │   ├── CarritoCompras.jsx      ← y acá
            │   └── TiendaDeMariana.css
            └── 06-videoclub-nostalgia/
                ├── VideoClubNostalgia.jsx  ← hacé los TODOs acá (PADRE)
                ├── PanelFiltros.jsx        ← y acá
                ├── ListaPeliculas.jsx      ← y acá
                └── VideoClubNostalgia.css
```
