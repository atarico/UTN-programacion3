// ============================================================
// 🎧 CATÁLOGO DE AURICULARES — SoundStore
// ============================================================
// SoundStore es una tienda de audio y quiere mostrar su
// catálogo de auriculares en la web. Cada producto tiene
// distintas características: precio, tipo, si hay stock,
// y si es un producto destacado.
//
// Tu trabajo: usar el componente TarjetaProducto para
// renderizar cada producto, pasándole las props correctas.
//
// Archivos de este ejercicio:
//   TarjetaProducto.jsx  ← hacé los TODOs ahí primero
//   CatalogoAuriculares.jsx ← este archivo
// ============================================================

import './CatalogoAuriculares.css'
import TarjetaProducto from './TarjetaProducto'

// --- CATÁLOGO (no modificar) ---
const productos = [
  {
    id: 1,
    nombre: 'Sony WH-1000XM5',
    precio: 89999,
    descripcion: 'Cancelación de ruido líder en la industria, 30 horas de batería.',
    imagen: '🎧',
    enStock: true,
    tipo: 'Over-ear',
    destacado: true,
  },
  {
    id: 2,
    nombre: 'AirPods Pro 2',
    precio: 74999,
    descripcion: 'ANC adaptativo, audio espacial personalizado, carga MagSafe.',
    imagen: '🎵',
    enStock: true,
    tipo: 'True Wireless',
    destacado: true,
  },
  {
    id: 3,
    nombre: 'JBL Tune 670NC',
    precio: 32999,
    descripcion: 'Cancelación de ruido activa, 50 horas de batería, pliegue plano.',
    imagen: '🎶',
    enStock: false,
    tipo: 'Over-ear',
    destacado: false,
  },
  {
    id: 4,
    nombre: 'Sennheiser CX 200',
    precio: 18500,
    descripcion: 'Sonido preciso y equilibrado para el día a día.',
    imagen: '🎤',
    enStock: true,
    tipo: 'In-ear',
    destacado: false,
  },
  {
    id: 5,
    nombre: 'Anker Soundcore Q45',
    precio: 24900,
    descripcion: 'Precio accesible con buena cancelación de ruido y sonido claro.',
    imagen: '📻',
    enStock: true,
    tipo: 'Over-ear',
    destacado: false,
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Buds2',
    precio: 41999,
    descripcion: 'ANC, diseño compacto, integración perfecta con Android.',
    imagen: '💎',
    enStock: false,
    tipo: 'True Wireless',
    destacado: false,
  },
]

function CatalogoAuriculares() {
  // ── TAREA 4: Calcular disponibilidad ───────────────────────
  // Calculá cuántos productos tienen enStock === true
  // y cuántos están agotados, usando .filter()
  //
  // Pista: productos.filter(p => p.enStock)

  // TODO: Calculá productosDisponibles y productosAgotados

  return (
    <div className="ejercicio-catalogo">
      <div className="ejercicio-header">
        <span className="nivel-badge">📌 Nivel 1</span>
        <h1>🎧 SoundStore — Catálogo de Auriculares</h1>
        <p>Los mejores auriculares para cada necesidad y presupuesto</p>
      </div>

      {/* ── TAREA 5: Info del catálogo ──────────────────────────
          Mostrá los chips informativos con los datos calculados:
          <div className="catalogo-info">
            <div className="info-chip">Total: <strong>{productos.length}</strong></div>
            <div className="info-chip">En stock: <strong>{productosDisponibles.length}</strong></div>
            <div className="info-chip">Agotados: <strong>{productosAgotados.length}</strong></div>
          </div>
      */}

      {/* TODO: Chips informativos aquí */}

      {/* ── TAREA 6: Renderizar el catálogo ──────────────────────
          Usá .map() para recorrer el array productos y renderizar
          un <TarjetaProducto /> por cada uno.

          Pasale TODAS las props que necesita el componente:
            key, nombre, precio, descripcion, imagen, enStock, tipo, destacado

          Ejemplo de cómo se pasan props de un objeto:
          <TarjetaProducto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            ...etc
          />
      */}

      <div className="productos-grid">
        {/* TODO: .map() sobre productos aquí */}
      </div>

      <footer className="ejercicio-footer">
        <p>📚 Teoría: Composición, prop drilling, props booleanas → <code>05-react-intro/README.md</code></p>
      </footer>
    </div>
  )
}

export default CatalogoAuriculares
