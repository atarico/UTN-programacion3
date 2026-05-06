// ============================================================
// 🏪 EL KIOSCO DE DON RAÚL
// ============================================================
// Don Raúl tiene un kiosco de barrio y quiere automatizar
// dos cosas: calcular el vuelto exacto cuando un cliente paga,
// y llevar el registro de cuántas ventas hizo en el día junto
// con el total recaudado.
//
// La interfaz ya está lista. Tu trabajo: la lógica del negocio.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const inputPrecio     = document.getElementById("precio-producto");
const inputPago       = document.getElementById("monto-pago");
const btnCobrar       = document.getElementById("btn-cobrar");
const panelResultado  = document.getElementById("resultado");
const historialLista  = document.getElementById("historial-ventas");
const contadorVentas  = document.getElementById("total-ventas");
const contadorTotal   = document.getElementById("total-recaudado");

// --- ESTADO DEL DÍA ---
// Estas variables guardan el estado del kiosco durante el día.
// Cada vez que Don Raúl cobra, los valores se actualizan.
let cantidadVentas = 0;
let totalRecaudado = 0;

// ============================================================
// TAREA 1: Calcular el vuelto
// ============================================================
// Recibe el precio del producto y el monto con el que paga el
// cliente. Retorna el vuelto que hay que dar.
//
// Casos posibles:
// - Si el cliente paga exacto (pago === precio) → vuelto = 0
// - Si el cliente paga más → vuelto = pago - precio
// - Si el cliente paga menos → NO es válido, retornar -1
//   (usamos -1 como señal de error, ya que el vuelto nunca
//    puede ser negativo en una venta real)
//
// Pista: un simple if/else alcanza para los tres casos

function calcularVuelto(precio, pago) {
  // TODO: Si pago < precio, retornar -1 (pago insuficiente)

  // TODO: Si no, retornar pago - precio
}

// ============================================================
// TAREA 2: Registrar la venta
// ============================================================
// Cuando Don Raúl hace una venta exitosa, hay que actualizar
// los contadores del encabezado (ventas del día y total recaudado).
//
// Pista: incrementá cantidadVentas y sumá el precio a totalRecaudado.
// Luego actualizá el .textContent de contadorVentas y contadorTotal.
// Para el total, mostrar con formato: "$" + totalRecaudado

function registrarVenta(precio) {
  // TODO: Incrementá cantidadVentas en 1 (cantidadVentas++)

  // TODO: Sumá el precio a totalRecaudado

  // TODO: Actualizá contadorVentas.textContent con el nuevo valor

  // TODO: Actualizá contadorTotal.textContent con "$" + totalRecaudado
}

// ============================================================
// TAREA 3: Agregar al historial
// ============================================================
// Cada venta exitosa aparece en la lista de "Últimas ventas".
// Si era la primera venta, hay que borrar el texto "Sin ventas registradas".
//
// El HTML de cada item del historial es:
// <li class="historial-item">
//   <span class="h-precio">Producto: $500</span>
//   <span class="h-vuelto">Vuelto: $200</span>
// </li>
//
// Pista 1: usá insertAdjacentHTML("afterbegin", html) para agregar
//          al principio de la lista (el más reciente primero)
// Pista 2: para borrar el estado vacío inicial, revisá si el primer
//          elemento tiene la clase "historial-vacio" y removelo

function agregarAlHistorial(precio, vuelto) {
  // TODO: Si el primer elemento tiene clase "historial-vacio", removelo
  //       Pista: historialLista.querySelector(".historial-vacio")?.remove()

  // TODO: Creá el HTML de la nueva fila (usá template string)
  //       La clase del span de vuelto debe ser "h-vuelto"
  //       El texto del vuelto: si es 0 mostrar "Exacto 👌", si no "$" + vuelto

  // TODO: Insertá ese HTML al principio de historialLista con insertAdjacentHTML
}

// ============================================================
// TAREA 4: Mostrar el resultado en pantalla
// ============================================================
// Esta función lee los inputs, calcula el vuelto y muestra
// el resultado en el panel central.
//
// Casos a manejar:
// A) El cliente paga menos → mostrar mensaje de error
// B) El cliente paga exacto → mostrar "¡Pago exacto! 👌"
// C) El cliente paga más → mostrar el vuelto en grande
//
// En los casos B y C, registrá la venta y agregala al historial.
//
// El HTML para el caso de éxito (C) es:
// <div class="resultado-ok">
//   <div class="vuelto-grande">
//     <span class="vuelto-label">Vuelto a dar</span>
//     <span class="vuelto-valor">$300</span>
//   </div>
//   <div class="resultado-detalle">
//     <span>Precio</span><span>$500</span>
//   </div>
//   <div class="resultado-detalle">
//     <span>Pagó con</span><span>$800</span>
//   </div>
// </div>

function cobrar() {
  // TODO: Leer los valores de inputPrecio y inputPago con parseFloat()
  //       Si alguno es NaN (no se ingresó nada), no hacés nada
  //       Pista: isNaN(valor) devuelve true si no es un número

  // TODO: Llamá a calcularVuelto(precio, pago)

  // TODO: Si el resultado es -1:
  //         Mostrar un mensaje de error en panelResultado.innerHTML
  //         Pista: <div class="resultado-error"><p class="texto-error">...</p></div>

  // TODO: Si el resultado es 0 o positivo:
  //         Llamá a registrarVenta(precio)
  //         Llamá a agregarAlHistorial(precio, vuelto)
  //         Mostrar el resultado en panelResultado.innerHTML
  //         (usá el HTML de ejemplo de arriba)

  // TODO: Limpiar los inputs después de cobrar
  //         inputPrecio.value = ""
  //         inputPago.value = ""
  //         inputPrecio.focus()
}

// ============================================================
// CONEXIÓN DE EVENTO (no modificar)
// ============================================================
btnCobrar.addEventListener("click", cobrar);

// Bonus: permitir cobrar con Enter desde cualquier input
inputPago.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") cobrar();
});
