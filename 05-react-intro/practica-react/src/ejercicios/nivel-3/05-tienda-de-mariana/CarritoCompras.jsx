// ============================================================
// CarritoCompras.jsx — COMPONENTE HIJO
// ============================================================
// Muestra el carrito de compras con los items agregados.
// Recibe el estado del carrito y funciones para modificarlo.
//
// Props que recibe:
//   carrito     → array de objetos (los items del carrito)
//   onQuitar    → función para quitar un item por id
//   onVaciar    → función para vaciar todo el carrito
// ============================================================

// ── TAREA 3: Calcular el total ───────────────────────────────
// Calculá el total sumando los precios de todos los items.
// Podés hacerlo con .reduce() dentro del componente.
// Ejemplo:
//   const total = carrito.reduce((acc, item) => acc + item.precio, 0)

// ── TAREA 4: Renderizar el carrito ──────────────────────────
// Si carrito.length === 0, mostrar:
//   <li className="carrito-vacio">El carrito está vacío 🛒</li>
//
// Si hay items, renderizarlos con .map():
//   <li className="carrito-item" key={item.id}>
//     <span className="item-nombre">{item.emoji} {item.nombre}</span>
//     <span className="item-precio">${item.precio}</span>
//     <button className="btn-quitar" onClick={() => onQuitar(item.id)}>✕</button>
//   </li>
//
// También mostrar el total y el botón de "Vaciar carrito" que llama a onVaciar()

function CarritoCompras({ carrito, onQuitar, onVaciar }) {
  // TODO: Calculá el total del carrito con .reduce()

  return (
    <aside className="carrito-panel">
      <h2>🛒 Tu carrito</h2>

      <ul className="carrito-lista">
        {/* TODO: Renderizar los items del carrito (o el mensaje vacío) */}
      </ul>

      <div className="carrito-total">
        <span>Total</span>
        {/* TODO: Mostrá el total calculado con "$" */}
        <span className="total-valor">$0</span>
      </div>

      {/* TODO: Botón que llama a onVaciar() */}
    </aside>
  )
}

export default CarritoCompras
