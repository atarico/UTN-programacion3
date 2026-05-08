# Programación 3

### Bienvenido al repo de `Programación 3`. Acá van a encontrar material resumido de lo visto en clase de desarrollo web.

## 📂 Estructura del Repositorio

Este repo va a estar dividido en carpetas, cada una correspondiente a un tema específico:

- **`http/`** - Fundamentos del protocolo HTTP.
- **`html/`** - Conceptos clave sobre HTML y estructuras de documentos web.
- **`css/`** - Estilos, diseño y responsive CSS.
- **`javascript/`** - Programación con JavaScript, incluyendo ES6+, JS sincrónico y asincrónico, concepto de web component.
- **`git/`** - Uso de Git y GitHub.
- **`intro-react/`** - Introducción a React.

## 📌 Objetivo

Este repo va a ser para que puedan consultar los temas dados en clase, repasar conceptos, rehacer actividades, etc. Recuerden que todos los temas dados en clase pueden profundizarse viendo las <a href="#documentacion" >documentaciones oficiales</a> de cada tecnología‼️.

## 🚀 Cómo Usar Este Repositorio

1. Clona el repositorio:
   ```bash
   git clone https://github.com/atarico/UTN-programacion3
   ```
2. Navega a la carpeta deseada, por ej:
   ```sh
   cd programacion3/javascript
   ```
3. Ahí encontrarás los archivos y documentación dada en clase.

## 🛠 Requisitos

Se recomienda tener las siguientes herramientas en su PCs. Ya que son las herramientas con las que contamos en clase.

- **Node.js y npm** para usar JS en el backend y manejar los paquetes necesarios.
- **Git** para trabajar con el control de versiones.
- **Visual Studio Code** como editor de código.
- **React.js** para el desarrollo de interfaces interactivas.

<span id="documentacion"></span>

## ⚙️ Configuración del Entorno (Opcional)

Para mejorar la experiencia en la terminal de Windows (PowerShell), recomendamos instalar **fnm** (Fast Node Manager) para gestionar versiones de Node.js y **Oh My Posh** para personalizar visualmente la consola.

### Instalar fnm en PowerShell

1. Abre PowerShell y ejecuta el siguiente comando para instalar `fnm` usando `winget`:
   ```powershell
   winget install Schniz.fnm
   ```
2. Configura tu perfil de PowerShell para que `fnm` se inicie automáticamente. Abre tu perfil con el bloc de notas:
   ```powershell
   notepad $PROFILE
   ```
   *(Si te dice que el archivo no existe, primero crealo ejecutando: `New-Item -Path $PROFILE -Type File -Force`)*
3. Agrega la siguiente línea al final del archivo y guárdalo:
   ```powershell
   fnm env --use-on-cd | Out-String | Invoke-Expression
   ```

   *Si te dice que no se puede ejecutar el script porque está deshabilitado, ejecuta el siguiente comando: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`*

4. Cierra y vuelve a abrir PowerShell. Ahora podés instalar y cambiar de versión de Node.js fácilmente:
   ```powershell
   fnm install 24     # Instala la versión 24 de Node.js
   fnm use 24         # Activa esa versión
   fnm default 24     # Establece la versión 24 como predeterminada
   fnm list           # Lista todas las versiones instaladas
   ```

### Instalar Oh My Posh en PowerShell

1. Abre PowerShell y ejecuta el comando de instalación:
   ```powershell
   winget install JanDeDobbeleer.OhMyPosh -s winget
   ```
2. Cierra y vuelve a abrir PowerShell.
3. Abre nuevamente tu perfil de PowerShell:
   ```powershell
   notepad $PROFILE
   ```
4. Agrega la siguiente línea al final del archivo para inicializar Oh My Posh (usará un tema por defecto):
   ```powershell
   oh-my-posh init pwsh | Invoke-Expression
   ```

   *Para cambiar el tema de Oh My Posh, modificar el comando de arriba de la siguiente manera: 
   ```powershell
   oh-my-posh init pwsh --config "<theme>" | Invoke-Expression
   ```
   *Reemplaza `<theme>` por el tema que quieras usar, los encuentras [acá](https://ohmyposh.dev/docs/themes)*

5. Guarda el archivo y reinicia PowerShell. 
   > **Nota:** Para que los íconos se vean correctamente, es necesario tener instalada y configurada en la terminal una [Nerd Font](https://www.nerdfonts.com/font-downloads).

   - [Documentation oficial de Oh My Posh](https://ohmyposh.dev/docs/)
   - [Documentation oficial de fnm](https://fnm.vercel.app/)

## 📖 Recursos Adicionales

#### Documentación oficial

- [MDN Web Docs](https://developer.mozilla.org/) (Para http, html, css y JS)
- [W3School](https://www.w3schools.com/) (Para todas las tecnologías web que aplicaremos)
- [GitHub Docs](https://docs.github.com/)
- [React.js Docs](https://react.dev/)
