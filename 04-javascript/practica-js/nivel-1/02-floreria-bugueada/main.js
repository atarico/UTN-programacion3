// ============================================================
// 🌸 LA FLORERÍA DE FLOR — SISTEMA CON BUGS
// ============================================================
// Florencia tiene una florería y contrató a un dev que se fue
// sin avisar. El sistema tiene 3 bugs que hacen que los precios
// salgan completamente mal.
//
// Tu misión tiene DOS partes:
//   1. Encontrá y corregí los 3 bugs en las funciones existentes
//   2. Completá la función mostrarResumen() que quedó vacía
//
// Las funciones con bugs están marcadas con: // 🐛 BUG AQUÍ
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const inputRosas      = document.getElementById("cantidad-rosas");
const inputTulipanes  = document.getElementById("cantidad-tulipanes");
const inputGirasoles  = document.getElementById("cantidad-girasoles");
const btnCalcular     = document.getElementById("btn-calcular");
const resultadoContenido = document.getElementById("resultado-contenido");

// --- PRECIOS ---
const PRECIO_ROSA     = 250;
const PRECIO_TULIPAN  = 180;
const PRECIO_GIRASOL  = 120;
const ENVIO           = 500;
const MINIMO_ENVIO_GRATIS = 5000;
const MINIMO_DESCUENTO    = 10;
const PORCENTAJE_DESCUENTO = 0.10;

// ============================================================
// 🐛 BUG 1: calcularSubtotal
// ============================================================
// Esta función debería multiplicar la cantidad por el precio
// unitario para obtener el subtotal de cada tipo de flor.
// Pero algo está mal en la operación matemática...
//
// Ejemplo esperado: calcularSubtotal(5, 250) → 1250
// Ejemplo actual:   calcularSubtotal(5, 250) → ??? (¡incorrecto!)

function calcularSubtotal(cantidad, precioUnitario) {
  return cantidad + precioUnitario; // 🐛 BUG 1: arreglá el operador matemático
}

// ============================================================
// 🐛 BUG 2: aplicarDescuento
// ============================================================
// Florencia ofrece 10% de descuento cuando el pedido tiene
// 10 flores o más en total.
// La condición está mal: nunca aplica el descuento correctamente.
//
// Ejemplo: si cantidadTotal = 12, debe aplicar el descuento.
//          si cantidadTotal = 5, no debe aplicar descuento.

function aplicarDescuento(total, cantidadTotal) {
  if (cantidadTotal > 100) { // 🐛 BUG 2: la condición es incorrecta
    return total - total * PORCENTAJE_DESCUENTO;
  }
  return total;
}

// ============================================================
// 🐛 BUG 3: calcularEnvio
// ============================================================
// El envío es gratis cuando el total supera los $5000.
// Si no supera ese mínimo, el envío cuesta $500.
// Pero la lógica está al revés...
//
// Ejemplo: total = 6000 → envío GRATIS (debe retornar 0)
//          total = 2000 → envío = 500

function calcularEnvio(total) {
  if (total >= MINIMO_ENVIO_GRATIS) {
    return ENVIO; // 🐛 BUG 3: esto debería retornar 0 cuando el total es alto
  }
  return 0;
}

// ============================================================
// TAREA: completar mostrarResumen()
// ============================================================
// Esta función recibe las cantidades de cada flor,
// calcula todo usando las funciones de arriba (ya corregidas)
// y muestra el resumen en el panel de resultado.
//
// El HTML que debés generar con innerHTML se ve así:
//
// <div class="resultado-fila">
//   <span class="label">Rosas (5 x $250)</span>
//   <span class="valor">$1250</span>
// </div>
// ... (una fila por cada flor con cantidad > 0)
// <div class="resultado-fila">
//   <span class="label">Descuento (10%)</span>
//   <span class="valor">-$125</span>
// </div>
// <div class="resultado-fila">
//   <span class="label">Envío</span>
//   <span class="valor resultado-envio-gratis">Gratis 🎉</span>
// </div>
// <div class="resultado-fila">
//   <span class="label">TOTAL</span>
//   <span class="valor resultado-total">$1125</span>
// </div>

function mostrarResumen(rosas, tulipanes, girasoles) {
  // TODO: Calculá el subtotal de cada flor usando calcularSubtotal()
  //       Ejemplo: const subtotalRosas = calcularSubtotal(rosas, PRECIO_ROSA)

  // TODO: Calculá el total parcial (suma de los tres subtotales)

  // TODO: Calculá la cantidad total de flores (rosas + tulipanes + girasoles)

  // TODO: Aplicá el descuento usando aplicarDescuento(totalParcial, cantidadTotal)
  //       Guardalo en una variable "totalConDescuento"

  // TODO: Calculá el costo de envío usando calcularEnvio(totalConDescuento)

  // TODO: Calculá el total final (totalConDescuento + costoEnvio)

  // TODO: Construí el HTML del resumen y asignalo a resultadoContenido.innerHTML
  //       Incluí una fila por cada flor con cantidad > 0
  //       Una fila de descuento (si se aplicó)
  //       Una fila de envío (si es 0, mostrar "Gratis 🎉" con clase resultado-envio-gratis)
  //       Una fila de total final con clase resultado-total
  //
  //       Pista: usá template strings (comillas backtick `) para construir el HTML
  //       Pista: para el envío, podés usar el operador ternario:
  //              costoEnvio === 0 ? "Gratis 🎉" : "$" + costoEnvio
}

// ============================================================
// CONEXIÓN DE EVENTO (no modificar)
// ============================================================
btnCalcular.addEventListener("click", () => {
  const rosas     = parseInt(inputRosas.value) || 0;
  const tulipanes = parseInt(inputTulipanes.value) || 0;
  const girasoles = parseInt(inputGirasoles.value) || 0;

  mostrarResumen(rosas, tulipanes, girasoles);
});
