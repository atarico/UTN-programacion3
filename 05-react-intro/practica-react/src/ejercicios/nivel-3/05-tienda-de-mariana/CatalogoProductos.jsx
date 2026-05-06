// ============================================================
// CatalogoProductos.jsx — COMPONENTE HIJO
// ============================================================
// Muestra el catálogo de plantas disponibles.
// Recibe las plantas como prop y una función para agregar al carrito.
//
// Props que recibe:
//   plantas     → array de objetos con los productos del catálogo
//   onAgregar   → función que el padre le pasa para agregar al carrito
//                 Se llama con el objeto planta como argumento
// ============================================================

// ── TAREA 2: Renderizar el catálogo ─────────────────────────
// Recorrés el array "plantas" con .map() y renderizás una tarjeta
// por cada planta. El botón "Agregar" llama a onAgregar(planta).
//
// HTML de cada tarjeta:
// <div className="planta-card" key={planta.id}>
//   <div className="planta-emoji">{planta.emoji}</div>
//   <div className="planta-nombre">{planta.nombre}</div>
//   <div className="planta-precio">${planta.precio}</div>
//   <div className="planta-descripcion">{planta.descripcion}</div>
//   <button className="btn-agregar-planta" onClick={() => onAgregar(planta)}>
//     + Agregar al carrito
//   </button>
// </div>
//
// Importante: cuando llamás a onAgregar en el onClick, pasale el
// objeto "planta" completo. Es una función que el padre te dio.

function CatalogoProductos({ plantas, onAgregar }) {
  return (
    <div className="catalogo-header">
      <h2>🌿 Plantas disponibles</h2>
      <div className="catalogo-grid">
        {/* TODO: .map() sobre plantas, renderizando una tarjeta por cada una */}
        {/* TODO: El botón de cada tarjeta llama a onAgregar(planta) */}
      </div>
    </div>
  )
}

export default CatalogoProductos
