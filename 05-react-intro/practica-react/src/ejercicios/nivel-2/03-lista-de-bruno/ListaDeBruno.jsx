// ============================================================
// 📋 LISTA DE TAREAS DE BRUNO
// ============================================================
// Bruno es desarrollador freelancer y siempre pierde sus
// pendientes en papelitos. Te pidió una app para gestionar
// sus tareas del día: agregar nuevas, marcarlas como
// completadas, eliminarlas y filtrarlas por estado.
//
// Conceptos: useState con array, input controlado, agregar
// con spread, eliminar con filter, completar con map.
// ============================================================

import { useState } from 'react'
import './ListaDeBruno.css'

// ── TAREA 1: Declarar el estado ──────────────────────────────
// Necesitás tres estados:
// 1. "tareas": array de objetos. Cada tarea tiene: id, texto, completada.
//    Valor inicial: [] (array vacío)
//    O podés inicializarlo con algunas tareas de ejemplo para verlo funcionando.
//
// 2. "inputTexto": string para el input del formulario.
//    Valor inicial: "" (string vacío)
//
// 3. "filtro": string para saber qué tareas mostrar.
//    Valores posibles: "todas", "pendientes", "completadas"
//    Valor inicial: "todas"
//
// Pista: const [tareas, setTareas] = useState([...])

let proximoId = 1 // contador para IDs únicos (no es estado porque no afecta el render)

function ListaDeBruno() {
  // TODO: Declarar el estado "tareas" con useState
  //       Ejemplo de tarea: { id: 1, texto: "Entregar diseño a cliente", completada: false }

  // TODO: Declarar el estado "inputTexto" con useState

  // TODO: Declarar el estado "filtro" con useState, valor inicial "todas"

  // ── TAREA 2: Agregar una tarea ───────────────────────────────
  // Leer el inputTexto, crear un objeto tarea y agregarlo al array.
  // Reglas:
  // - Si el texto está vacío (después de .trim()), no hacés nada.
  // - Usá el SPREAD para no mutar el estado:
  //   setTareas([...tareas, nuevaTarea])
  // - Después de agregar, limpiar el input: setInputTexto("")
  //
  // Estructura de una nueva tarea:
  // { id: proximoId++, texto: inputTexto.trim(), completada: false }

  function agregarTarea() {
    // TODO: Verificar que inputTexto.trim() no esté vacío
    // TODO: Crear la nueva tarea con id, texto y completada: false
    // TODO: Agregar al estado con spread: setTareas([...tareas, nuevaTarea])
    // TODO: Incrementar proximoId y limpiar el input
  }

  // ── TAREA 3: Completar/descompletar una tarea ────────────────
  // Recibe el ID de la tarea y cambia su propiedad "completada" al opuesto.
  // Importante: NO mutés el objeto. Usá .map() para crear un nuevo array.
  //
  // Pista:
  // setTareas(tareas.map(t =>
  //   t.id === id ? { ...t, completada: !t.completada } : t
  // ))
  // El spread { ...t } copia todas las props, y "completada" la pisa.

  function toggleCompletar(id) {
    // TODO: Usar setTareas con .map() para invertir la propiedad completada
  }

  // ── TAREA 4: Eliminar una tarea ──────────────────────────────
  // Recibe el ID y elimina la tarea del array con .filter().
  //
  // Pista: setTareas(tareas.filter(t => t.id !== id))

  function eliminarTarea(id) {
    // TODO: Usar setTareas con .filter() para eliminar la tarea
  }

  // ── TAREA 5: Filtrar las tareas visibles ────────────────────
  // Calculá qué tareas mostrar según el estado "filtro".
  // Esta variable se calcula DESDE el estado (no es otro useState).
  //
  // Casos:
  //   "todas"       → mostrar todas las tareas
  //   "pendientes"  → solo las que tienen completada: false
  //   "completadas" → solo las que tienen completada: true
  //
  // Pista: calculala con una expresión ternaria encadenada:
  // const tareasFiltradas =
  //   filtro === "pendientes" ? tareas.filter(t => !t.completada) :
  //   filtro === "completadas" ? tareas.filter(t => t.completada) :
  //   tareas

  // TODO: Calculá "tareasFiltradas" acá

  return (
    <div className="ejercicio-bruno">
      <div className="ejercicio-header">
        <span className="nivel-badge">📌 Nivel 2</span>
        <h1>📋 Las tareas de Bruno</h1>
        <p>Organizá tus pendientes del día</p>
      </div>

      {/* ── TAREA 6: Estadísticas ───────────────────────────────
          Mostrá la cantidad de tareas totales, pendientes y completadas.
          Usá tareas.filter(...).length para calcularlas.

          <div className="tareas-stats">
            <div className="stat-item">
              <strong>{tareas.length}</strong>
              <span>total</span>
            </div>
            <div className="stat-item">
              <strong>{cantidad pendientes}</strong>
              <span>pendientes</span>
            </div>
            <div className="stat-item">
              <strong>{cantidad completadas}</strong>
              <span>completadas</span>
            </div>
          </div>
      */}

      {/* TODO: Stats aquí */}

      {/* ── TAREA 7: Formulario para agregar ───────────────────
          Input controlado + botón Agregar.
          El input controlado necesita:
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}

          El botón llama a agregarTarea() en onClick.
          Bonus: que Enter también funcione con onKeyDown.
      */}

      <div className="form-nueva-tarea">
        {/* TODO: <input className="input-tarea" ... /> */}
        {/* TODO: <button className="btn-agregar" ...>+ Agregar</button> */}
      </div>

      {/* ── TAREA 8: Botones de filtro ───────────────────────────
          Tres botones: "Todas", "Pendientes", "Completadas".
          El activo tiene className="btn-filtro activo".
          El resto tiene className="btn-filtro".

          Al hacer clic en cada uno, llamá a setFiltro() con el valor correspondiente.

          Pista para la clase dinámica:
          className={filtro === "todas" ? "btn-filtro activo" : "btn-filtro"}
      */}

      <div className="filtros">
        {/* TODO: Tres botones de filtro */}
      </div>

      {/* ── TAREA 9: Lista de tareas ───────────────────────────
          Recorrés "tareasFiltradas" (no tareas directamente) con .map().
          Si tareasFiltradas está vacío, mostrás un mensaje.

          Cada tarea se muestra con:
          <div className={`tarea-item ${tarea.completada ? "completada" : ""}`} key={tarea.id}>
            <button className={`btn-check ${tarea.completada ? "checked" : ""}`}
                    onClick={() => toggleCompletar(tarea.id)}>
              {tarea.completada ? "✓" : ""}
            </button>
            <span className="tarea-texto">{tarea.texto}</span>
            <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>✕</button>
          </div>
      */}

      <div className="lista-tareas">
        {/* TODO: Renderizar tareasFiltradas con .map() */}
        {/* TODO: Si está vacío, mostrar <div className="lista-vacia">Sin tareas</div> */}
      </div>

      <footer className="ejercicio-footer">
        <p>📚 Teoría: useState, inputs controlados, spread, filter, map → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default ListaDeBruno
