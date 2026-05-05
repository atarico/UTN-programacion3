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

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const stockMountain   = document.getElementById("stock-mountain");
const stockBmx        = document.getElementById("stock-bmx");
const stockRuta       = document.getElementById("stock-ruta");
const panelAlertas    = document.getElementById("alertas");

const btnSumarMountain  = document.getElementById("btn-sumar-mountain");
const btnRestarMountain = document.getElementById("btn-restar-mountain");
const btnSumarBmx       = document.getElementById("btn-sumar-bmx");
const btnRestarBmx      = document.getElementById("btn-restar-bmx");
const btnSumarRuta      = document.getElementById("btn-sumar-ruta");
const btnRestarRuta     = document.getElementById("btn-restar-ruta");

// --- ESTADO INICIAL ---
// Juan empieza el día con estas cantidades en su depósito:
const stock = {
  mountain: 5,
  bmx: 3,
  ruta: 8,
};

// ============================================================
// TAREA 1: Mostrar el stock en pantalla
// ============================================================
// Cuando la página carga, Juan necesita ver cuántas bicicletas
// tiene de cada tipo en las tarjetas de la pantalla.
//
// Para cambiar el texto de un elemento usás .textContent
// Ejemplo: stockMountain.textContent = stock.mountain

function mostrarStock() {
  // TODO: Asigna el valor de stock.mountain al .textContent de stockMountain

  // TODO: Asigna el valor de stock.bmx al .textContent de stockBmx

  // TODO: Asigna el valor de stock.ruta al .textContent de stockRuta
}

// ============================================================
// TAREA 2: Sumar una bicicleta
// ============================================================
// Llegó un proveedor y Juan quiere registrar unidades nuevas.
// Esta función recibe el TIPO de bici como string ("mountain",
// "bmx" o "ruta") y suma 1 al stock de ese tipo.
//
// Pista: stock[tipo] accede dinámicamente a la propiedad.
// Si tipo = "bmx", entonces stock[tipo] es igual a stock.bmx

function sumarBici(tipo) {
  // TODO: Suma 1 al stock[tipo]

  // TODO: Llamá a mostrarStock() para reflejar el cambio en pantalla

  // TODO: Llamá a verificarAlertas() para actualizar el panel de alertas
}

// ============================================================
// TAREA 3: Restar una bicicleta
// ============================================================
// Juan vendió una bici. Hay que restarla del stock.
// Importante: el stock no puede quedar negativo.
// Si el stock de ese tipo ya es 0, no hay que hacer nada.
//
// Pista: usá un if para verificar antes de restar

function restarBici(tipo) {
  // TODO: Verificá si stock[tipo] es mayor que 0
  //         Si SÍ: restá 1 a stock[tipo], llamá a mostrarStock() y verificarAlertas()
  //         Si NO: podés mostrar un mensaje en consola ("Sin stock de " + tipo)
}

// ============================================================
// TAREA 4: Verificar alertas de stock bajo
// ============================================================
// Juan quiere saber cuando algún tipo de bici baja de 3 unidades.
//
// Reglas:
// - Si todos tienen 3 o más → mostrar "Todo en orden ✅" con clase "alerta-ok"
// - Si alguno tiene menos de 3 → mostrar "⚠️ Stock bajo: Mountain Bike, BMX"
//   (listá todos los que estén en riesgo) con clase "alerta-warning"
//
// Pista 1: creá un array vacío y usá .push() para agregar los que están bajo
// Pista 2: .join(", ") une los elementos de un array con coma
// Pista 3: para cambiar la clase CSS usá: panelAlertas.className = "alerta-ok"

function verificarAlertas() {
  const enAlerta = [];

  // TODO: Si stock.mountain < 3, hacé: enAlerta.push("Mountain Bike")

  // TODO: Si stock.bmx < 3, hacé: enAlerta.push("BMX")

  // TODO: Si stock.ruta < 3, hacé: enAlerta.push("Ruta")

  // TODO: Si enAlerta.length > 0:
  //         Mostrá en panelAlertas.textContent: "⚠️ Stock bajo: " + enAlerta.join(", ")
  //         Cambiar panelAlertas.className a "alertas-texto alerta-warning"
  //       Si no:
  //         Mostrá "Todo en orden ✅"
  //         Cambiar panelAlertas.className a "alertas-texto alerta-ok"
}

// ============================================================
// CONEXIÓN DE EVENTOS
// Los addEventListener ya están escritos. Solo completá
// el cuerpo de cada función flecha con la llamada correcta.
// ============================================================

btnSumarMountain.addEventListener("click", () => {
  // TODO: Llamá a sumarBici() con el string "mountain"
});

btnRestarMountain.addEventListener("click", () => {
  // TODO: Llamá a restarBici() con el string "mountain"
});

btnSumarBmx.addEventListener("click", () => {
  // TODO: Llamá a sumarBici() con el tipo correcto
});

btnRestarBmx.addEventListener("click", () => {
  // TODO: Llamá a restarBici() con el tipo correcto
});

btnSumarRuta.addEventListener("click", () => {
  // TODO: Llamá a sumarBici() con el tipo correcto
});

btnRestarRuta.addEventListener("click", () => {
  // TODO: Llamá a restarBici() con el tipo correcto
});

// ============================================================
// ARRANQUE — no modificar
// ============================================================
mostrarStock();
verificarAlertas();
