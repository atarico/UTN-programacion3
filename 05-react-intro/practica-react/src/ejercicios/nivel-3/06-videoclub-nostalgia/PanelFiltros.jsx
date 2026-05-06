// ============================================================
// PanelFiltros.jsx — COMPONENTE HIJO
// ============================================================
// Muestra el panel con los filtros de búsqueda.
// Recibe los valores actuales de los filtros y funciones
// para modificarlos en el padre.
//
// Props que recibe:
//   busqueda          → string — valor actual del input de búsqueda
//   genero            → string — género seleccionado actualmente
//   generos           → array de strings — lista de géneros disponibles
//   onCambiarBusqueda → función — se llama con el nuevo texto
//   onCambiarGenero   → función — se llama con el nuevo género
//   onLimpiar         → función — limpia todos los filtros
// ============================================================

// ── TAREA 2: Inputs controlados que actualizan el estado del padre ──
// Este es el núcleo del lifting state up:
//
// El INPUT de búsqueda NO tiene su propio useState.
// Su valor viene de la prop "busqueda" (estado del padre).
// Cuando cambia, llama a onCambiarBusqueda(e.target.value).
//
// El SELECT de género tampoco tiene su propio useState.
// Su valor viene de la prop "genero" (estado del padre).
// Cuando cambia, llama a onCambiarGenero(e.target.value).
//
// Así el padre siempre sabe cuáles son los filtros activos y puede
// pasarlos al otro hijo (ListaPeliculas) para que filtre el array.

function PanelFiltros({ busqueda, genero, generos, onCambiarBusqueda, onCambiarGenero, onLimpiar }) {
  return (
    <div className="panel-filtros">
      <h2>🎬 Filtros</h2>

      <div className="filtro-grupo">
        <label>Buscar película</label>
        {/* TODO: Input controlado:
                  value={busqueda}
                  onChange={(e) => onCambiarBusqueda(e.target.value)}
                  placeholder="Título..."
                  className="filtro-grupo input" (ya tiene estilos) */}
      </div>

      <div className="filtro-grupo">
        <label>Género</label>
        {/* TODO: Select controlado:
                  value={genero}
                  onChange={(e) => onCambiarGenero(e.target.value)}
                  Con una opción "todos" al inicio y luego una opción
                  por cada género del array "generos"

                  <option value="todos">Todos los géneros</option>
                  {generos.map(g => <option key={g} value={g}>{g}</option>)} */}
      </div>

      {/* TODO: Botón "Limpiar filtros" que llama a onLimpiar() */}
    </div>
  )
}

export default PanelFiltros
