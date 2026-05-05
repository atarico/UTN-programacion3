// ============================================================
// 🎧 LA PLAYLIST DE NICOLÁS
// ============================================================
// Nicolás es DJ y tiene su colección de canciones en papel.
// Quiere digitalizarla: agregar canciones nuevas, eliminar las
// que ya no le gustan, reordenarlas, y ver estadísticas como
// la duración total y el género más repetido.
//
// Los datos iniciales ya están cargados. Tu trabajo: implementar
// las operaciones sobre el array usando spread, filter, sort, etc.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const listaPlaylist   = document.getElementById("lista-playlist");
const inputTitulo     = document.getElementById("input-titulo");
const inputArtista    = document.getElementById("input-artista");
const inputDuracion   = document.getElementById("input-duracion");
const inputGenero     = document.getElementById("input-genero");
const btnAgregar      = document.getElementById("btn-agregar");
const statTotal       = document.getElementById("stat-total");
const statDuracion    = document.getElementById("stat-duracion");
const statGenero      = document.getElementById("stat-genero");
const ordenInfo       = document.getElementById("orden-info");

// --- ESTADO: LA PLAYLIST ---
// Cada canción tiene: id, titulo, artista, duracion (en minutos), genero
// El array se va modificando con las operaciones del usuario.
let playlist = [
  { id: 1, titulo: "Bohemian Rhapsody",  artista: "Queen",             duracion: 5.9,  genero: "Rock"       },
  { id: 2, titulo: "Blinding Lights",    artista: "The Weeknd",        duracion: 3.4,  genero: "Pop"        },
  { id: 3, titulo: "Sandstorm",          artista: "Darude",            duracion: 3.8,  genero: "Electronic" },
  { id: 4, titulo: "HUMBLE.",            artista: "Kendrick Lamar",    duracion: 2.9,  genero: "Hip-Hop"    },
  { id: 5, titulo: "Take Five",          artista: "Dave Brubeck",      duracion: 5.4,  genero: "Jazz"       },
  { id: 6, titulo: "Smells Like Teen Spirit", artista: "Nirvana",      duracion: 5.0,  genero: "Rock"       },
];

// Contador para generar IDs únicos a las canciones nuevas
let proximoId = 7;

// ============================================================
// TAREA 1: Agregar una canción
// ============================================================
// Leer los valores de los inputs, crear un objeto canción,
// y agregarlo al array playlist usando el SPREAD OPERATOR.
//
// Importante: NO usar .push(). La idea es practicar spread:
// playlist = [...playlist, nuevaCancion]
//
// Reglas de validación:
// - El título y el artista no pueden estar vacíos
// - La duración debe ser un número mayor que 0
// Si hay error, mostrá un alert() con el mensaje apropiado.
//
// Después de agregar: limpiar los inputs y actualizar la vista.

function agregarCancion() {
  // TODO: Leer los valores de los inputs y guardarlos en variables
  //       Ejemplo: const titulo = inputTitulo.value.trim()

  // TODO: Validar que titulo y artista no estén vacíos
  //       Si lo están: alert("El título y el artista son obligatorios") y retornar

  // TODO: Validar que duracion sea un número mayor que 0
  //       Pista: parseFloat(inputDuracion.value)

  // TODO: Crear el objeto nuevaCancion con las propiedades:
  //       id (usar proximoId), titulo, artista, duracion, genero

  // TODO: Agregar la canción al array usando spread:
  //       playlist = [...playlist, nuevaCancion]

  // TODO: Incrementar proximoId (proximoId++)

  // TODO: Limpiar los inputs (asignar "" a .value de cada uno)

  // TODO: Llamar a renderizarPlaylist() y actualizarEstadisticas()
}

// ============================================================
// TAREA 2: Eliminar una canción
// ============================================================
// Recibe el ID de la canción a eliminar.
// Retorna un nuevo array SIN esa canción, usando .filter().
//
// La playlist se actualiza con el resultado.
// NO mutar el array original directamente.
//
// Pista: playlist = playlist.filter(cancion => cancion.id !== id)

function eliminarCancion(id) {
  // TODO: Reasignar playlist con .filter() excluyendo la canción con ese id
  //       Recordá convertir id a número: Number(id)

  // TODO: Llamar a renderizarPlaylist() y actualizarEstadisticas()
}

// ============================================================
// TAREA 3: Mover una canción hacia arriba
// ============================================================
// Intercambia la posición de la canción con la anterior.
// Si ya está en la primera posición, no hace nada.
//
// Pista: usá .findIndex() para encontrar el índice actual.
// Para intercambiar: creá una copia del array con [...playlist]
// y luego usá una variable temporal para el swap.
//
// Ejemplo de swap:
//   const temp = arr[i]
//   arr[i] = arr[i - 1]
//   arr[i - 1] = temp

