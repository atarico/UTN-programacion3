// ============================================================
// 🍽️ EL BISTRÓ DE RAMÓN
// ============================================================
// El Bistró de la Esquina acaba de digitalizarse. Ramón quiere
// que sus clientes puedan ver el menú, filtrarlo por categoría,
// buscar platos por nombre, y armar su pedido viendo el total
// en tiempo real.
//
// Los datos ya están cargados. Tu trabajo: la lógica de filtros,
// renderizado y carrito.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const menuGrid          = document.getElementById("menu-grid");
const listaPedido       = document.getElementById("lista-pedido");
const totalPedido       = document.getElementById("total-pedido");
const contadorResultados = document.getElementById("contador-resultados");
const inputBuscador     = document.getElementById("buscador");
const selectCategoria   = document.getElementById("filtro-categoria");
const btnLimpiar        = document.getElementById("btn-limpiar-pedido");

// --- DATOS DEL MENÚ ---
// Array de objetos con todos los platos del restaurante.
// No modificar este array.
const menu = [
  { id: 1, nombre: "Tabla de fiambres",   descripcion: "Jamón, queso, aceitunas y pan casero",             precio: 3200, categoria: "entrada",   emoji: "🧀" },
  { id: 2, nombre: "Provoleta a la leña", descripcion: "Con oregáno fresco y tomates asados",               precio: 2800, categoria: "entrada",   emoji: "🍕" },
  { id: 3, nombre: "Empanadas (x4)",      descripcion: "A elección: carne cortada a cuchillo o caprese",    precio: 2400, categoria: "entrada",   emoji: "🥟" },
  { id: 4, nombre: "Bife de chorizo",     descripcion: "400g con papas fritas y ensalada mixta",            precio: 9800, categoria: "principal", emoji: "🥩" },
  { id: 5, nombre: "Pollo a la plancha",  descripcion: "Con vegetales salteados y arroz integral",          precio: 7200, categoria: "principal", emoji: "🍗" },
  { id: 6, nombre: "Milanesa napolitana", descripcion: "Con jamón, queso y tomate, más guarnición",         precio: 7800, categoria: "principal", emoji: "🍽️" },
  { id: 7, nombre: "Pasta del día",       descripcion: "Consultar relleno. Con salsa a elección",           precio: 6500, categoria: "principal", emoji: "🍝" },
  { id: 8, nombre: "Tiramisú",            descripcion: "Receta italiana clásica, porción generosa",         precio: 2200, categoria: "postre",    emoji: "☕" },
  { id: 9, nombre: "Flan con dulce",      descripcion: "Flan casero con dulce de leche y crema",            precio: 1800, categoria: "postre",    emoji: "🍮" },
  { id: 10, nombre: "Agua mineral",       descripcion: "500ml, con o sin gas",                              precio: 900,  categoria: "bebida",    emoji: "💧" },
  { id: 11, nombre: "Limonada natural",   descripcion: "Exprimida al momento, con o sin azúcar",            precio: 1400, categoria: "bebida",    emoji: "🍋" },
  { id: 12, nombre: "Vino de la casa",    descripcion: "Copa de tinto o blanco, según disponibilidad",      precio: 2100, categoria: "bebida",    emoji: "🍷" },
];

// --- ESTADO DEL PEDIDO ---
// Array donde se van acumulando los platos que el cliente elige.
// Cada elemento tiene la misma estructura que un plato del menú.
let pedido = [];

// ============================================================
// TAREA 1: Filtrar el menú
// ============================================================
// Esta función recibe el texto de búsqueda y la categoría
// seleccionada, y retorna un nuevo array con solo los platos
// que coinciden con AMBOS filtros.
//
// Reglas:
// - Si categoría es "todos", no filtrar por categoría
// - El texto de búsqueda es insensible a mayúsculas/minúsculas
//   Pista: usá .toLowerCase() en ambos lados de la comparación
// - Si el texto está vacío (""), mostrar todos (de esa categoría)
//
// Pista: usá .filter() con una función que retorne true/false
// Ejemplo: menu.filter(plato => plato.categoria === categoria)

function filtrarMenu(textoBusqueda, categoria) {
  // TODO: Filtrá el array menu con .filter()
  //       Dentro del filter, verificá las dos condiciones:
  //       1. Si categoria !== "todos", el plato.categoria debe coincidir
  //       2. Si textoBusqueda no está vacío, el plato.nombre (en minúsculas)
  //          debe incluir el textoBusqueda (en minúsculas)
  //       Retorná el array filtrado
  //
  // Pista: podés usar dos .filter() encadenados, o uno solo con &&
}

// ============================================================
// TAREA 2: Renderizar el menú
// ============================================================
// Recibe el array de platos a mostrar y los renderiza como
// tarjetas en el menuGrid.
//
// Si el array está vacío, mostrar un mensaje de "Sin resultados".
//
// El HTML de cada tarjeta es:
// <div class="plato-card">
//   <div class="plato-emoji">🥩</div>
//   <div class="plato-nombre">Bife de chorizo</div>
//   <div class="plato-descripcion">400g con papas...</div>
//   <div class="plato-footer">
//     <span class="plato-precio">$9800</span>
//     <span class="plato-categoria">principal</span>
//   </div>
//   <button class="btn-agregar" data-id="4">+ Agregar</button>
// </div>
//
// El data-id del botón es el id del plato — lo usamos para saber
// cuál plato agregar al pedido cuando se hace clic.
//
// Pista: usá .map() para transformar cada plato en su HTML,
//        luego .join("") para unirlos en un string,
//        y asignalo a menuGrid.innerHTML

