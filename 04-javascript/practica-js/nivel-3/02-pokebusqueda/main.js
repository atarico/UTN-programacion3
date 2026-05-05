// ============================================================
// ⚡ POKÉBÚSQUEDA
// ============================================================
// Tomás es fanático de Pokémon y quiere una app para buscar
// cualquier Pokémon por nombre o número, ver sus stats y
// guardar sus favoritos para poder verlos rápido después.
//
// Usamos la PokeAPI — es pública, gratuita y no necesita
// ninguna clave (API key).
// URL: https://pokeapi.co/api/v2/pokemon/{nombre-o-numero}
//
// Conceptos: fetch, async/await, try/catch, localStorage.
// ============================================================

// --- REFERENCIAS AL DOM (ya están escritas, no modificar) ---
const inputBusqueda      = document.getElementById("input-busqueda");
const btnBuscar          = document.getElementById("btn-buscar");
const estadoCarga        = document.getElementById("estado-carga");
const mensajeError       = document.getElementById("mensaje-error");
const pokemonCard        = document.getElementById("pokemon-card");
const pokeSprite         = document.getElementById("poke-sprite");
const pokeNumero         = document.getElementById("poke-numero");
const pokeNombre         = document.getElementById("poke-nombre");
const pokeTipos          = document.getElementById("poke-tipos");
const pokeAltura         = document.getElementById("poke-altura");
const pokePeso           = document.getElementById("poke-peso");
const pokeStatsLista     = document.getElementById("poke-stats-lista");
const btnFavorito        = document.getElementById("btn-favorito");
const listaFavoritos     = document.getElementById("lista-favoritos");
const btnLimpiarFavoritos = document.getElementById("btn-limpiar-favoritos");

// --- ESTADO ---
const FAV_KEY = "pokebusqueda-favoritos";
let favoritoGuardadosEnUI = []; // nombres de pokémon favoritos

// ============================================================
// TAREA 1: Buscar un Pokémon en la PokeAPI
// ============================================================
// Esta función es ASYNC porque hace una llamada de red.
// Recibe el nombre o número como string y devuelve los datos,
// o lanza un error si el Pokémon no existe.
//
// Pasos:
// 1. Convertir el nombre a minúsculas (la API es sensible)
// 2. Hacer fetch a: https://pokeapi.co/api/v2/pokemon/{nombre}
// 3. Si la respuesta no es ok (response.ok === false), lanzar error
// 4. Convertir la respuesta a JSON con response.json()
// 5. Retornar el objeto de datos
//
// Pista: await fetch(url) retorna un objeto response
//        Si response.ok es false, significa 404 u otro error HTTP
//        Para lanzar error: throw new Error("Pokémon no encontrado")

async function buscarPokemon(nombre) {
  // TODO: const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`

  // TODO: const response = await fetch(url)

  // TODO: if (!response.ok) { throw new Error("No se encontró: " + nombre) }

  // TODO: const datos = await response.json()

  // TODO: return datos
}

// ============================================================
// TAREA 2: Mostrar los estados de carga / error / resultado
// ============================================================
// Estas funciones controlan qué se ve en pantalla:
// - mostrarCargando(): muestra el spinner, oculta el resto
// - mostrarError(mensaje): muestra el mensaje de error
// - mostrarCard(): muestra la card, oculta el spinner y error
//
// Para mostrar un elemento: elemento.classList.remove("estado-oculto")
// Para ocultarlo:           elemento.classList.add("estado-oculto")

function mostrarCargando() {
  // TODO: Remover "estado-oculto" de estadoCarga
  // TODO: Agregar "estado-oculto" a mensajeError y pokemonCard
}

function mostrarError(mensaje) {
  // TODO: mensajeError.textContent = mensaje
  // TODO: Remover "estado-oculto" de mensajeError
  // TODO: Agregar "estado-oculto" a estadoCarga y pokemonCard
}

function mostrarCard() {
  // TODO: Remover "estado-oculto" de pokemonCard
  // TODO: Agregar "estado-oculto" a estadoCarga y mensajeError
}

// ============================================================
// TAREA 3: Llenar la card con los datos del Pokémon
// ============================================================
// La PokeAPI devuelve un objeto con muchas propiedades.
// Las que necesitamos:
//   datos.id           → número del pokémon (ej: 25)
//   datos.name         → nombre en inglés (ej: "pikachu")
//   datos.sprites.front_default → URL de la imagen
//   datos.types        → array de objetos: [{ type: { name: "electric" } }]
//   datos.height       → altura en decímetros (dividir por 10 para metros)
//   datos.weight       → peso en hectogramos (dividir por 10 para kg)
//   datos.stats        → array: [{ stat: { name: "hp" }, base_stat: 45 }]
//
// Para el sprite de mayor calidad también existe:
//   datos.sprites.other["official-artwork"].front_default

