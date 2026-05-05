// ============================================================
// 🌿 TIENDA DE PLANTAS DE MARIANA
// ============================================================
// Mariana tiene una tienda de plantas online. Quiere un
// catálogo donde sus clientes puedan ver las plantas y
// armar su carrito en tiempo real.
//
// El desafío: el catálogo y el carrito son componentes
// SEPARADOS (CatalogoProductos y CarritoCompras), pero ambos
// necesitan acceder al MISMO estado del carrito.
//
// Solución: LIFTING STATE UP — el estado vive en este
// componente padre (TiendaDeMariana) y se lo pasamos a los
// hijos a través de props.
//
// Archivos de este ejercicio:
//   TiendaDeMariana.jsx   ← este archivo (el PADRE — tiene el estado)
//   CatalogoProductos.jsx ← hijo que muestra las plantas
//   CarritoCompras.jsx    ← hijo que muestra el carrito
// ============================================================

import { useState } from 'react'
import './TiendaDeMariana.css'
import CatalogoProductos from './CatalogoProductos'
import CarritoCompras from './CarritoCompras'

// --- CATÁLOGO DE PLANTAS (no modificar) ---
const plantas = [
  { id: 1, nombre: 'Monstera',      precio: 3500, emoji: '🌿', descripcion: 'Ideal para interiores con luz indirecta.' },
  { id: 2, nombre: 'Cactus Barrel', precio: 1200, emoji: '🌵', descripcion: 'Mínimo riego, máximo carácter.' },
  { id: 3, nombre: 'Orquídea',      precio: 5800, emoji: '🌸', descripcion: 'Elegante, florece varias veces al año.' },
  { id: 4, nombre: 'Suculenta',     precio: 800,  emoji: '🌱', descripcion: 'Perfecta para escritorios y estantes.' },
  { id: 5, nombre: 'Helecho',       precio: 2200, emoji: '🌾', descripcion: 'Añade frescura y humedad al ambiente.' },
  { id: 6, nombre: 'Potus',         precio: 1500, emoji: '🍃', descripcion: 'Resistente y de crecimiento rápido.' },
]

function TiendaDeMariana() {
  // ── TAREA 1: El estado del carrito vive ACÁ ──────────────────
  // El carrito es un array de objetos planta.
  // Valor inicial: [] (vacío)
  //
  // Este estado se lo vamos a pasar a AMBOS hijos:
  // - CatalogoProductos lo necesita para... nada (no lo usa directamente)
  // - CarritoCompras lo necesita para mostrarlo
  //
  // Pero también necesitamos pasar FUNCIONES a los hijos para que
  // puedan modificar este estado. Un hijo no puede modificar el
  // estado del padre directamente — el padre le pasa una función.

  // TODO: const [carrito, setCarrito] = useState([])

  // ── TAREA 2: Función para agregar al carrito ─────────────────
  // Esta función se va a pasar a CatalogoProductos como prop "onAgregar".
  // Cuando el usuario hace clic en "Agregar" en una tarjeta,
  // CatalogoProductos llama a esta función con el objeto planta.
  //
  // Lógica: simplemente agregar la planta al carrito con spread.
  // No verificamos duplicados (se puede agregar la misma planta varias veces).
  //
  // Pista: setCarrito([...carrito, planta])

  function agregarAlCarrito(planta) {
    // TODO: Agregar la planta al carrito usando spread
  }

  // ── TAREA 3: Función para quitar del carrito ─────────────────
  // Esta función se va a pasar a CarritoCompras como prop "onQuitar".
  // Recibe el ID del item a quitar y lo elimina con .filter().
  //
  // Importante: si hay dos Monsteras en el carrito, solo queremos
  // quitar UNA. Podemos quitar el PRIMERO que encontremos.
  //
  // Pista avanzada: usando el índice
  // setCarrito(carrito.filter((_, i) => i !== carrito.findIndex(c => c.id === id)))
  //
  // O más simple: quitar el primero que tenga ese id
  // let quitado = false
  // setCarrito(carrito.filter(item => {
  //   if (!quitado && item.id === id) { quitado = true; return false }
  //   return true
  // }))

  function quitarDelCarrito(id) {
    // TODO: Quitar el primer item con ese id del carrito
  }

  // ── TAREA 4: Función para vaciar el carrito ──────────────────
  function vaciarCarrito() {
    // TODO: setCarrito([])
  }

  return (
    <div className="ejercicio-tienda">
      <header className="tienda-header">
        <div>
          <span className="nivel-badge">📌 Nivel 3</span>
          <h1>🌿 La Tienda de Mariana</h1>
          <p>Plantas de interior y exterior</p>
        </div>
        {/* ── TAREA 5: Badge del carrito en el header ──────────────
            Mostrá la cantidad de items en el carrito.
            <div className="carrito-badge">
              🛒 <strong>{carrito.length}</strong> items
            </div>
        */}
        {/* TODO: Badge con la cantidad del carrito */}
      </header>

      {/* ── TAREA 6: Pasar el estado y las funciones a los hijos ──
          Cada hijo recibe exactamente lo que necesita:

          CatalogoProductos necesita:
            - plantas={plantas}      (los datos del catálogo)
            - onAgregar={agregarAlCarrito}  (función para agregar)

          CarritoCompras necesita:
            - carrito={carrito}      (el estado del carrito)
            - onQuitar={quitarDelCarrito}   (función para quitar)
            - onVaciar={vaciarCarrito}      (función para vaciar)

          Así es como funciona Lifting State Up:
          el padre maneja el estado y se lo "baja" a los hijos.
      */}

      <div className="tienda-layout">
        {/* TODO: <CatalogoProductos plantas={...} onAgregar={...} /> */}

        {/* TODO: <CarritoCompras carrito={...} onQuitar={...} onVaciar={...} /> */}
      </div>

      <footer className="tienda-footer">
        <p>📚 Teoría: Lifting State Up, estado compartido → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default TiendaDeMariana
