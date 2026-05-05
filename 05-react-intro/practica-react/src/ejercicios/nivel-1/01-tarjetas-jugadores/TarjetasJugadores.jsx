// ============================================================
// ⚽ TARJETAS DE JUGADORES — Club Deportivo Unión
// ============================================================
// El director técnico del Club Deportivo Unión quiere
// digitalizar las fichas de sus jugadores para mostrarlas
// en la pantalla del vestuario antes de cada partido.
//
// Te pasó los datos de los 6 jugadores del equipo titular.
// Tu trabajo: armar el componente TarjetaJugador para mostrar
// cada ficha, y luego usarlo desde este componente.
//
// Archivos de este ejercicio:
//   TarjetaJugador.jsx  ← componente reutilizable (hacé los TODOs ahí)
//   TarjetasJugadores.jsx ← este archivo (hacé los TODOs aquí también)
// ============================================================

import './TarjetasJugadores.css'
import TarjetaJugador from './TarjetaJugador'

// --- DATOS DEL EQUIPO (no modificar) ---
const jugadores = [
  { id: 1, nombre: 'Lucas Martínez',   posicion: 'Delantero',   numero: 9,  activo: true,  goles: 12 },
  { id: 2, nombre: 'Mateo Rodríguez',  posicion: 'Mediocampista', numero: 8, activo: true,  goles: 5  },
  { id: 3, nombre: 'Sebastián Torres', posicion: 'Defensor',    numero: 4,  activo: false, goles: 1  },
  { id: 4, nombre: 'Nicolás López',    posicion: 'Arquero',     numero: 1,  activo: true,  goles: 0  },
  { id: 5, nombre: 'Agustín Pérez',    posicion: 'Delantero',   numero: 11, activo: true,  goles: 8  },
  { id: 6, nombre: 'Federico Gómez',   posicion: 'Defensor',    numero: 5,  activo: false, goles: 0  },
]

// ── TAREA 3: Calcular estadísticas ─────────────────────────
// Antes de renderizar, calculá cuántos jugadores están
// disponibles y cuántos están lesionados. Usá .filter().
//
// Pista:
//   const disponibles = jugadores.filter(j => j.activo)
//   const lesionados  = jugadores.filter(j => !j.activo)

function TarjetasJugadores() {
  // TODO: Calculá la cantidad de disponibles y lesionados con .filter()

  return (
    <div className="ejercicio-tarjetas">
      <div className="ejercicio-header">
        <span className="nivel-badge">📌 Nivel 1</span>
        <h1>⚽ Club Deportivo Unión</h1>
        <p>Fichas digitales del equipo titular</p>
      </div>

      {/* ── TAREA 4: Estadísticas del equipo ─────────────────
          Mostrá los chips de estadísticas con los datos calculados.
          HTML esperado:
          <div className="equipo-stats">
            <div className="stat-chip">Total: <strong>6</strong></div>
            <div className="stat-chip">Disponibles: <strong>{disponibles.length}</strong></div>
            <div className="stat-chip">Lesionados: <strong>{lesionados.length}</strong></div>
          </div>

          Pista: podés acceder a jugadores.length para el total */}

      {/* TODO: Sección de estadísticas aquí */}

      {/* ── TAREA 5: Renderizar las tarjetas ─────────────────
          Usá .map() para recorrer el array jugadores y renderizar
          un componente <TarjetaJugador /> por cada jugador.

          Importante: en React, cuando renderizás una lista necesitás
          pasar la prop "key" con un valor único. Usá el id del jugador.

          Ejemplo de cómo pasar props:
          <TarjetaJugador
            key={jugador.id}
            nombre={jugador.nombre}
            ...
          />

          Pista: el .map() va dentro de la sección con className="jugadores-grid"
      */}

      <div className="jugadores-grid">
        {/* TODO: .map() sobre jugadores para renderizar TarjetaJugador por cada uno */}
      </div>

      <footer className="ejercicio-footer">
        <p>📚 Teoría: Componentes, Props, .map() + key → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default TarjetasJugadores