function renderizarMenu(platos) {
  // TODO: Si platos.length === 0, asignar un mensaje de sin resultados
  //       a menuGrid.innerHTML y retornar

  // TODO: Actualizar contadorResultados.textContent con
  //       algo como: "Mostrando 5 de 12 platos"
  //       Pista: platos.length y menu.length

  // TODO: Usar .map() para transformar cada plato en su HTML
  //       Luego .join("") y asignar a menuGrid.innerHTML
  //
  // Pista para el template string de cada plato:
  // `<div class="plato-card">
  //    <div class="plato-emoji">${plato.emoji}</div>
  //    ...
  //    <button class="btn-agregar" data-id="${plato.id}">+ Agregar</button>
  //  </div>`
}

// ============================================================
// TAREA 3: Agregar al pedido
// ============================================================
// Cuando el cliente hace clic en "+ Agregar", hay que agregar
// ese plato al array pedido y actualizar la vista.
//
// Importante: si el plato ya está en el pedido, no lo agreguemos
// dos veces — simplemente ignoramos el clic.
//
// La función recibe el ID del plato (como número o string).
//
// Pista: usá .find() para buscar el plato en menu
// Pista: usá .some() para verificar si ya está en el pedido

function agregarAlPedido(idPlato) {
  // TODO: Convertí idPlato a número: Number(idPlato)

  // TODO: Usá .find() para obtener el plato del array menu
  //       Ejemplo: const plato = menu.find(p => p.id === id)

  // TODO: Verificá si el plato ya está en el pedido con .some()
  //       Si ya está, retorná sin hacer nada

  // TODO: Agregá el plato al array pedido con .push()

  // TODO: Llamá a renderizarPedido() para actualizar la vista
}

// ============================================================
// TAREA 4: Calcular el total del pedido
// ============================================================
// Recorre el array pedido y suma todos los precios.
// Retorna el total como número.
//
// Pista: usá .reduce()
// Ejemplo: pedido.reduce((acumulador, plato) => acumulador + plato.precio, 0)

function calcularTotal() {
  // TODO: Retornar la suma de todos los precios usando .reduce()
  //       Si el pedido está vacío, retornar 0
}

// ============================================================
// TAREA 5: Renderizar el pedido
// ============================================================
// Muestra los platos del pedido en el panel lateral.
//
// Si el pedido está vacío, mostrar el texto "Tu pedido está vacío".
//
// El HTML de cada item es:
// <li class="pedido-item">
//   <span class="pedido-item-nombre">Bife de chorizo</span>
//   <span class="pedido-item-precio">$9800</span>
// </li>
//
// También actualizá totalPedido.textContent con "$" + total

function renderizarPedido() {
  // TODO: Llamá a calcularTotal() y guardá el resultado

  // TODO: Si pedido.length === 0:
  //         listaPedido.innerHTML = "<li class='pedido-vacio'>Tu pedido está vacío</li>"
  //         totalPedido.textContent = "$0"
  //         retornar

  // TODO: Convertir pedido a HTML con .map() y .join("")
  //       Cada item: <li class="pedido-item">...</li>

  // TODO: Asignar el HTML a listaPedido.innerHTML

  // TODO: Actualizar totalPedido.textContent con "$" + total
}

// ============================================================
// TAREA 6: Limpiar el pedido
// ============================================================
// Vacía el array pedido y actualiza la vista.
//
// Pista: podés reasignar pedido = [] y llamar a renderizarPedido()

function limpiarPedido() {
  // TODO: Vaciar el array pedido

  // TODO: Llamar a renderizarPedido() para actualizar la vista
}

// ============================================================
// TAREA 7: Conectar el buscador y el filtro de categoría
// ============================================================
// Cada vez que el usuario escribe en el buscador o cambia
// la categoría, hay que filtrar y volver a renderizar el menú.
//
// Los eventos ya están escritos, solo completá los cuerpos.

function actualizarVista() {
  // TODO: Obtener el valor del buscador: inputBuscador.value
  // TODO: Obtener la categoría seleccionada: selectCategoria.value
  // TODO: Llamar a filtrarMenu(texto, categoria) y guardar el resultado
  // TODO: Llamar a renderizarMenu() con el resultado filtrado
}

inputBuscador.addEventListener("input", actualizarVista);
selectCategoria.addEventListener("change", actualizarVista);

// ============================================================
// DELEGACIÓN DE EVENTOS para los botones "Agregar"
// ============================================================
// En lugar de agregar un listener por cada botón, usamos
// delegación: escuchamos el clic en el contenedor y verificamos
// si el elemento clickeado tiene la clase "btn-agregar".
//
// El botón tiene data-id con el id del plato. Accedemos así:
// evento.target.dataset.id
//
// (no modificar — ya está implementada correctamente)
menuGrid.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-agregar")) {
    const id = evento.target.dataset.id;
    agregarAlPedido(id);
  }
});

btnLimpiar.addEventListener("click", limpiarPedido);

// ============================================================
// ARRANQUE — no modificar
// ============================================================
renderizarMenu(menu);
renderizarPedido();
