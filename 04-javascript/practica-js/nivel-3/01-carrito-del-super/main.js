// ============================================================
// 🛒 MERCADITOAPP — CARRITO PERSISTENTE
// ============================================================
// Marta hace sus compras online pero siempre pierde el carrito
// cuando cierra la pestaña del navegador.
//
// Te pidió dos cosas:
// 1. Un carrito que recuerde los productos entre recargas
//    (usando localStorage)
// 2. Poder incrementar/decrementar la cantidad de cada producto
//
// La arquitectura de este ejercicio usa un CLOSURE FACTORY:
// una función que crea y retorna un objeto con métodos,
// manteniendo el estado interno de forma privada.
//
// Conceptos: localStorage, JSON.stringify/parse, closures.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const productosGrid  = document.getElementById("productos-grid");
const carritoLista   = document.getElementById("carrito-lista");
const carritoTotal   = document.getElementById("carrito-total");
const badgeCantidad  = document.getElementById("badge-cantidad");
const btnVaciar      = document.getElementById("btn-vaciar");

// --- CATÁLOGO DE PRODUCTOS (no modificar) ---
const productos = [
  { id: 1, nombre: "Leche",       precio: 850,  emoji: "🥛" },
  { id: 2, nombre: "Pan",         precio: 600,  emoji: "🍞" },
  { id: 3, nombre: "Huevos (x6)", precio: 1200, emoji: "🥚" },
  { id: 4, nombre: "Arroz",       precio: 750,  emoji: "🍚" },
  { id: 5, nombre: "Aceite",      precio: 1800, emoji: "🫙" },
  { id: 6, nombre: "Yerba",       precio: 2100, emoji: "🧉" },
  { id: 7, nombre: "Azúcar",      precio: 680,  emoji: "🍬" },
  { id: 8, nombre: "Fideos",      precio: 550,  emoji: "🍝" },
];

const STORAGE_KEY = "mercadito-carrito";

// ============================================================
// TAREA 1: Crear el closure factory del carrito
// ============================================================
// Esta función crea y retorna un objeto con métodos para
// manejar el carrito. El array "items" es PRIVADO — nadie
// desde afuera puede modificarlo directamente.
//
// Estructura del array items:
// [{ id: 1, nombre: "Leche", precio: 850, cantidad: 2 }, ...]
//
// La función retorna un objeto con estos métodos:
// - agregar(producto): agrega el producto o incrementa su cantidad
// - quitar(id): elimina el item del carrito
// - incrementar(id): suma 1 a la cantidad
// - decrementar(id): resta 1; si llega a 0, quita el item
// - obtenerItems(): retorna una copia del array items
// - obtenerTotal(): retorna la suma de precio * cantidad
// - contar(): retorna la cantidad total de items (suma de cantidades)
// - guardar(): guarda items en localStorage con STORAGE_KEY
// - cargar(): carga items desde localStorage (si existen)
// - vaciar(): limpia el carrito y guarda en localStorage

function crearCarrito() {
  // Esta variable es PRIVADA — solo los métodos del objeto retornado
  // pueden acceder a ella. Eso es el closure.
  let items = [];

  return {

    // ── TAREA 1a: agregar ──
    // Si el producto ya está en el carrito (buscalo con .find()),
    // incrementá su cantidad. Si no está, agregalo con cantidad: 1.
    // Después de agregar, llamar a this.guardar().
    agregar(producto) {
      // TODO: Buscar si ya existe: const existe = items.find(i => i.id === producto.id)

      // TODO: Si existe: existe.cantidad++
      //       Si no: items.push({ ...producto, cantidad: 1 })
      //       Pista: el spread { ...producto } copia todas las props del producto

      // TODO: this.guardar()
    },

    // ── TAREA 1b: quitar ──
    // Eliminar el item con ese id usando .filter().
    // Después guardar.
    quitar(id) {
      // TODO: items = items.filter(i => i.id !== id)
      // TODO: this.guardar()
    },

    // ── TAREA 1c: incrementar ──
    // Buscar el item y sumarle 1 a la cantidad.
    incrementar(id) {
      // TODO: const item = items.find(i => i.id === id)
      // TODO: Si existe: item.cantidad++
      // TODO: this.guardar()
    },

    // ── TAREA 1d: decrementar ──
    // Buscar el item y restarle 1. Si llega a 0, quitarlo.
    decrementar(id) {
      // TODO: Buscar el item con .find()
      // TODO: Si item.cantidad > 1: item.cantidad--
      //       Si no: llamar a this.quitar(id)
      // TODO: this.guardar()
    },

    // ── TAREA 1e: obtenerItems ──
    // Retorna una COPIA del array (no la referencia directa).
    // Pista: [...items] crea una copia superficial del array.
    obtenerItems() {
      // TODO: return [...items]
    },

    // ── TAREA 1f: obtenerTotal ──
    // Suma precio * cantidad de todos los items.
    // Usar .reduce() con valor inicial 0.
    obtenerTotal() {
      // TODO: return items.reduce((total, item) => total + item.precio * item.cantidad, 0)
    },

    // ── TAREA 1g: contar ──
    // Suma todas las cantidades del carrito.
    contar() {
      // TODO: return items.reduce((total, item) => total + item.cantidad, 0)
    },

    // ── TAREA 1h: guardar ──
    // Persiste el array items en localStorage como JSON string.
    // Clave: STORAGE_KEY (variable definida arriba)
    // Pista: localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    guardar() {
      // TODO: localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },

    // ── TAREA 1i: cargar ──
    // Lee el localStorage y, si hay datos guardados, los parsea
    // y los asigna al array items.
    // Pista: JSON.parse(localStorage.getItem(STORAGE_KEY)) puede devolver null
    //        si nunca se guardó nada — verificá antes de asignar.
    cargar() {
      // TODO: const guardado = localStorage.getItem(STORAGE_KEY)
      // TODO: Si guardado no es null: items = JSON.parse(guardado)
    },

    // ── TAREA 1j: vaciar ──
    // Limpia el carrito y lo guarda vacío en localStorage.
    vaciar() {
      // TODO: items = []
      // TODO: this.guardar()
    },

  };
}

