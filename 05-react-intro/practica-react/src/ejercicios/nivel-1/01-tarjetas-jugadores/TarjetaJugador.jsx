// ============================================================
// TarjetaJugador.jsx — COMPONENTE HIJO
// ============================================================
// Este componente representa la tarjeta de UN jugador.
// Recibe los datos del jugador como PROPS y los muestra en JSX.
//
// Props que recibe (ya definidas en la firma de la función):
//   nombre    → string   (ej: "Lucas Martínez")
//   posicion  → string   (ej: "Delantero")
//   numero    → number   (ej: 9)
//   activo    → boolean  (true = disponible, false = lesionado)
//   goles     → number   (ej: 7)
// ============================================================

// ── TAREA 1: Mostrar los datos del jugador ──────────────────
// Completá el JSX del return para mostrar cada dato.
// Los className ya existen en el CSS — solo usalos.
//
// Elementos a incluir:
//   • <span className="numero-camiseta"> con el número
//   • <h3> con el nombre
//   • <p className="posicion"> con la posición
//   • Badge de estado (ver Tarea 2)
//   • <p className="goles-info"> con "X goles esta temporada"

function TarjetaJugador({ nombre, posicion, numero, activo, goles }) {
  return (
    <div className="tarjeta-jugador">
      {/* TODO: Mostrá el número de camiseta en un <span className="numero-camiseta"> */}

      {/* TODO: Mostrá el nombre en un <h3> */}

      {/* TODO: Mostrá la posición en un <p className="posicion"> */}

      {/* ── TAREA 2: Badge de estado ───────────────────────────
          Si activo es true:  <span className="badge-activo">Disponible ✓</span>
          Si activo es false: <span className="badge-lesionado">Lesionado ✗</span>
          Pista: usá el operador ternario
          activo ? <span...>Disponible ✓</span> : <span...>Lesionado ✗</span> */}

      {/* TODO: Badge de activo/lesionado aquí */}

      {/* TODO: Mostrá los goles en un <p className="goles-info">
               Texto: "{goles} goles esta temporada"
               Pista: usá una template string dentro de JSX: {`${goles} goles...`} */}
    </div>
  )
}

export default TarjetaJugador
