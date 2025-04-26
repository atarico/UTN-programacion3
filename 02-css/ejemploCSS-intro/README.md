# Resumen de estilos utilizados

## 1. Estructura del proyecto

### 1.1 Estructura de carpetas

```
carpeta raiz (root)
📁 ejemploCSS-intro
    |
    |__📁css
    |   |
    |   |__ 📄style.css
    |
    |__ 📄index.html
```

### 1.2 Estructura del documento HTML

**Se crea un archivo HTML básico con algunos elementos dentro del body**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Intro a css</title>
  </head>

  <body>
    <header>
      <h1>Bienvenidos a CSS</h1>
    </header>
    <main>
      <section>
        <article>
          <h2>¿Qué es CSS?</h2>
          <p>
            CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para
            describir la presentación de un documento escrito en HTML o XML.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>¿Para qué sirve CSS?</h2>
          <p>
            CSS se utiliza para controlar el diseño y la apariencia de las
            páginas web, permitiendo separar el contenido de la presentación.
          </p>
        </article>
      </section>
    </main>
  </body>
</html>
```

## 2. Formato en los que agregamos estilos

### 2.1 En línea

```html
<h1 style="color: #f00;">Bienvenidos a CSS</h1>
```

### 2.2 Estilos internos

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intro a css</title>
  <style>
    body {
      background-color: #282c34;
      color: #f0f0f0;
      font-family: system-ui, sans-serif;
    }
  </style>
</head>
```

### 2.3 Estilos externos

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intro a css</title>

  <link rel="stylesheet" href="./css/styles.css" />
</head>
```

**Para vincular los archivos debemos colocar la ruta en la que se encuentra el archivo en la propiedad `href`**

**‼️Es IMPORTANTE que declaremos las rutas como relativas utilizando `./` ya que cuando se suba a un servidor de no usar las rutas de marena relativa, esto podría ocacionar problemas**

## Archivo `styles.css`

### Reseteo de estilos generales

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Se agregan estilos al `<section>`, `<h2>` `<p>`

```css
section {
  margin: 20px;
  border: 2px solid #f00;
  padding: 20px;
  background-color: #0e0e0e;
  border-radius: 50px;
  box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.5);
}

h2 {
  color: #0f0;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

p {
  color: rgb(255, 0, 212);
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 20px;
}
```
