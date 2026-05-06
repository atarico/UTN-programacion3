// ============================================================
// 🏆 PANEL DE LOGROS DE SOFÍA
// ============================================================
// Sofía juega videojuegos y quiere trackear sus logros.
// Quiere que se vean bloqueados/desbloqueados, con una
// animación cuando se desbloquea uno, una barra de progreso
// y que todo persista aunque cierre el navegador.
//
// Este ejercicio usa DOS patrones avanzados:
//   1. CLASES ES6: para modelar cada logro como objeto
//   2. CLOSURE FACTORY: para gestionar la colección de logros
//
// Conceptos: class, constructor, métodos, closures, localStorage.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const logrosGrid      = document.getElementById("logros-grid");
const barraProgreso   = document.getElementById("barra-progreso");
const textoProgreso   = document.getElementById("texto-progreso");
const historialLista  = document.getElementById("historial-lista");
const btnResetear     = document.getElementById("btn-resetear");

const LOGROS_KEY = "panel-logros-estado";

// ============================================================
// TAREA 1: Definir la clase Logro
// ============================================================
// Un logro tiene:
// - id:          string único (ej: "primera-victoria")
// - nombre:      string legible (ej: "Primera Sangre")
// - descripcion: string con la condición (ej: "Ganá tu primera partida")
// - icono:       emoji del logro
// - desbloqueado: boolean (false por defecto)
// - horaDesbloqueo: string o null (null hasta que se desbloquee)
//
// Métodos:
// - desbloquear(): cambia desbloqueado a true y registra la hora
// - estaDesbloqueado(): retorna el valor de desbloqueado

class Logro {
  // TODO: constructor(id, nombre, descripcion, icono)
  //       Asignar cada parámetro como propiedad (this.id = id, etc.)
  //       Inicializar desbloqueado en false
  //       Inicializar horaDesbloqueo en null

  // TODO: desbloquear()
  //       Si ya está desbloqueado, retornar sin hacer nada
  //       Si no: this.desbloqueado = true
  //              this.horaDesbloqueo = new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })

  // TODO: estaDesbloqueado()
  //       return this.desbloqueado
}

// ============================================================
// LISTA DE LOGROS DISPONIBLES
// (no modificar — usa la clase Logro que definiste arriba)
// ============================================================
const LOGROS_DEFINICION = [
  new Logro("primera-victoria",   "Primera Sangre",     "Ganá tu primera partida",              "⚔️"),
  new Logro("tres-victorias",     "Racha Ganadora",     "Ganá 3 partidas seguidas",             "🔥"),
  new Logro("coleccionista",      "Coleccionista",      "Coleccioná tu primer ítem especial",   "🌟"),
  new Logro("explorador",         "Explorador Nato",    "Explorá 5 zonas del mapa",             "🗺️"),
  new Logro("ayudador",           "Buen Equipo",        "Ayudá a un aliado 3 veces",            "🤝"),
  new Logro("todo-terreno",       "Todo Terreno",       "Desbloqueá 3 logros diferentes",       "🏅"),
  new Logro("mitad-camino",       "A Mitad de Camino",  "Desbloqueá la mitad de los logros",    "🎯"),
  new Logro("completista",        "Completista",        "¡Desbloqueá TODOS los logros!",        "🏆"),
];

// ============================================================
// TAREA 2: Crear el closure factory del gestor de logros
// ============================================================
// Esta función crea y retorna un objeto que gestiona el estado
// de los logros. El array "logros" es PRIVADO.
//
// Recibe "definiciones" (el array de instancias de Logro).
//
// Retorna un objeto con estos métodos:
// - obtenerLogros(): retorna el array de logros
// - obtenerDesbloqueados(): retorna solo los logros desbloqueados
// - contarDesbloqueados(): retorna la cantidad
// - desbloquearSiNecesario(id): desbloquea el logro con ese id
//   SOLO si no estaba desbloqueado antes. Retorna true si lo desbloqueó,
//   false si ya estaba desbloqueado.
// - guardar(): serializa el estado en localStorage
// - cargar(): lee localStorage y restaura el estado desbloqueado de cada logro

