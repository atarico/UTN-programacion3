# Apuntes HTML

## 1. Definición

HTML (HyperText Markup Language) es el lenguaje utilizado para estructurar el contenido de una web. Se compone de etiquetas que definen los elementos dentro de una página web.

## 2. Estructura Básica de un Documento HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título de la Página</title>
  </head>
  <body>
    <h1>Encabezado Principal</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>
```

### Explicación:

- `<!DOCTYPE html>`: Define la versión de HTML.
- `<html lang="es">`: Contenedor principal del documento.
- `<head>`: Contiene metadatos, enlaces a CSS y scripts.
- `<meta>`: Definen la información que reciben los navegadores y los motores de busqueda (como la codificación de caracteres).
- `<title>`: Define el título de la página.
- `<body>`: Contiene el contenido visible de la página.

## 3. Elementos Comunes en HTML

### 3.1 Encabezados

```html
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
<h4>Encabezado 4</h4>
<h5>Encabezado 5</h5>
<h6>Encabezado 6</h6>
```

### 3.2 Párrafos y Texto

```html
<p>Esto es un párrafo.</p>
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
```

### 3.3 Listas

**Lista ordenada:**

```html
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ol>
```

**Lista desordenada:**

```html
<ul>
  <li>Elemento A</li>
  <li>Elemento B</li>
</ul>
```

### 3.4 Enlaces

```html
<a href="./pages/pagina2.html">Pagina 2</a>
<a href="https://www.google.com" target="_blank">Visitar Ejemplo</a>
```

El atributo `target` se utiliza cuando queremos abrir un enlace externo a nuestra web en una nueva pestaña. Si vamos a navegar en nuestra web, no es necesario definir el atributo target.

### 3.5 Imágenes

```html
<img
  src="./imgs/imagen.jpg"
  alt="Descripción de la imagen"
  title="Titulo de la imagen"
/>
```

El atributo `alt` es muy importante. Da accesibilidad y tiene que tener una descripción de la imagen.

El atributo `title` le da un titulo a la imagen y será visible cuando se pase el mouse por encima de la imagen.

## 4. Tablas

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Juan</td>
    <td>25</td>
  </tr>
</table>
```

## 5. Formularios

```html
<form action="/submit" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />
  <button type="submit">Enviar</button>
</form>
```

`action="/submit":` Especifica la URL a la que se enviarán los datos del formulario cuando se envíe

`method="POST":` Indica el método HTTP utilizado para enviar los datos

`for="nombre":` Asocia la etiqueta con el input que tiene el mismo ID.
Propósito: Mejora la accesibilidad y permite hacer click en la etiqueta para seleccionar el campo

`type="text":` Define la entrada como un campo de texto.

`id="nombre":` Proporciona un identificador único para el elemento

`name="nombre":` Especifica el nombre del campo para cuando se envían los datos del formulario

`type="submit":` Define el botón como un botón de envío de formulario
Cuando se hace click

El atributo name es crucial para el procesamiento del lado del servidor
El atributo id es importante para la manipulación de JavaScript y la asociación de etiquetas
Los atributos type ayudan a definir el comportamiento de los elementos del formulario
Usar una `<label>` mejora la usabilidad y accesibilidad del formulario, especialmente para lectores de pantalla

### Validaciones de Formularios

HTML5 proporciona atributos integrados para validar los datos que el usuario ingresa en un formulario antes de enviarlos al servidor. Esto se conoce como validación del lado del cliente.

- `required`: Hace que el campo sea obligatorio. El formulario no se enviará si este campo está vacío.
- `minlength` y `maxlength`: Especifican la longitud mínima y máxima (en cantidad de caracteres) que debe tener el texto ingresado. Son muy útiles para contraseñas o nombres de usuario.
- `min` y `max`: Especifican el valor numérico mínimo y máximo permitido. Se usa principalmente con `type="number"`, `type="range"` o `type="date"`.
- `pattern`: Permite definir una expresión regular (RegEx) que el valor del campo debe cumplir para ser considerado válido (por ejemplo, validar un formato específico de DNI o código postal).
- `type="email"`, `type="url"`, `type="number"`: Al usar los tipos correctos de input, el navegador ya incluye una validación automática (ej. verificar que un email tenga el formato `texto@dominio.com`).

**Ejemplo de validaciones:**

```html
<form action="/registro" method="POST">
  <label for="usuario">Usuario (3-15 caracteres):</label>
  <input type="text" id="usuario" name="usuario" minlength="3" maxlength="15" required />

  <label for="edad">Edad (entre 18 y 99):</label>
  <input type="number" id="edad" name="edad" min="18" max="99" required />

  <label for="correo">Correo Electrónico:</label>
  <input type="email" id="correo" name="correo" required />

  <button type="submit">Registrarse</button>
</form>
```