function moverArriba(id) {
  // TODO: Encontrar el índice de la canción con .findIndex()
  //       const indice = playlist.findIndex(c => c.id === Number(id))

  // TODO: Si el índice es 0 (primera posición), retornar sin hacer nada

  // TODO: Crear una copia del array: const nueva = [...playlist]

  // TODO: Intercambiar nueva[indice] con nueva[indice - 1]

  // TODO: Reasignar playlist = nueva

  // TODO: Llamar a renderizarPlaylist()
}

// ============================================================
// TAREA 4: Mover una canción hacia abajo
// ============================================================
// Igual que moverArriba, pero intercambia con la siguiente.
// Si ya está en la última posición, no hace nada.

function moverAbajo(id) {
  // TODO: Encontrar el índice de la canción con .findIndex()

  // TODO: Si el índice es el último (playlist.length - 1), retornar

  // TODO: Crear copia, intercambiar con el siguiente, reasignar, renderizar
}

// ============================================================
// TAREA 5: Calcular la duración total
// ============================================================
// Suma la duración de todas las canciones y la retorna en minutos.
// Usá .reduce() con valor inicial 0.
//
// Ejemplo: playlist.reduce((total, cancion) => total + cancion.duracion, 0)

function calcularDuracionTotal() {
  // TODO: Retornar la suma usando .reduce()
}

// ============================================================
// TAREA 6: Encontrar el género predominante
// ============================================================
// Retorna el género que más se repite en la playlist.
// Si está vacía, retornar "-".
//
// Estrategia sugerida:
// 1. Crear un objeto contador: { Rock: 2, Pop: 1, ... }
//    Pista: usá .reduce() para construirlo
// 2. Encontrar la clave con el valor más alto
//    Pista: Object.keys(contador) te da los géneros
//           y .reduce() otra vez puede encontrar el máximo

function generoPredominante() {
  // TODO: Si playlist.length === 0, retornar "-"

  // TODO: Crear el objeto contador de géneros con .reduce()
  //       Ejemplo resultado esperado: { Rock: 2, Pop: 1, Electronic: 1 }

  // TODO: Encontrar el género con mayor frecuencia
  //       Pista: Object.keys(contador).reduce((max, genero) =>
  //                contador[genero] > contador[max] ? genero : max
  //              )

  // TODO: Retornar el género predominante
}

// ============================================================
// TAREA 7: Actualizar las estadísticas en pantalla
// ============================================================
// Llama a las funciones anteriores y actualiza los elementos.
//
// Formatos:
// - Total: número simple ("6")
// - Duración: número con 1 decimal + " min" ("25.4 min")
// - Género: string del género predominante

function actualizarEstadisticas() {
  // TODO: Actualizar statTotal.textContent con playlist.length

  // TODO: Calcular duración total con calcularDuracionTotal()
  //       Mostrar con .toFixed(1) + " min"

  // TODO: Actualizar statGenero.textContent con generoPredominante()
}

// ============================================================
// TAREA 8: Renderizar la playlist
// ============================================================
// Muestra todas las canciones de la playlist como items de lista.
//
// Si está vacía, mostrar mensaje "La playlist está vacía".
//
// El HTML de cada canción:
// <li class="cancion-item">
//   <span class="cancion-numero">1</span>
//   <div class="cancion-info">
//     <div class="cancion-titulo">Bohemian Rhapsody</div>
//     <div class="cancion-sub">
//       <span>Queen</span>
//       <span class="cancion-genero-badge">Rock</span>
//     </div>
//   </div>
//   <span class="cancion-duracion">5.9 min</span>
//   <div class="cancion-acciones">
//     <button class="btn-accion btn-subir" data-id="1">↑</button>
//     <button class="btn-accion btn-bajar" data-id="1">↓</button>
//     <button class="btn-accion btn-eliminar" data-id="1">✕</button>
//   </div>
// </li>
//
// Pista: usá .map() con el índice (segundo parámetro de la función)
// para mostrar el número de posición: playlist.map((cancion, indice) => ...)

function renderizarPlaylist() {
  // TODO: Si playlist.length === 0, mostrar mensaje vacío y retornar

  // TODO: Mapear cada canción a su HTML con .map((cancion, indice) => ...)
  //       Recordá usar data-id="${cancion.id}" en los botones

  // TODO: Asignar el resultado (con .join("")) a listaPlaylist.innerHTML
}

// ============================================================
// DELEGACIÓN DE EVENTOS (no modificar)
// ============================================================
listaPlaylist.addEventListener("click", (evento) => {
  const btn = evento.target.closest(".btn-accion");
  if (!btn) return;
  const id = btn.dataset.id;

  if (btn.classList.contains("btn-subir"))    moverArriba(id);
  if (btn.classList.contains("btn-bajar"))    moverAbajo(id);
  if (btn.classList.contains("btn-eliminar")) eliminarCancion(id);
});

btnAgregar.addEventListener("click", agregarCancion);

// ============================================================
// ARRANQUE — no modificar
// ============================================================
renderizarPlaylist();
actualizarEstadisticas();