function crearGestorDeLogros(definiciones) {
  // El array de instancias — privado dentro del closure
  const logros = definiciones;

  return {

    // ── TAREA 2a: obtenerLogros ──
    obtenerLogros() {
      // TODO: return logros
    },

    // ── TAREA 2b: obtenerDesbloqueados ──
    // Retornar los logros cuyo estaDesbloqueado() sea true
    obtenerDesbloqueados() {
      // TODO: return logros.filter(l => l.estaDesbloqueado())
    },

    // ── TAREA 2c: contarDesbloqueados ──
    contarDesbloqueados() {
      // TODO: return this.obtenerDesbloqueados().length
    },

    // ── TAREA 2d: desbloquearSiNecesario ──
    // Buscar el logro con el id dado.
    // Si no está desbloqueado: llamar a logro.desbloquear() y retornar true
    // Si ya estaba desbloqueado: retornar false (sin hacer nada)
    desbloquearSiNecesario(id) {
      // TODO: const logro = logros.find(l => l.id === id)
      // TODO: if (!logro || logro.estaDesbloqueado()) return false
      // TODO: logro.desbloquear()
      // TODO: return true
    },

    // ── TAREA 2e: guardar ──
    // Guardar en localStorage un array con el estado de cada logro:
    // [{ id: "primera-victoria", desbloqueado: true, horaDesbloqueo: "14:32" }, ...]
    guardar() {
      // TODO: const estado = logros.map(l => ({
      //         id: l.id,
      //         desbloqueado: l.desbloqueado,
      //         horaDesbloqueo: l.horaDesbloqueo
      //       }))
      // TODO: localStorage.setItem(LOGROS_KEY, JSON.stringify(estado))
    },

    // ── TAREA 2f: cargar ──
    // Leer el estado guardado y restaurar el estado de cada logro.
    // Pista: recorrí el array guardado y, para los que tengan
    // desbloqueado: true, encontrá el logro correspondiente y
    // llamá a logro.desbloquear() para restaurar su estado.
    cargar() {
      // TODO: const guardado = localStorage.getItem(LOGROS_KEY)
      // TODO: if (!guardado) return (nada que cargar)
      // TODO: const estado = JSON.parse(guardado)
      // TODO: estado.forEach(s => {
      //         if (s.desbloqueado) {
      //           const logro = logros.find(l => l.id === s.id)
      //           if (logro) logro.desbloquear()
      //         }
      //       })
    },

  };
}

// ============================================================
// INSTANCIA DEL GESTOR (no modificar)
// ============================================================
const gestor = crearGestorDeLogros(LOGROS_DEFINICION);

// ============================================================
// TAREA 3: Renderizar el grid de logros
// ============================================================
// Muestra todos los logros como cards.
// Las cards bloqueadas tienen clase "bloqueado".
// Las desbloqueadas tienen clase "desbloqueado".
// Si se acaba de desbloquear (parámetro idNuevo), agregarle
// también la clase "nuevo" para que se anime.
//
// HTML de cada logro:
// <div class="logro-card [bloqueado|desbloqueado] [nuevo]" data-id="${logro.id}">
//   <div class="logro-icono">${logro.icono}</div>
//   <div class="logro-nombre">${logro.nombre}</div>
//   <div class="logro-descripcion">${logro.descripcion}</div>
//   <div class="logro-estado">${logro.estaDesbloqueado() ? "Desbloqueado ✓" : "Bloqueado 🔒"}</div>
//   ${logro.estaDesbloqueado() ? `<div class="logro-hora">${logro.horaDesbloqueo}</div>` : ""}
// </div>

function renderizarLogros(idNuevo = null) {
  const logros = gestor.obtenerLogros();

  // TODO: Mapear logros a HTML con .map().join("")
  //       Calcular la clase: bloqueado o desbloqueado
  //       Si logro.id === idNuevo, agregar también la clase "nuevo"

  // TODO: Asignar a logrosGrid.innerHTML
}

// ============================================================
// TAREA 4: Actualizar la barra de progreso
// ============================================================
// Calcula el porcentaje de logros desbloqueados y actualiza:
// - barraProgreso.style.width con el porcentaje + "%"
// - textoProgreso.textContent con "X / Y logros"

function actualizarProgreso() {
  const total         = gestor.obtenerLogros().length;
  const desbloqueados = gestor.contarDesbloqueados();
  const porcentaje    = total > 0 ? (desbloqueados / total) * 100 : 0;

  // TODO: barraProgreso.style.width = porcentaje.toFixed(0) + "%"
  // TODO: textoProgreso.textContent = `${desbloqueados} / ${total} logros`
}

