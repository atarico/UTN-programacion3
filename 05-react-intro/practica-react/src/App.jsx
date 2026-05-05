// ============================================================
// App.jsx — MENÚ PRINCIPAL (no tiene TODOs, está completo)
// ============================================================
// Este archivo NO es un ejercicio. Es el menú que te permite
// navegar entre los ejercicios.
//
// Pero prestá atención: este componente ya usa useState para
// controlar qué se muestra en pantalla. Observalo mientras
// trabajás en el Nivel 2 — es el mismo concepto que vas a
// practicar.
// ============================================================

import { useState } from 'react'
import './App.css'

import TarjetasJugadores from './ejercicios/nivel-1/01-tarjetas-jugadores/TarjetasJugadores'
import CatalogoAuriculares from './ejercicios/nivel-1/02-catalogo-auriculares/CatalogoAuriculares'
import ListaDeBruno from './ejercicios/nivel-2/03-lista-de-bruno/ListaDeBruno'
import CalculadoraCuotas from './ejercicios/nivel-2/04-calculadora-cuotas/CalculadoraCuotas'
import TiendaDeMariana from './ejercicios/nivel-3/05-tienda-de-mariana/TiendaDeMariana'
import VideoClubNostalgia from './ejercicios/nivel-3/06-videoclub-nostalgia/VideoClubNostalgia'

const EJERCICIOS = [
  {
    id: 1,
    nivel: 1,
    nombre: 'Tarjetas de Jugadores',
    temas: 'JSX, props, destructuring, .map() + key, renderizado condicional',
    componente: TarjetasJugadores,
  },
  {
    id: 2,
    nivel: 1,
    nombre: 'Catálogo de Auriculares',
    temas: 'Composición de componentes, props booleanas, prop drilling',
    componente: CatalogoAuriculares,
  },
  {
    id: 3,
    nivel: 2,
    nombre: 'Lista de Tareas de Bruno',
    temas: 'useState con array, inputs controlados, agregar/eliminar/filtrar',
    componente: ListaDeBruno,
  },
  {
    id: 4,
    nivel: 2,
    nombre: 'Calculadora de Cuotas',
    temas: 'useState múltiple, inputs controlados, valores derivados del estado',
    componente: CalculadoraCuotas,
  },
  {
    id: 5,
    nivel: 3,
    nombre: 'Tienda de Plantas de Mariana',
    temas: 'Lifting state up, estado compartido entre componentes hermanos',
    componente: TiendaDeMariana,
  },
  {
    id: 6,
    nivel: 3,
    nombre: 'VideoClub Nostalgia',
    temas: 'Lifting state up, filtros en componente hijo que afectan al padre',
    componente: VideoClubNostalgia,
  },
]

const NIVELES = [
  { numero: 1, titulo: 'Nivel 1 — Componentes y Props', descripcion: 'Sin estado todavía. Componentes funcionales, props, JSX, renderizado condicional.' },
  { numero: 2, titulo: 'Nivel 2 — useState + Inputs controlados', descripcion: 'Completá el Nivel 1 antes de arrancar este.' },
  { numero: 3, titulo: 'Nivel 3 — Lifting State Up', descripcion: 'Completá el Nivel 2 antes de arrancar este.' },
]

function App() {
  const [ejercicioActual, setEjercicioActual] = useState(null)

  // Si hay un ejercicio seleccionado, mostrarlo con barra de navegación
  if (ejercicioActual) {
    const Componente = ejercicioActual.componente
    return (
      <div className="ejercicio-activo">
        <div className="ejercicio-barra">
          <button className="btn-volver" onClick={() => setEjercicioActual(null)}>
            ← Volver al menú
          </button>
          <span className="ejercicio-barra-nivel">Nivel {ejercicioActual.nivel}</span>
          <span className="ejercicio-barra-nombre">{ejercicioActual.nombre}</span>
        </div>
        <div className="ejercicio-contenido">
          <Componente />
        </div>
      </div>
    )
  }

  // Si no hay ejercicio seleccionado, mostrar el menú
  return (
    <div className="app-menu">
      <header className="menu-header">
        <h1>⚛️ Práctica de React</h1>
        <p>Resolvé problemas reales aplicando los conceptos de React que estudiaste.</p>
        <span className="menu-nota">
          📂 Los TODOs están en <code>src/ejercicios/nivel-X/nombre-ejercicio/*.jsx</code>
        </span>
      </header>

      <main className="menu-grid">
        {NIVELES.map(nivel => (
          <section key={nivel.numero} className="nivel-seccion">
            <div className="nivel-titulo">{nivel.titulo}</div>
            <div className="ejercicios-fila">
              {EJERCICIOS
                .filter(e => e.nivel === nivel.numero)
                .map(ejercicio => (
                  <button
                    key={ejercicio.id}
                    className="ejercicio-card"
                    onClick={() => setEjercicioActual(ejercicio)}
                  >
                    <span className="ejercicio-numero">Ejercicio {ejercicio.id}</span>
                    <span className="ejercicio-nombre">{ejercicio.nombre}</span>
                    <span className="ejercicio-temas">{ejercicio.temas}</span>
                  </button>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
