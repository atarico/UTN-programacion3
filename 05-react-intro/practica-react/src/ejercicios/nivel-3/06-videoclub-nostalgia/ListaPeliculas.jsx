// ============================================================
// ListaPeliculas.jsx — COMPONENTE HIJO
// ============================================================
// Muestra la lista de películas que ya vienen filtradas.
// Este componente NO filtra ni tiene lógica de estado.
// Solo recibe un array y lo renderiza.
//
// Props que recibe:
//   peliculas → array de objetos ya filtrados por el padre
// ============================================================

// ── TAREA 3: Renderizar la lista ────────────────────────────
// Si peliculas.length === 0: mostrar un mensaje de "sin resultados".
// Si hay películas: renderizarlas con .map()
//
// Cada película tiene: id, titulo, anio, genero, sinopsis, emoji
//
// HTML de cada card:
// <div className="pelicula-card" key={pelicula.id}>
//   <div className="pelicula-emoji">{pelicula.emoji}</div>
//   <div className="pelicula-info">
//     <div className="pelicula-titulo">{pelicula.titulo}</div>
//     <div className="pelicula-meta">
//       <span className="pelicula-anio">{pelicula.anio}</span>
//       <span className="genero-badge">{pelicula.genero}</span>
//     </div>
//     <p className="pelicula-sinopsis">{pelicula.sinopsis}</p>
//   </div>
// </div>

function ListaPeliculas({ peliculas }) {
  return (
    <div>
      <div className="lista-header">
        <h2>🎞️ Películas</h2>
        {/* TODO: Mostrá la cantidad de películas:
                  <span className="resultados-count">{peliculas.length} resultado(s)</span> */}
      </div>

      <div className="peliculas-lista">
        {/* TODO: Si peliculas.length === 0, mostrar <div className="lista-vacia">...</div> */}
        {/* TODO: Si hay películas, renderizarlas con .map() */}
      </div>
    </div>
  )
}

export default ListaPeliculas
