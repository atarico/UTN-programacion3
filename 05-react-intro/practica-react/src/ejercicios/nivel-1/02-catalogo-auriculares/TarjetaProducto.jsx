// ============================================================
// TarjetaProducto.jsx — COMPONENTE HIJO
// ============================================================
// Este componente muestra UN auricular del catálogo.
// Recibe múltiples props de diferentes tipos.
//
// Props que recibe:
//   nombre       → string   (ej: "Sony WH-1000XM5")
//   precio       → number   (ej: 89999)
//   descripcion  → string   (descripción breve)
//   imagen       → string   (emoji del producto)
//   enStock      → boolean  (true = disponible, false = agotado)
//   tipo         → string   (ej: "Over-ear", "In-ear", "True Wireless")
//   destacado    → boolean  (true = mostrar badge "⭐ Destacado")
// ============================================================

// ── TAREA 1: Clase dinámica según stock ─────────────────────
// La tarjeta debe tener una clase adicional "sin-stock"
// cuando enStock es false. Eso la vuelve visualmente opaca.
//
// Pista: calculá la clase antes del return:
//   const claseCard = enStock ? "tarjeta-producto" : "tarjeta-producto sin-stock"
//
// Luego usala en el div: <div className={claseCard}>

function TarjetaProducto({ nombre, precio, descripcion, imagen, enStock, tipo, destacado }) {
  // TODO: Calculá claseCard según el valor de enStock

  return (
    <div className="tarjeta-producto"> {/* TODO: reemplazá el className fijo por la variable claseCard */}

      {/* ── TAREA 2: Badge "Destacado" ────────────────────────
          SOLO si destacado es true, mostrar:
          <span className="badge-destacado">⭐ Destacado</span>

          Pista: usá renderizado condicional con &&
          {destacado && <span className="badge-destacado">⭐ Destacado</span>} */}

      {/* TODO: Badge de destacado aquí */}

      {/* TODO: Mostrá la imagen en un <div className="producto-imagen"> */}

      {/* TODO: Mostrá el nombre en un <h3 className="producto-nombre"> */}

      {/* TODO: Mostrá el tipo en un <span className="producto-tipo"> */}

      {/* TODO: Mostrá la descripción en un <p className="producto-descripcion"> */}

      <div className="producto-footer">
        {/* TODO: Mostrá el precio con "$" delante en un <span className="producto-precio"> */}

        {/* ── TAREA 3: Badge de stock ───────────────────────────
            Si enStock es true:  <span className="badge-stock badge-disponible">En stock</span>
            Si enStock es false: <span className="badge-stock badge-agotado">Agotado</span>
            Pista: operador ternario (misma lógica que en el ejercicio anterior) */}

        {/* TODO: Badge de stock aquí */}
      </div>
    </div>
  )
}

export default TarjetaProducto
