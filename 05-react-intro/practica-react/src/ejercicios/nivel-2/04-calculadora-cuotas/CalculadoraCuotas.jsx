// ============================================================
// 💳 CALCULADORA DE CUOTAS — CréditoYa
// ============================================================
// CréditoYa es una financiera y sus asesores necesitan calcular
// rápidamente el valor de las cuotas según el monto a financiar,
// la cantidad de cuotas y la tasa de interés mensual.
//
// Conceptos: useState múltiple, inputs controlados (number + select),
// valores calculados DERIVADOS del estado (sin useMemo), y
// renderizado condicional del resultado.
// ============================================================

import { useState } from 'react'
import './CalculadoraCuotas.css'

// Tasas de interés según cantidad de cuotas (no modificar)
const TASAS = {
  3:  0.04,   // 4% mensual
  6:  0.055,  // 5.5% mensual
  12: 0.07,   // 7% mensual
  18: 0.085,  // 8.5% mensual
  24: 0.10,   // 10% mensual
}

function CalculadoraCuotas() {
  // ── TAREA 1: Declarar el estado ─────────────────────────────
  // Necesitás tres estados:
  // 1. "monto": number — el monto a financiar. Valor inicial: ""
  // 2. "cuotas": number — cantidad de cuotas. Valor inicial: 12
  // 3. "mostrarResultado": boolean — controla si se muestra el resultado.
  //    Valor inicial: false
  //
  // Pista: const [monto, setMonto] = useState("")

  // TODO: Declarar los tres estados acá

  // ── TAREA 2: Calcular los valores derivados ──────────────────
  // Los valores calculados NO son estados separados — se calculan
  // directamente desde el estado en cada render. Eso es lo que
  // hace React eficiente: recalcula automáticamente cuando el
  // estado cambia.
  //
  // Fórmulas:
  //
  // tasaMensual: obtenela del objeto TASAS según las cuotas seleccionadas
  //   Pista: TASAS[cuotas]
  //
  // valorCuota: fórmula de cuota con interés compuesto:
  //   monto * tasaMensual / (1 - (1 + tasaMensual) ** -cuotas)
  //   Pista: Math.pow(base, exponente) o ** funciona en JS moderno
  //
  // totalAPagar: valorCuota * cuotas
  //
  // totalIntereses: totalAPagar - monto
  //
  // Estos valores solo tienen sentido cuando monto > 0.
  // Podés inicializarlos en 0 y calcularlos solo si monto > 0.

  // TODO: Calcular tasaMensual, valorCuota, totalAPagar, totalIntereses acá
  // (calculá solo si Number(monto) > 0, sino dejalos en 0)

  // ── TAREA 3: Manejar el clic en "Calcular" ──────────────────
  // Validar que el monto sea un número mayor que 0.
  // Si es válido: setMostrarResultado(true)
  // Si no: alert("Ingresá un monto válido") y no mostrar resultado.

  function calcular() {
    // TODO: Validar monto > 0 y setMostrarResultado(true)
  }

  return (
    <div className="ejercicio-cuotas">
      <div className="ejercicio-header">
        <span className="nivel-badge">📌 Nivel 2</span>
        <h1>💳 CréditoYa — Calculadora de cuotas</h1>
        <p>Calculá el valor de la cuota antes de ofrecerle el crédito al cliente</p>
      </div>

      <div className="cuotas-layout">

        {/* ── TAREA 4: Formulario con inputs controlados ──────────
            Tres inputs controlados:

            1. Monto (type="number"):
               value={monto}
               onChange={(e) => setMonto(e.target.value)}

            2. Cuotas (select):
               value={cuotas}
               onChange={(e) => setCuotas(Number(e.target.value))}
               Con opciones: 3, 6, 12, 18, 24 cuotas

            3. Botón "Calcular" que llama a calcular()

            Los className ya existen en el CSS.
        */}

        <div className="form-panel">
          <h2>Datos del crédito</h2>

          <div className="form-grupo">
            <label>Monto a financiar ($)</label>
            {/* TODO: Input controlado para el monto */}
          </div>

          <div className="form-grupo">
            <label>Cantidad de cuotas</label>
            {/* TODO: Select controlado con opciones 3, 6, 12, 18, 24 */}
          </div>

          {/* TODO: Botón que llama a calcular() */}
        </div>

        {/* ── TAREA 5: Panel de resultado (condicional) ───────────
            SOLO mostrar el resultado si mostrarResultado es true.
            Si es false, mostrar el mensaje de "resultado-vacio".

            Si es true, mostrar:
            <div>
              <div className="resultado-fila">
                <span className="label">Monto financiado</span>
                <span className="valor">${Number(monto).toLocaleString("es-AR")}</span>
              </div>
              <div className="resultado-fila">
                <span className="label">Cantidad de cuotas</span>
                <span className="valor">{cuotas} cuotas</span>
              </div>
              <div className="resultado-fila">
                <span className="label">Tasa mensual</span>
                <span className="valor">{(tasaMensual * 100).toFixed(1)}%</span>
              </div>
              <div className="resultado-fila">
                <span className="label">Valor de cada cuota</span>
                <span className="valor cuota-monto">${Math.round(valorCuota).toLocaleString("es-AR")}</span>
              </div>
              <div className="resultado-fila total-final">
                <span className="label">Total a pagar</span>
                <span className="valor">${Math.round(totalAPagar).toLocaleString("es-AR")}</span>
              </div>
              Si totalIntereses > monto * 0.5: mostrar alerta de interés alto
              <div className="alerta-interes">
                ⚠️ Los intereses representan más del 50% del monto original
              </div>
            </div>

            Pista para el condicional:
            {mostrarResultado ? <div>...</div> : <p className="resultado-vacio">...</p>}
        */}

        <div className="resultado-panel">
          <h2>Resultado</h2>
          {/* TODO: Resultado condicional aquí */}
        </div>

      </div>

      <footer className="ejercicio-footer">
        <p>📚 Teoría: useState múltiple, inputs controlados, valores derivados → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default CalculadoraCuotas
