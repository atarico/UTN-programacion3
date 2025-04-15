# 🧩 Ejercitación CSS con Grid: 3 Proyectos Prácticos

Este repo tiene tres ejercicios para practicar **CSS Grid**. Cada proyecto debe desarrollarse en un archivo HTML nuevo con su respectivo CSS, sin reutilizar documentos anteriores.

---

## 📌 Nivel 1: Layout de Revista

### 🎯 Objetivo

Maquetar una portada de revista con varias secciones utilizando Grid.

### ✅ Requisitos

1. Crear un `grid` con 3 filas y 2 columnas
2. Incluir:
   - Título principal ocupando todo el ancho (grid-column: span 2)
   - Imagen destacada
   - Subtítulo y resumen
   - Dos bloques laterales (publicidad o info extra)

### 📝 Estructura base

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portada Revista</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="revista">
      <h1 class="titulo">Revista Estilo</h1>
      <div class="img">Imagen</div>
      <div class="subtitulo">Subtítulo</div>
      <div class="resumen">Resumen del artículo</div>
      <div class="extra1">Info 1</div>
      <div class="extra2">Info 2</div>
    </div>
  </body>
</html>
```

### 🎨 CSS sugerido

```css
.revista {
}

.titulo {
}

.img,
.subtitulo,
.resumen,
.extra1,
.extra2 {
}
```

---

## 📌 Nivel 2: Dashboard de Estadísticas

### 🎯 Objetivo

Crear un panel con métricas utilizando Grid.

### ✅ Requisitos

1. Estructura de 4 tarjetas en un `grid` de 2x2
2. Tarjetas con:
   - Ícono o emoji
   - Título
   - Valor numérico
3. Responsive: en pantallas pequeñas, las tarjetas deben verse en 1 columna

### 📝 Estructura base

```html
<body>
  <div class="dashboard">
    <div class="card">
      💻
      <h3>Visitas</h3>
      <p>1.200</p>
    </div>
    <div class="card">
      📱
      <h3>Usuarios</h3>
      <p>860</p>
    </div>
    <div class="card">
      🛒
      <h3>Ventas</h3>
      <p>340</p>
    </div>
    <div class="card">
      ⭐
      <h3>Reseñas</h3>
      <p>90</p>
    </div>
  </div>
</body>
```

### 🎨 CSS sugerido

```css
.dashboard {
}

.card {
}
```

---

## 📌 Nivel 3: Página Completa con Áreas

### 🎯 Objetivo

Diseñar una página web completa utilizando `grid-template-areas`

### ✅ Requisitos

1. Definir áreas para:
   - Header
   - Navegación lateral
   - Contenido principal
   - Sidebar
   - Footer
2. Usar `grid-template-areas` para organizar las secciones

### 📝 Estructura base

```html
<body>
  <div class="layout">
    <header>Encabezado</header>
    <nav>Menú</nav>
    <main>Contenido</main>
    <aside>Extra</aside>
    <footer>Pie</footer>
  </div>
</body>
```

### 🎨 CSS sugerido

```css
.layout {
}

header {
}
nav {
}
main {
}
aside {
}
footer {
}
```

---

## 🧪 Criterios de Evaluación

✔️ Uso correcto de `display: grid` y propiedades relacionadas  
✔️ Comprensión de áreas, fracciones (`fr`), `auto-fit`, `minmax`, etc.  
✔️ Diseño responsivo donde sea aplicable  
✔️ Buenas prácticas en identado, semántica, clases y organización del código

---
