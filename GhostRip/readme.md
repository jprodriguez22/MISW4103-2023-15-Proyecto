# GhostRIP
![](https://github.com/jprodriguez22/MISW4103-2023-Grupo13/blob/main/GhostRip/Ghost%20RIP.png)

GhostRIP es una herramienta diseñada específicamente para acelerar el proceso de análisis sobre Ghost. Este es un GUI Ripper de código ligero, escrito en un tiempo de 10 horas, el cuál permite la extracción de screenshots de Ghost con la ventaja de entregarlas organizadas según el viewport y el nombre del nodo. 

## Funcionamiento
GhostRIP está escrito completamente en [WebDriverIO](https://github.com/webdriverio/webdriverio) y utiliza su motor para la extracción de nodos y la interacción con la página web. Este framework poderoso permite automatizar procesos de forma sencilla, y al ser el motor que usa [Kraken](https://github.com/TheSoftwareDesignLab/Kraken) para realizar su interacción, decidimos utilizar WebDriverIO por la familiaridad que teníamos con esta librería.

![WebDriverIO](https://camo.githubusercontent.com/95f9060552c490befea503dea9b87aa13277c0d4ff0aeb18a870f52df665fed4/68747470733a2f2f7765626472697665722e696f2f6173736574732f696d616765732f726f626f742d33363737373838646436333834396335366161356362336633333262313264352e737667)

## Configuración inicial
La aplicación fue escrita completamente usando la versión 16 de Node.JS. **GhostRIP no es compatible con la versión 18 de Node.JS.** Esto se debe a que la versión de WebDriverIO utilizada por Kraken no está soportada por versiones más recientes de Node.JS

Para operar la aplicación solo se requiere de editar el archivo config.json con la información relevante al contexto de la página y los viewports a utilizar. **El código actualmente solo soporta Chrome**

![imagen](https://github.com/jprodriguez22/MISW4103-2023-Grupo13/assets/142239371/7456bd7d-19a6-42c9-8dd8-da45f472aa68)

Debido a que este ripper ya está construido para las diferentes versiones de Ghost, solo son obligatorios los siguientes atributos:
* **headless:** Si su valor es true, se ejecuta el navegador escogido en modo headless.
* **horizontal:** Invierte la altura y el ancho para cambiar la orientación de la pantalla
* **rip:** Si su valor es false, se ignora la página y no se ejecutan pruebas exploratorias
* **email:** Correo de acceso a Ghost
* **password:** Contraseña de acceso a Ghost

## Ejecución
Primero se deben instalar las dependencias con `npm install`

La aplicación se ejecuta con el comando `node index.js`. Es importante ejecutarla en la versión 16 de Node.JS