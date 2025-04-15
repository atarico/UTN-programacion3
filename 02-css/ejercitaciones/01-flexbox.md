# 🎯 Ejercitación CSS con Flexbox: 3 Proyectos Prácticos

Este repo tiene tres ejercicios para practicar **Flexbox**. Cada proyecto debe implementarse con un nuevo archivo HTML y CSS, sin reutilizar documentos anteriores.

---

## 📌 Nivel 1: Galería de Imágenes

### 🎯 Objetivo

Crear una galería de imágenes alineadas con Flexbox.

### ✅ Requisitos

1. Crear un contenedor con 6 imágenes
2. Usar Flexbox para:
   - Alinear las imágenes en fila
   - Permitir que se ajusten en varias filas (flex-wrap)
   - Agregar espacio entre ellas

### 📝 Estructura base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Galería Flexbox</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="galeria">
      <img src="img1.jpg" alt="Imagen 1" />
      <img src="img2.jpg" alt="Imagen 2" />
      <img src="img3.jpg" alt="Imagen 3" />
      <img src="img4.jpg" alt="Imagen 4" />
      <img src="img5.jpg" alt="Imagen 5" />
      <img src="img6.jpg" alt="Imagen 6" />
    </div>
  </body>
</html>
```

### 🎨 CSS sugerido (styles.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} /*esto para resetar los estilos por defecto*/

body {
  padding: 20px;
  background-color: #333;
  font-family: system-ui, sans-serif;
}

.galeria {
}

.galeria img {
}
```

---

## 📌 Nivel 2: Tarjetas de Productos

### 🎯 Objetivo

Diseñar un layout de productos usando Flexbox.

### ✅ Requisitos

1. Crear 4 tarjetas de productos con:
   - Imagen
   - Nombre
   - Precio
2. Usar Flexbox para:
   - Distribuirlas en fila
   - Centrar contenido dentro de cada tarjeta
   - Adaptar el layout en pantallas pequeñas (columnas)

### 📝 Estructura base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Productos Flexbox</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="productos">
      <div class="producto">
        <img src="producto1.jpg" alt="Producto 1" />
        <h3>Producto 1</h3>
        <p>$100</p>
      </div>
      <!-- Repetir para Producto 2, 3, 4 -->
    </div>
  </body>
</html>
```

### 🎨 CSS sugerido (styles.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #333;
  font-family: system-ui, sans-serif;
}

.productos {
}

.producto {
}

.producto img {
}
```

---

## 📌 Nivel 3: Distribución de Secciones en una Web

### 🎯 Objetivo

Crear un layout con secciones distribuidas horizontalmente.

### ✅ Requisitos

1. Crear un layout con 3 secciones:
   - Menú lateral (aside)
   - Contenido principal (main)
   - Sidebar de noticias (aside)
2. Usar Flexbox para:
   - Crear un contenedor padre con las 3 secciones en fila
   - Asignar anchos proporcionales: 20%, 60%, 20%

### 📝 Estructura base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Layout Flexbox</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="contenedor">
      <aside class="menu">Menú</aside>
      <main class="contenido">Contenido principal</main>
      <aside class="noticias">Noticias</aside>
    </div>
  </body>
</html>
```

### 🎨 CSS sugerido (styles.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #333;
  font-family: system-ui, sans-serif;
}

.contenedor {
}

.menu,
.contenido,
.noticias {
}

.menu {
}

.contenido {
}

.noticias {
}
```

---

## 🧪 Criterios de Evaluación

✔️ Aplicación correcta de Flexbox para distribución y alineación  
✔️ Separación clara de contenido (HTML) y estilo (CSS)  
✔️ Buenas prácticas: identación, nombres de clases, uso de etiquetas semánticas

---