## 6. Etiquetas Semánticas

HTML5 introduce etiquetas semánticas para mejorar la estructura:

- `<header>`: Encabezado de la página.
- `<nav>`: Menú de navegación.
- `<main>`: Contenido principal.
- `<section>`: Secciones del contenido.
- `<article>`: Contenido independiente.
- `<aside>`: Contenido relacionado (barra lateral).
- `<footer>`: Pie de página.

## 7. Buenas Prácticas

- Usar etiquetas semánticas adecuadas.
- Mantener una estructura organizada.
- Utilizar atributos `alt` en imágenes para accesibilidad.

## 8. Contenedor general

La etiqueta `<div>` es un contenedor genérico que se utiliza para agrupar otros elementos HTML.

```html
<div class="contenedor">
  <h1>Encabezado dentro de un div</h1>
  <p>Texto dentro de un div.</p>
</div>
```

### ‼️La etiqueta `div` no consta de semántica, por lo que es recomendable utilizarla lo menos posible. No está mal ni penalizado su uso, pero si podemos remplazarla por una etiqueta semantica, debemos hacerlo.

# Otras etiquetas de HTML5

## 1. `<fieldset>` (Campo de formulario)

Agrupa elementos dentro de un formulario, mejorando la accesibilidad y organización visual.

```html
<fieldset>
  <legend>Datos Personales</legend>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" />
</fieldset>
```

## 2. `<legend>` (Leyenda del formulario)

Proporciona una descripción o título para un grupo de campos en un formulario.

```html
<fieldset>
  <legend>Datos de Contacto</legend>
  <label for="email">Correo Electrónico:</label>
  <input type="email" id="email" />
</fieldset>
```

## 3. `<mark>` (Texto resaltado)

Resalta texto para indicar relevancia en el contexto.

```html
<p>La palabra <mark>HTML</mark> es fundamental para el desarrollo web.</p>
```

## 4. `<strong>` (Texto en negrita con énfasis)

Indica importancia especial con valor semántico.

```html
<p>
  Es <strong>importante</strong> revisar todos los detalles antes de enviar.
</p>
```

## 5. `<b>` (Texto en negrita, sin énfasis semántico)

Cambia la apariencia a negrita sin importancia semántica.

```html
<p>Este texto es <b>negrita</b>, pero no aporta propiedades semánticas.</p>
```

## 6. `<i>` (Texto en cursiva, sin énfasis semántico)

Cambia la apariencia a cursiva sin significado semántico.

```html
<p>El término <i>función</i> se usa en programación.</p>
```

## 7. `<em>` (Texto enfatizado)

Indica énfasis con valor semántico, generalmente en cursiva.

```html
<p>Este es un <em>ejemplo</em> de énfasis textual.</p>
```

## 8. `<dialog>` (Ventana de diálogo)

Representa un cuadro de diálogo interactivo en HTML5.

```html
<dialog id="miDialogo" closedby="any">
  <h2>Holi</h2>
  <p>Este es un cuadro de diálogo.</p>

  <form method="dialog">
    <button>Cerrar</button>
  </form>
</dialog>
```

## 10. `<details>` (Detalles expandibles)

Crea contenido que el usuario puede expandir o contraer.

```html
<details>
  <summary>Haga clic para más detalles</summary>
  <p>Este es el contenido que se oculta hasta que el usuario lo expanda.</p>
</details>
```

## 11. `<summary>` (Resumen de contenido)

Define el encabezado de un contenido colapsable.

```html
<details>
  <summary>Resumen</summary>
  <p>Contenido expandible cuando se hace clic en el resumen.</p>
</details>
```

## 12. `<wbr>` (Saltos de línea opcionales)

Sugiere una posible ubicación para un salto de línea en palabras largas.

```html
<p>Este es un texto largo que puede <wbr />romperse aquí si es necesario.</p>
```

## 13. `<time>` (Representación de tiempo)

Representa fechas, horas o intervalos de tiempo.

```html
<time datetime="2025-03-25">25 de marzo de 2025</time>
```

## 14. `<progress>` (Indicador de progreso)

Representa el progreso de una tarea.

```html
<progress value="30" max="100">30%</progress>
```

## 15. `<meter>` (Medición de valores dentro de un rango)

Representa un valor dentro de un rango conocido.

```html
<meter value="0.6" min="0" max="1">60%</meter>
```

### Nota: Puede que alguna de estas etiquetas no estén disponibles en todos los navegadores. Para buscar si las etiquetas están disponibles en todos los navegadores, podés usar la web 👉[caniuse](https://caniuse.com/)👈. Solo se debe colocar el nombre de la etiqueta o del atributo y ver el porcentaje de navegadores que acepten esos elementos. Mientras sea mas de 98% estará bien utilizarlo.

### 📚 Enlaces a documentación oficial

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
