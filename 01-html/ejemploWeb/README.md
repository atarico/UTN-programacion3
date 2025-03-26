# Resumen de etiquetas HTML utilizadas

#### Este readme explica las etiquetas HTML utilizadas en los archivos html que están en la carpeta 'ejemploWeb'.

---

## 1. Estructura General del Documento HTML

### **Etiqueta `<!DOCTYPE html>`**

Declara el tipo de documento como HTML5.

### **Etiqueta `<html>`**

Indica el inicio del documento HTML.

- **Atributo `lang`**: Especifica el idioma del documento (`es` para español, `en` para inglés).

### **Etiqueta `<head>`**

Contiene metadatos del documento.

- **`<meta charset="UTF-8">`**: Define la codificación de caracteres en UTF-8.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Hace que la página se adapta al ancho del dispositivo en la que se vea.
- **`<title>`**: Define el título de la página.

### **Etiqueta `<body>`**

Contiene el contenido visible de la página web.

---

## 3. Etiquetas utilizadas en los archivos HTML

### **Secciones y estructura**

- `<header>`: Contiene el encabezado y la navegación.
- `<nav>`: Define la barra de navegación.
- `<main>`: Agrupa el contenido principal de la página.
- `<section>`: Define una sección de contenido relacionada.
- `<article>`: Define contenido independiente (ejemplo: una historia).
- `<aside>`: Contiene contenido adicional o complementario.
- `<footer>`: Contiene información de pie de página.

### **Texto y encabezados**

- `<h1>` a `<h3>`: Definen títulos y subtítulos.
- `<p>`: Define un párrafo.
- `<strong>`: Destaca texto con importancia (negrita).
- `<em>`: Aplica énfasis al texto (cursiva).
- `<mark>`: Resalta texto.

### **Listas y enlaces**

- `<ul>`: Lista desordenada.
- `<li>`: Elemento de una lista.
- `<a href="URL">`: Enlace a otra página o recurso.

### **Formularios**

- `<form>`: Define un formulario.
- `<fieldset>`: Agrupa elementos dentro del formulario.
- `<legend>`: Da un "titulo" al `<fieldset>`.
- `<label>`: Etiqueta asociada a un input del formulario.
- `<input>`: Campo de entrada de datos.
  - **Atributos:**
    - `type`: Define el tipo de entrada (`text`, `email`, `password`, `date`, etc.).
    - `name`: Identificador del campo.
    - `id`: Identificador único.
    - `placeholder`: Texto sugerido dentro del campo.
    - `required`: Hace que el campo sea obligatorio.
- `<textarea>`: Campo de texto de varias líneas.
- `<select>` y `<option>`: Menú desplegable.
- `<button>`: Botón de envío o reseteo.

### **Multimedia**

- `<img>`: Muestra una imagen.
  - **Atributos:**
    - `src`: Ruta de la imagen.
    - `alt`: Texto que describe la imagen.
    - `width` y `height`: Dimensiones.
- `<video>`: Reproduce videos.
- `<audio>`: Reproduce audio.
- `<iframe>`: Incrusta contenido de otra fuente.

### **Tablas**

- `<table>`: Define una tabla.
- `<caption>`: Título de la tabla.
- `<thead>`, `<tbody>`, `<tfoot>`: Secciones de la tabla.
- `<tr>`: Fila de la tabla.
- `<th>`: Celda de encabezado.
- `<td>`: Celda de datos.
- **Atributos**:
  - `colspan`: Une columnas.
  - `rowspan`: Une filas.

---
