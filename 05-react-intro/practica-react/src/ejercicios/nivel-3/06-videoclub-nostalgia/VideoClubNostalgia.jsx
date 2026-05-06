// ============================================================
// 🎬 VIDEOCLUB NOSTALGIA
// ============================================================
// El VideoClub Nostalgia quiere un catálogo digital donde los
// clientes puedan filtrar películas por título y género.
//
// El desafío: el panel de filtros (izquierda) y la lista de
// películas (derecha) son componentes SEPARADOS. Cuando
// alguien escribe en el buscador, la lista debe actualizarse.
//
// Sin lifting state up, esto sería imposible: dos componentes
// hermanos no pueden hablar entre sí directamente.
// Con lifting state up: el PADRE tiene el estado de los filtros
// y se lo pasa a ambos hijos.
//
// Archivos de este ejercicio:
//   VideoClubNostalgia.jsx  ← este archivo (PADRE — tiene el estado)
//   PanelFiltros.jsx        ← hijo izquierdo (inputs que modifican el padre)
//   ListaPeliculas.jsx      ← hijo derecho (recibe el array ya filtrado)
// ============================================================

import { useState } from 'react'
import './VideoClubNostalgia.css'
import PanelFiltros from './PanelFiltros'
import ListaPeliculas from './ListaPeliculas'

// --- CATÁLOGO DE PELÍCULAS (no modificar) ---
const todasLasPeliculas = [
  { id: 1,  titulo: 'Volver al Futuro',    anio: 1985, genero: 'Ciencia Ficción', sinopsis: 'Marty McFly viaja al pasado en un DeLorean y debe asegurarse de que sus padres se enamoren.',                emoji: '⚡' },
  { id: 2,  titulo: 'El Padrino',          anio: 1972, genero: 'Drama',           sinopsis: 'La historia de la familia Corleone y su ascenso en el crimen organizado de Nueva York.',                    emoji: '🌹' },
  { id: 3,  titulo: 'Tiburón',             anio: 1975, genero: 'Terror',          sinopsis: 'Un tiburón blanco aterroriza una pequeña localidad costera durante el verano.',                              emoji: '🦈' },
  { id: 4,  titulo: 'Indiana Jones',       anio: 1981, genero: 'Aventura',        sinopsis: 'El arqueólogo más audaz del mundo busca el Arca de la Alianza antes que los nazis.',                        emoji: '🎩' },
  { id: 5,  titulo: 'Aliens',              anio: 1986, genero: 'Ciencia Ficción', sinopsis: 'Ellen Ripley regresa al planeta donde encontró la criatura alienígena, esta vez con marines.',              emoji: '👾' },
  { id: 6,  titulo: 'La Lista de Schindler', anio: 1993, genero: 'Drama',         sinopsis: 'La historia real de Oskar Schindler y los más de mil judíos que salvó durante el Holocausto.',            emoji: '📋' },
  { id: 7,  titulo: 'Terminator 2',        anio: 1991, genero: 'Ciencia Ficción', sinopsis: 'Un cyborg del futuro protege a John Connor del T-1000, un robot más avanzado y mortal.',                   emoji: '🤖' },
  { id: 8,  titulo: 'El Silencio de los Inocentes', anio: 1991, genero: 'Terror', sinopsis: 'Una agente del FBI busca a un asesino en serie con la ayuda del temible Hannibal Lecter.',                  emoji: '🦋' },
  { id: 9,  titulo: 'Forrest Gump',        anio: 1994, genero: 'Drama',           sinopsis: 'Un hombre con bajas habilidades intelectuales protagoniza sin quererlo varios momentos históricos de EE.UU.', emoji: '🍫' },
  { id: 10, titulo: 'El Rey León',         anio: 1994, genero: 'Aventura',        sinopsis: 'Simba, un cachorro de león, debe reclamar su trono después de que su tío asesina a su padre.',             emoji: '🦁' },
]

// Lista de géneros únicos (no modificar)
const generos = [...new Set(todasLasPeliculas.map(p => p.genero))]

function VideoClubNostalgia() {
  // ── TAREA 1: El estado de los filtros vive ACÁ ───────────────
  // Dos estados:
  // 1. "busqueda": string — el texto del buscador. Valor inicial: ""
  // 2. "generoSeleccionado": string — el género del select. Valor inicial: "todos"
  //
  // Estos estados se pasan a PanelFiltros para que los muestre
  // en los inputs controlados. Y también se usan ACÁ para
  // filtrar las películas antes de pasarlas a ListaPeliculas.

  // TODO: Declarar el estado "busqueda" con useState

  // TODO: Declarar el estado "generoSeleccionado" con useState, inicial "todos"

  // ── TAREA 2: Calcular las películas filtradas ─────────────────
  // Las películas filtradas se calculan DESDE el estado, igual que
  // hicimos con "tareasFiltradas" en el ejercicio anterior.
  // No es otro useState — es una variable calculada.
  //
  // Filtros a aplicar:
  // 1. Por búsqueda: el título incluye el texto (case insensitive)
  //    Pista: pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  //
  // 2. Por género: si generoSeleccionado es "todos", mostrar todas.
  //    Si no, solo las que tengan ese género.
  //
  // Podés encadenar dos .filter() o hacer uno con && :
  // const peliculasFiltradas = todasLasPeliculas
  //   .filter(p => ...)
  //   .filter(p => ...)

  // TODO: Calcular peliculasFiltradas acá

  // ── TAREA 3: Función para limpiar filtros ────────────────────
  function limpiarFiltros() {
    // TODO: Resetear busqueda a "" y generoSeleccionado a "todos"
  }

  return (
    <div className="ejercicio-videoclub">
      <header className="videoclub-header">
        <span className="nivel-badge">📌 Nivel 3</span>
        <h1>🎬 VideoClub Nostalgia</h1>
        <p>Clásicos del cine para todos los gustos</p>
      </header>

      {/* ── TAREA 4: Pasar el estado y las funciones a los hijos ──
          PanelFiltros necesita:
            busqueda={busqueda}
            genero={generoSeleccionado}
            generos={generos}
            onCambiarBusqueda={setBusqueda}      ← función setter directamente
            onCambiarGenero={setGeneroSeleccionado}
            onLimpiar={limpiarFiltros}

          ListaPeliculas necesita:
            peliculas={peliculasFiltradas}   ← array ya filtrado

          Nota: PanelFiltros recibe los setters del padre.
          Cuando el usuario escribe, llama al setter → el padre
          actualiza su estado → se recalcula peliculasFiltradas →
          ListaPeliculas recibe el array actualizado → re-render.
          Todo automático. Eso es React.
      */}

      <div className="videoclub-layout">
        {/* TODO: <PanelFiltros
                    busqueda={...}
                    genero={...}
                    generos={generos}
                    onCambiarBusqueda={...}
                    onCambiarGenero={...}
                    onLimpiar={limpiarFiltros}
                  /> */}

        {/* TODO: <ListaPeliculas peliculas={peliculasFiltradas} /> */}
      </div>

      <footer className="videoclub-footer">
        <p>📚 Teoría: Lifting State Up, estado compartido entre hermanos → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default VideoClubNostalgia
