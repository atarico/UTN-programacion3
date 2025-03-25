# Apuntes de Estudio sobre HTTP

## 1. Introducción a HTTP

HTTP (HyperText Transfer Protocol) es el protocolo que permite la comunicación entre los navegadores y los servidores web. Es la base de la web, permitiendo la transferencia de páginas, imágenes, videos y cualquier otro **recurso**. Funciona bajo un modelo `cliente-servidor`, lo que significa que un cliente (como un navegador) envía una solicitud y un servidor responde con los datos correspondientes.

HTTP es un protocolo sin estado, lo que significa que cada solicitud es independiente de las anteriores. Sin embargo, tecnologías como las **cookies**, las **sesiones** y los **tokens** permiten mantener cierta información entre múltiples solicitudes.

## 2. Versiones de HTTP

- **HTTP/1.0 (1996)**: Primera versión estandarizada. Cada solicitud abre una nueva conexión con el servidor, lo que puede hacer que la comunicación sea más lenta.
- **HTTP/1.1 (1997)**: Introduce conexiones persistentes, lo que permite reutilizar la misma conexión para múltiples solicitudes, mejorando el rendimiento.
- **HTTP/2 (2015)**: Introduce la multiplexación, permitiendo que múltiples solicitudes se envíen al mismo tiempo en una única conexión. También mejora la compresión de los encabezados y la priorización de los recursos.
- **HTTP/3 (En desarrollo)**: Basado en QUIC, un protocolo que reemplaza TCP por UDP para mejorar la velocidad y la seguridad.

## 3. Ciclo de una Petición HTTP

El flujo de una petición HTTP sigue estos pasos:

1. El cliente (por ejemplo, un navegador o una aplicación) envía una

   **solicitud = `request`** HTTP al servidor.

2. El servidor recibe la solicitud, la procesa y genera una

   **respuesta = `response`.**

3. El servidor envía la respuesta HTTP al cliente.
4. El cliente interpreta la respuesta y la muestra al usuario (por ejemplo, renderizando una página web en el navegador).

## 4. Métodos HTTP

Los métodos HTTP definen el tipo de acción que se desea realizar sobre un recurso.

- **GET**: Trae los datos de un recurso.
- **POST**: Envía datos al servidor para ser procesados y crear un recurso.
- **PUT**: Actualiza completamente un recurso existente o lo crea si no existe.
- **DELETE**: Elimina un recurso en el servidor.
- **PATCH**: Modifica parcialmente un recurso existente.

## 5. Códigos de Estado HTTP

Los códigos de estado informan sobre el resultado de una solicitud:

### 100 al 199 - Informativos

- **100 Continue**: Indica que el servidor ha recibido los encabezados y espera el cuerpo de la solicitud.
- **101 Switching Protocols**: El servidor acepta cambiar a un protocolo diferente.

### 200 al 299 - Éxito

- **200 OK**: La solicitud fue exitosa y el servidor devuelve el recurso solicitado.
- **201 Created**: Un recurso fue creado con éxito en el servidor.
- **204 No Content**: La solicitud fue exitosa, pero no hay contenido en la respuesta.

### 300 al 399 - Redirecciones

- **301 Moved Permanently**: El recurso ha sido movido a una nueva URL de forma permanente.
- **302 Found**: El recurso ha sido movido temporalmente.
- **304 Not Modified**: Indica que el recurso no ha cambiado desde la última vez que fue solicitado.

### 400 al 499 - Errores del Cliente

- **400 Bad Request**: La solicitud es inválida o mal formada.
- **401 Unauthorized**: Se requiere autenticación para acceder al recurso.
- **403 Forbidden**: El acceso al recurso está prohibido.
- **404 Not Found**: El recurso solicitado no existe en el servidor.

### 500 al 599 - Errores del Servidor

- **500 Internal Server Error**: Ocurrió un error interno en el servidor.
- **502 Bad Gateway**: El servidor actuando como proxy recibió una respuesta inválida de otro servidor.
- **503 Service Unavailable**: El servidor no puede manejar la solicitud en ese momento, normalmente debido a mantenimiento o sobrecarga.

## 6. Encabezados HTTP

Los encabezados HTTP proporcionan información adicional en las solicitudes y respuestas. Se dividen en:

### Encabezados de solicitud

Informan al servidor sobre la solicitud del cliente.

- `User-Agent`: Indica el navegador o cliente que hace la solicitud.
- `Accept`: Especifica los formatos de respuesta que el cliente puede manejar.
- `Authorization`: Proporciona credenciales para autenticación.
- `Content-Type`: Indica el tipo de contenido enviado (ej. `application/json`).

### Encabezados de respuesta

Proporcionan información sobre la respuesta del servidor.

- `Server`: Indica el software del servidor.
- `Content-Length`: Longitud del contenido en la respuesta.
- `Set-Cookie`: Envia cookies al cliente.

### Encabezados de control de caché

Administran cómo se almacenan en caché los recursos.

- `Cache-Control`: Controla cómo el contenido debe ser almacenado en caché.
- `Expires`: Fecha de expiración del contenido en caché.
- `ETag`: Identificador único de una versión de un recurso.

## 7. Seguridad en HTTP

- **HTTPS (HTTP Secure)**: Utiliza TLS/SSL para cifrar la comunicación entre cliente y servidor, protegiendo la información de ataques de interceptación.
- **CORS (Cross-Origin Resource Sharing)**: Permite controlar qué dominios pueden acceder a los recursos de un servidor.
- **CSRF (Cross-Site Request Forgery)**: Ataque en el que se engaña a un usuario autenticado para que realice acciones no deseadas; se mitiga con tokens de autenticación.
- **XSS (Cross-Site Scripting)**: Ataque en el que se inyecta código malicioso en una página web; se previene con encabezados como `Content-Security-Policy`.

## 8. HTTP vs. WebSockets

- **HTTP**: Basado en un modelo de solicitud-respuesta donde cada petición es independiente.
- **WebSockets**: Permite una comunicación bidireccional y persistente entre cliente y servidor, ideal para aplicaciones en tiempo real como chats o juegos online.

## 9. Herramientas para Analizar HTTP

- **Postman**: Permite realizar pruebas de API con solicitudes HTTP personalizadas.
- **cURL**: Herramienta de línea de comandos para hacer solicitudes HTTP.
- **DevTools de los Navegadores**: Ofrecen herramientas para inspeccionar y analizar solicitudes y respuestas HTTP en tiempo real.

## 10. Conclusión

HTTP es el pilar de la web moderna. Comprender cómo funciona, sus métodos, códigos de estado y medidas de seguridad es fundamental para desarrollar aplicaciones eficientes y seguras. Con cada nueva versión del protocolo, se mejora la velocidad, seguridad y eficiencia de la comunicación en la web.

## 📚 11. Documentación oficial

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/HTTP)