// ============================================================
// INSTANCIA DEL CARRITO
// (no modificar — crearCarrito() ya está implementado arriba)
// ============================================================
const carrito = crearCarrito();

// ============================================================
// TAREA 2: Renderizar el catálogo de productos
// ============================================================
// Muestra todos los productos disponibles como tarjetas.
// Cada tarjeta tiene el emoji, nombre, precio y un botón
// "Agregar al carrito" con data-id del producto.
//
// HTML de cada tarjeta:
// <div class="producto-card">
//   <div class="producto-emoji">🥛</div>
//   <div class="producto-nombre">Leche</div>
//   <div class="producto-precio">$850</div>
//   <button class="btn-agregar-prod" data-id="1">+ Agregar</button>
// </div>

function renderizarCatalogo() {
  // TODO: Mapear productos a HTML con .map().join("")
  // TODO: Asignar a productosGrid.innerHTML
}

// ============================================================
// TAREA 3: Renderizar el carrito
// ============================================================
// Muestra los items del carrito en carritoLista.
// Si está vacío, mostrar el texto "El carrito está vacío".
//
// HTML de cada item:
// <li class="carrito-item">
//   <div class="carrito-item-top">
//     <span class="carrito-item-nombre">🥛 Leche</span>
//     <button class="btn-quitar-item" data-id="1">✕</button>
//   </div>
//   <div class="carrito-item-controles">
//     <div class="controles-cantidad">
//       <button class="btn-cantidad btn-dec" data-id="1">−</button>
//       <span class="cantidad-numero">2</span>
//       <button class="btn-cantidad btn-inc" data-id="1">+</button>
//     </div>
//     <span class="carrito-item-subtotal">$1700</span>
//   </div>
// </li>
//
// También actualizá:
// - carritoTotal.textContent con "$" + carrito.obtenerTotal()
// - badgeCantidad.textContent con carrito.contar()

function renderizarCarrito() {
  const items = carrito.obtenerItems();

  // TODO: Si items.length === 0, mostrar estado vacío y retornar

  // TODO: Mapear items a HTML, asignar a carritoLista.innerHTML

  // TODO: Actualizar carritoTotal.textContent

  // TODO: Actualizar badgeCantidad.textContent
}

// ============================================================
// FUNCIÓN DE ACTUALIZACIÓN GENERAL (no modificar)
// ============================================================
function actualizar() {
  renderizarCarrito();
}

// ============================================================
// DELEGACIÓN DE EVENTOS (no modificar)
// ============================================================
productosGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-agregar-prod")) {
    const id = Number(e.target.dataset.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
      carrito.agregar(producto);
      actualizar();
    }
  }
});

carritoLista.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);
  if (e.target.classList.contains("btn-quitar-item")) {
    carrito.quitar(id);
    actualizar();
  }
  if (e.target.classList.contains("btn-inc")) {
    carrito.incrementar(id);
    actualizar();
  }
  if (e.target.classList.contains("btn-dec")) {
    carrito.decrementar(id);
    actualizar();
  }
});

btnVaciar.addEventListener("click", () => {
  carrito.vaciar();
  actualizar();
});

// ============================================================
// ARRANQUE — no modificar
// Carga el estado guardado antes de renderizar
// ============================================================
carrito.cargar();
renderizarCatalogo();
actualizar();
