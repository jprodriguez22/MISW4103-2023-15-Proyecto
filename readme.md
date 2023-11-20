# Grupo 13 - MISW4103 - Pruebas automatizadas de Software


| Nombre                      | Correo                         |
|-----------------------------|--------------------------------|
| Jose Manuel Garcia          | jm.garciad1@uniandes.edu.co    |
| Juan Pablo Lora Hernández   | j.lora@uniandes.edu.co         |
| Julian Camilo Mora Valvuena | j.morav@uniandes.edu.co        |
| Juan Pablo Rodriguez Garcia | jp.rodriguez22@uniandes.edu.co |

## Semana 6
Para ejecutar las pruebas construidas en la semana 6, siga los siguientes pasos:

### Preparación antes de las pruebas:
1. En el directorio raíz del repositorio, ejecute el comando "npm install". Asegurese que está usando NodeJS en la versión 16

2. Para esta semana se cuenta con una versión desplegada en una máquina virtual de Ghost 5.72 y Ghost 3.44. Las rutas de estos servicios son http://146.190.196.137:2368/ y http://146.190.196.137:3001/, respectivamente.

3. Ingrese a la carpeta W5 y acceda al archivo properties.json. En este encontrará lo siguiente: 

| Propiedad                      | Valor                         |
|-----------------------------|--------------------------------|
| LOGINEMAIL         | admin@uniandes.edu.co    |
| LOGINPASSWORD   | administrador        |

Asegurese de que estos sean los valores que se encuentran en el archivo antes de ejecutar la prueba. De lo contrario, las pruebas no funcionarán. Puede modificar la propiedad NEWPASSWORD, sin embargo, no se recomienda que lo haga para garantizar la estabilidad de las pruebas

4. Todas las pruebas fueron construidas en Windows 10 y Windows 11

### Ejecución de las pruebas:
1. En la carpeta E2E encontrará 3 scripts con extensión .bat: 
    >* Kraken-tests_G3_Win.bat ejecuta todas las pruebas construidas para la versión de Ghost 3. Estos códigos se encuentran en ./W5/features/Ghost 3
    >* Kraken-tests_G5_Win.bat ejecuta todas las pruebas construidas para la versión de Ghost 5. Estos códigos se encuentran en ./W5/features/Ghost 5
    >* Kraken-tests_VRT_Win.bat ejecuta las 10 pruebas escogidas en ambas versiones de Ghost. Estos códigos se encuentran en ./W5/features/VRT/Ghost 3 y ./W5/features/VRT/Ghost 5
2. Seleccione el script que desee correr. Sin embargo, una vez inicializado no debe cerrar la linea de comandos hasta que todas las pruebas terminen. De lo contrario, deberá guardar los archivos en la carpeta de features en su respectiva carpeta origen

### Ejecución de las comparaciones en ResembleJS:
1. Asegurese de tener instalados resemble.js y los modulos de node.js "fs" y "path": npm install -g backstopjs
2. Una vez instalado esto, y estando dentra de la ruta MISW4103-2023-Grupo13\W5\VRTImages (según el repositorio) ejecutar el comando: node script.js
3. Espere a que termine la ejecución del comando para ver como se crean todas las imagenes y reportes HTML dentro de la carpeta MISW4103-2023-Grupo13\W5\reports
4. Ingrese a la carpeta reports y allí podrá abrir los archvios HTML generados marcados con el respectivo ID de cada prueba.

### Ejecución de las comparaciones en Backstop:
1. Asegurese de tener instalado backstop en global: npm install backstopjs 
2. Una vez finalice la instalación, ejecute el comando backstop remote para iniciar un servicio en la carpeta
3. Ejecute el comando backstop reference, para cargar las imágenes de referencia obtenidas de las pruebas
4. Finalmente, ejecute el comando backstop test para iniciar las pruebas. Al finalizar, se le cargará un navegador con las comparaciones