function llenarCard(datos) {
  // TODO: Asignar la imagen del sprite:
  //       pokeSprite.src = datos.sprites.other["official-artwork"].front_default
  //         || datos.sprites.front_default
  //       pokeSprite.alt = datos.name

  // TODO: Mostrar el número: pokeNumero.textContent = "#" + String(datos.id).padStart(3, "0")

  // TODO: Mostrar el nombre: pokeNombre.textContent = datos.name (se capitaliza con CSS)

  // TODO: Renderizar los tipos en pokeTipos.innerHTML
  //       Cada tipo: <span class="tipo-badge tipo-${tipo.type.name}">${tipo.type.name}</span>
  //       Pista: datos.types.map(t => `<span class="tipo-badge tipo-${t.type.name}">${t.type.name}</span>`).join("")

  // TODO: Mostrar altura y peso:
  //       pokeAltura.textContent = `Altura: ${(datos.height / 10).toFixed(1)} m`
  //       pokePeso.textContent   = `Peso: ${(datos.weight / 10).toFixed(1)} kg`

  // TODO: Renderizar las stats en pokeStatsLista.innerHTML
  //       Cada stat:
  //       <div class="stat-fila">
  //         <span class="stat-nombre">{datos.stats[i].stat.name}</span>
  //         <span class="stat-valor">{datos.stats[i].base_stat}</span>
  //         <div class="stat-barra-fondo">
  //           <div class="stat-barra-relleno" style="width: ${Math.min(base_stat, 150) / 150 * 100}%"></div>
  //         </div>
  //       </div>

  // TODO: Guardar el nombre en el botón de favorito como dato:
  //       btnFavorito.dataset.nombre = datos.name
}

// ============================================================
// TAREA 4: Función principal de búsqueda
// ============================================================
// Orquesta todo: lee el input, llama a buscarPokemon(),
// maneja errores con try/catch, y muestra el resultado.
//
// Esta función es ASYNC porque llama a buscarPokemon() con await.

async function realizarBusqueda() {
  // TODO: Leer inputBusqueda.value.trim()
  //       Si está vacío, retornar sin hacer nada

  // TODO: Llamar a mostrarCargando()

  // TODO: try {
  //         const datos = await buscarPokemon(texto)
  //         llenarCard(datos)
  //         mostrarCard()
  //       } catch (error) {
  //         mostrarError("❌ " + error.message)
  //       }
}

// ============================================================
// TAREA 5: Gestión de favoritos con localStorage
// ============================================================
// Los favoritos son un array de nombres de Pokémon (strings).
// Se guardan en localStorage bajo la clave FAV_KEY.

function cargarFavoritos() {
  // TODO: Leer FAV_KEY desde localStorage
  //       Si hay datos, parsearlos con JSON.parse y asignarlos a favoritoGuardadosEnUI
  //       Si no hay datos, dejar el array vacío
  // TODO: Llamar a renderizarFavoritos()
}

function guardarFavoritos() {
  // TODO: localStorage.setItem(FAV_KEY, JSON.stringify(favoritoGuardadosEnUI))
}

function agregarFavorito(nombre) {
  // TODO: Si el nombre ya está en favoritoGuardadosEnUI (usar .includes()), retornar
  // TODO: Agregar el nombre al array: favoritoGuardadosEnUI = [...favoritoGuardadosEnUI, nombre]
  // TODO: Llamar a guardarFavoritos() y renderizarFavoritos()
}

function limpiarFavoritos() {
  // TODO: favoritoGuardadosEnUI = []
  // TODO: Llamar a guardarFavoritos() y renderizarFavoritos()
}

function renderizarFavoritos() {
  // TODO: Si el array está vacío, mostrar li con clase "favoritos-vacio"

  // TODO: Si no, mapear cada nombre a:
  //       <li class="favorito-item" data-nombre="${nombre}">${nombre}</li>
  //       Asignar a listaFavoritos.innerHTML
}

// ============================================================
// CONEXIÓN DE EVENTOS (no modificar)
// ============================================================
btnBuscar.addEventListener("click", realizarBusqueda);

inputBusqueda.addEventListener("keydown", (e) => {
  if (e.key === "Enter") realizarBusqueda();
});

btnFavorito.addEventListener("click", () => {
  const nombre = btnFavorito.dataset.nombre;
  if (nombre) agregarFavorito(nombre);
});

listaFavoritos.addEventListener("click", (e) => {
  const item = e.target.closest(".favorito-item");
  if (item) {
    inputBusqueda.value = item.dataset.nombre;
    realizarBusqueda();
  }
});

btnLimpiarFavoritos.addEventListener("click", limpiarFavoritos);

// ============================================================
// ARRANQUE — no modificar
// ============================================================
cargarFavoritos();