// ============================================================
// TAREA 5: Agregar al historial
// ============================================================
// Cada vez que algo pasa (acción simulada o logro desbloqueado),
// agregamos un item al historial.
//
// El HTML de cada item:
// <li class="historial-item">
//   <span class="historial-hora">14:32</span>
//   <span class="historial-texto">⚔️ Acción: Ganar partida</span>
// </li>

function agregarAlHistorial(texto) {
  const hora = new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });

  // TODO: Si hay un li con clase "historial-vacio", removelo

  // TODO: Crear el HTML del item de historial

  // TODO: Insertar al principio con insertAdjacentHTML("afterbegin", html)
}

// ============================================================
// TAREA 6: Verificar logros de meta
// ============================================================
// Algunos logros se desbloquean automáticamente cuando se
// alcanzan ciertas condiciones (no por acción directa):
// - "todo-terreno": cuando se tienen 3 logros desbloqueados
// - "mitad-camino": cuando se tiene la mitad (4 de 8)
// - "completista":  cuando se tienen todos (8 de 8)
//
// Esta función verifica esas condiciones y desbloquea si corresponde.

function verificarLogrosMeta() {
  const cant = gestor.contarDesbloqueados();

  // TODO: Si cant >= 3 y el logro "todo-terreno" no está desbloqueado:
  //       desbloquear con gestor.desbloquearSiNecesario("todo-terreno")
  //       Si retorna true: agregarAlHistorial y renderizar con animación

  // TODO: Igual para "mitad-camino" cuando cant >= 4

  // TODO: Igual para "completista" cuando cant >= 8
}

// ============================================================
// TAREA 7: Manejar las acciones simuladas
// ============================================================
// Cada botón del panel simula una acción. Según la acción,
// se intenta desbloquear el logro correspondiente.
//
// Mapeo de acción → id de logro:
//   "primera-victoria" → "primera-victoria"
//   "victoria-seguida" → "tres-victorias"
//   "coleccionar"      → "coleccionista"
//   "explorar"         → "explorador"
//   "ayudar-aliado"    → "ayudador"

function manejarAccion(accion) {
  const mapa = {
    "primera-victoria": "primera-victoria",
    "victoria-seguida": "tres-victorias",
    "coleccionar":      "coleccionista",
    "explorar":         "explorador",
    "ayudar-aliado":    "ayudador",
  };

  const idLogro = mapa[accion];
  const nombreAccion = {
    "primera-victoria": "Ganar partida",
    "victoria-seguida": "Ganar 3 seguidas",
    "coleccionar":      "Coleccionar item",
    "explorar":         "Explorar zona",
    "ayudar-aliado":    "Ayudar aliado",
  }[accion];

  // TODO: Registrar la acción en el historial
  //       Ejemplo: agregarAlHistorial("⚔️ Acción: Ganar partida")

  // TODO: Llamar a gestor.desbloquearSiNecesario(idLogro)
  //       Si retorna true (lo desbloqueó):
  //         Llamar a gestor.guardar()
  //         Registrar en historial que se desbloqueó el logro
  //         Llamar a renderizarLogros(idLogro) para mostrar animación
  //         Llamar a actualizarProgreso()
  //         Llamar a verificarLogrosMeta()

  // TODO: Si ya estaba desbloqueado (retorna false):
  //         Simplemente llamar a renderizarLogros() sin animación
}

// ============================================================
// RESETEAR TODO
// ============================================================
function resetearTodo() {
  if (!confirm("¿Resetear todos los logros de Sofía?")) return;

  // TODO: localStorage.removeItem(LOGROS_KEY)
  // TODO: Reinicializar cada logro: asignar desbloqueado = false y horaDesbloqueo = null
  //       Pista: gestor.obtenerLogros().forEach(l => { l.desbloqueado = false; l.horaDesbloqueo = null })
  // TODO: Limpiar el historial: historialLista.innerHTML = "<li class='historial-vacio'>Sin actividad registrada</li>"
  // TODO: Llamar a renderizarLogros() y actualizarProgreso()
}

// ============================================================
// CONEXIÓN DE EVENTOS (no modificar)
// ============================================================
document.querySelectorAll(".btn-accion[data-accion]").forEach(btn => {
  btn.addEventListener("click", () => manejarAccion(btn.dataset.accion));
});

btnResetear.addEventListener("click", resetearTodo);

// ============================================================
// ARRANQUE — no modificar
// ============================================================
gestor.cargar();
renderizarLogros();
actualizarProgreso();
