// ============================================================
// 🏥 CONSULTORIO DRA. VALERIA — SISTEMA DE TURNOS
// ============================================================
// La doctora Valeria llevaba los turnos de su consultorio en
// papelitos. Te pidió que le armes un sistema digital donde
// pueda registrar pacientes que llegan, ver quién está en
// espera, y marcar cuando alguien fue atendido.
//
// Conceptos clave: arrays de objetos, spread para agregar,
// filter para separar por estado, y Date para la hora.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const inputNombre    = document.getElementById("input-nombre");
const inputTipo      = document.getElementById("input-tipo");
const btnRegistrar   = document.getElementById("btn-registrar");
const listaEspera    = document.getElementById("lista-espera");
const listaAtendidos = document.getElementById("lista-atendidos");
const statEspera     = document.getElementById("stat-espera");
const statAtendidos  = document.getElementById("stat-atendidos");
const turnoActual    = document.getElementById("turno-actual");

// --- ESTADO ---
// Array de todos los turnos del día.
// Cada turno es un objeto con estas propiedades:
//   id: número único
//   nombre: string con el nombre del paciente
//   tipo: string con el tipo de consulta
//   hora: string con la hora de llegada (formato "HH:MM")
//   numero: número de turno asignado automáticamente
//   atendido: boolean (false = en espera, true = atendido)
let turnos = [];
let proximoNumero = 1;

// ============================================================
// TAREA 1: Registrar un nuevo paciente
// ============================================================
// Leer el nombre y tipo del formulario, crear el objeto turno
// y agregarlo al array usando SPREAD OPERATOR (no usar .push()).
//
// El número de turno se asigna automáticamente con proximoNumero.
// La hora de llegada se obtiene con: new Date().toLocaleTimeString("es-AR", {hour: "2-digit", minute: "2-digit"})
//
// Validación: el nombre no puede estar vacío.
// Si está vacío: alert("Ingresá el nombre del paciente") y retornar.

function registrarPaciente() {
  // TODO: Leer el nombre del input: inputNombre.value.trim()
  //       Si está vacío, alertar y retornar

  // TODO: Leer el tipo del select: inputTipo.value

  // TODO: Obtener la hora actual con new Date().toLocaleTimeString(...)

  // TODO: Crear el objeto nuevoTurno con:
  //       id: proximoNumero
  //       nombre: (el nombre leído)
  //       tipo: (el tipo leído)
  //       hora: (la hora obtenida)
  //       numero: proximoNumero
  //       atendido: false

  // TODO: Agregar al array usando spread:
  //       turnos = [...turnos, nuevoTurno]

  // TODO: Incrementar proximoNumero (proximoNumero++)

  // TODO: Limpiar el input de nombre (inputNombre.value = "")

  // TODO: Llamar a renderizarTurnos() para actualizar la vista
}

// ============================================================
// TAREA 2: Marcar un turno como atendido
// ============================================================
// Recibe el ID del turno y cambia su propiedad atendido a true.
// Importante: NO modificar el objeto directamente. Usá .map()
// para crear un nuevo array donde solo ese turno cambia.
//
// Pista: turnos = turnos.map(turno =>
//   turno.id === id ? { ...turno, atendido: true } : turno
// )
// El spread { ...turno, atendido: true } crea una COPIA del objeto
// con esa propiedad cambiada — sin mutar el original.

function atenderPaciente(id) {
  // TODO: Reasignar turnos usando .map()
  //       Si el turno.id === Number(id), retornar { ...turno, atendido: true }
  //       Si no, retornar el turno sin cambios

  // TODO: Llamar a renderizarTurnos()
}

// ============================================================
// TAREA 3: Actualizar los contadores del encabezado
// ============================================================
// Calcula cuántos turnos están en espera y cuántos atendidos,
// y actualiza los elementos del header.
// También actualiza el "turno actual" (el número del último atendido).
//
// Pista: usá .filter() para separar por la propiedad atendido

function actualizarContadores() {
  // TODO: Filtrar los turnos en espera: turnos.filter(t => !t.atendido)
  //       y los atendidos: turnos.filter(t => t.atendido)

  // TODO: Actualizar statEspera.textContent con la cantidad en espera

  // TODO: Actualizar statAtendidos.textContent con la cantidad atendidos

  // TODO: Si hay turnos atendidos, mostrar en turnoActual.textContent
  //       el numero del ÚLTIMO atendido (el de mayor índice en el array filtrado)
  //       Pista: arrayAtendidos[arrayAtendidos.length - 1].numero
  //       Si no hay atendidos, mostrar "—"
}

// ============================================================
// TAREA 4: Renderizar la lista de espera
// ============================================================
// Muestra los turnos con atendido === false en listaEspera.
// Cada item tiene un botón "Atender" con data-id del turno.
//
// Si no hay turnos en espera, mostrar "Sin pacientes en espera".
//
// El HTML de cada turno en espera:
// <li class="turno-item">
//   <div class="turno-header">
//     <span class="turno-numero">Turno #3</span>
//     <span class="turno-hora">10:45</span>
//   </div>
//   <div class="turno-nombre">Ana García</div>
//   <div class="turno-tipo">
//     <span>Urgencia</span>
//     <button class="btn-atender" data-id="3">Atender ✓</button>
//   </div>
// </li>

function renderizarEspera(enEspera) {
  // TODO: Si enEspera.length === 0, mostrar li con clase "turno-vacio" y retornar

  // TODO: Mapear cada turno a su HTML, join(""), asignar a listaEspera.innerHTML
}

// ============================================================
// TAREA 5: Renderizar la lista de atendidos
// ============================================================
// Similar a renderizarEspera pero para los turnos atendidos.
// No tienen botón "Atender" — solo muestran la info.

function renderizarAtendidos(atendidos) {
  // TODO: Si atendidos.length === 0, mostrar li con clase "turno-vacio" y retornar

  // TODO: Mapear cada turno atendido a su HTML (sin el botón Atender)
  //       Podés agregar una línea que diga "Atendido ✓" en lugar del botón
}

// ============================================================
// FUNCIÓN PRINCIPAL: renderizarTurnos()
// ============================================================
// Separa los turnos en dos grupos y llama a las funciones
// de renderizado correspondientes. También actualiza contadores.
//
// Esta función es el punto de entrada para actualizar toda la vista.

function renderizarTurnos() {
  // TODO: Separar con .filter() en: enEspera y atendidos

  // TODO: Llamar a renderizarEspera(enEspera)

  // TODO: Llamar a renderizarAtendidos(atendidos)

  // TODO: Llamar a actualizarContadores()
}

// ============================================================
// DELEGACIÓN DE EVENTOS para botones "Atender" (no modificar)
// ============================================================
listaEspera.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-atender")) {
    atenderPaciente(evento.target.dataset.id);
  }
});

btnRegistrar.addEventListener("click", registrarPaciente);

inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") registrarPaciente();
});

// ============================================================
// ARRANQUE — no modificar
// ============================================================
renderizarTurnos();
