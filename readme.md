# Grupo 13 - MISW4103 - Pruebas automatizadas de Software


| Nombre                      | Correo                         |
|-----------------------------|--------------------------------|
| Juan Pablo Lora Hernández   | j.lora@uniandes.edu.co         |
| Julian Camilo Mora Valvuena | j.morav@uniandes.edu.co        |
| Juan Pablo Rodriguez Garcia | jp.rodriguez22@uniandes.edu.co |

## Semana 8

### Preparación antes de las pruebas:
1. En el directorio raíz del repositorio, ejecute el comando "npm install". Asegurese que está usando NodeJS en la versión 16

2. Es muy importante que se asegure que en la ruta dónde descargue el repositorio no tenga espacios

3. Todas las pruebas fueron construidas en Windows 10 y 11

4. En caso de que alguna de las pruebas no funcione en Mac o en Linux, por favor contactar al equipo. Ninguno de los miembros cuenta con estos sistemas operativos, por lo que los scripts están construidos bajo información recolectada por otros equipos y no son verificables

### Ejecución de las pruebas

#### Windows
1. Para ejecutar las pruebas de esta semana identifique en la carpeta e2e los script que inician con el prefijo W7 y W1
2. Encontrará las pruebas para cada estrategia en Kraken y un general llamado w7_kraken.bat con el que podrá ejecutar las 60 pruebas en consecución
3. Para ejecutar las pruebas en Cypress puede utilizar los scripts según la generación de datos deseada: W1_Cypress_aleatorio.bat, W1_Cypress_dinamico.bat, W1_Cypress_priori.bat.
4. Para ejecutar las nuevas pruebas E2E en Cypress, según la estrategia 2 de la semana 1, puede utilizar el siguiente script: W1_E2_Cypress.bat
5. En caso de que el script de Cypress no funcione, en la línea de comando puede ejecutar npx cypress run --spec cypress/e2e/ghost-tests/data_generation

#### Linux
1. En la carpeta e2e podrá encontrar los scripts para ejecutar todas las pruebas de Kraken y todas las pruebas de Cypress
2. Antes de poder ejecutarlos, debe convertir los scripts.sh en ejecutables escribiendo en la terminal sudo chmod +x w7_cypress.sh y sudo chmod +x w7_kraken.sh

#### Mac
1. En la carpeta e2e podrá encontrar los scripts para ejecutar todas las pruebas de Kraken y todas las pruebas de Cypress
2. Antes de poder ejecutarlos, debe convertir los scripts.sh en ejecutables escribiendo en la terminal chmod +x w7_cypress.sh y chmod +x w7_kraken.sh

### Ejecución de GhostRIP
1. Dirijase a la carpeta GhostRIP en el directorio raíz
2. Ejecute el comando node index.js para realizar las pruebas
3. Puede cambiar los parámetros para ajustar las pruebas. La documentación de los cambios que puede hacer las encuentra en el siguiente enlace https://github.com/jprodriguez22/MISW4103-2023-Grupo13/wiki/GhostRIP


## Semana 7

### Preparación antes de las pruebas:
1. En el directorio raíz del repositorio, ejecute el comando "npm install". Asegurese que está usando NodeJS en la versión 16

2. Es muy importante que se asegure que en la ruta dónde descargue el repositorio no tenga espacios

3. Todas las pruebas fueron construidas en Windows 10 y 11

4. En caso de que alguna de las pruebas no funcione en Mac o en Linux, por favor contactar al equipo. Ninguno de los miembros cuenta con estos sistemas operativos, por lo que los scripts están construidos bajo información recolectada por otros equipos y no son verificables

### Ejecución de las pruebas

#### Windows
1. Para ejecutar las pruebas de esta semana identifique en la carpeta e2e los script que inician con el prefijo W7
2. Encontrará las pruebas para cada estrategia en Kraken y un general llamado w7_kraken.bat con el que podrá ejecutar las 60 pruebas en consecución
3. Para ejecutar las pruebas en Cypress puede utilizar el script w7_cypress.bat
4. En caso de que el script de Cypress no funcione, en la línea de comando puede ejecutar npx cypress run --spec cypress/e2e/ghost-tests/data_generation

#### Linux
1. En la carpeta e2e podrá encontrar los scripts para ejecutar todas las pruebas de Kraken y todas las pruebas de Cypress
2. Antes de poder ejecutarlos, debe convertir los scripts.sh en ejecutables escribiendo en la terminal sudo chmod +x w7_cypress.sh y sudo chmod +x w7_kraken.sh

#### Mac
1. En la carpeta e2e podrá encontrar los scripts para ejecutar todas las pruebas de Kraken y todas las pruebas de Cypress
2. Antes de poder ejecutarlos, debe convertir los scripts.sh en ejecutables escribiendo en la terminal chmod +x w7_cypress.sh y chmod +x w7_kraken.sh

## Semana 6
Para ejecutar las pruebas construidas en la semana 6, siga los siguientes pasos:

### Preparación antes de las pruebas:
1. En el directorio raíz del repositorio, ejecute el comando "npm install". Asegurese que está usando NodeJS en la versión 16

2. Para esta semana se cuenta con una versión desplegada en una máquina virtual de Ghost 5.72 y Ghost 3.44. Las rutas de estos servicios son http://146.190.196.137:2368/ y http://146.190.196.137:3001/, respectivamente.

3. Ingrese a la carpeta W5 y acceda al archivo properties.json. En este encontrará lo siguiente:

4. Es muy importante que se asegure que en la ruta dónde descargue el repositorio no tenga espacios. BackstopJS tiene un bug que no permite inicializar el servicio en la carpeta si es el caso

| Propiedad                      | Valor                         |
|-----------------------------|--------------------------------|
| LOGINEMAIL         | admin@uniandes.edu.co    |
| LOGINPASSWORD   | administrador        |

Asegurese de que estos sean los valores que se encuentran en el archivo antes de ejecutar la prueba. De lo contrario, las pruebas no funcionarán. Puede modificar la propiedad NEWPASSWORD, sin embargo, no se recomienda que lo haga para garantizar la estabilidad de las pruebas

5. Todas las pruebas fueron construidas en Windows 10 y Windows 11

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
1. Asegurese de tener instalado backstop en global: npm install -g backstopjs
2. Una vez finalice la instalación, ejecute el comando backstop remote para iniciar un servicio en la carpeta.
3. Ejecute el comando backstop reference, para cargar las imágenes de referencia obtenidas de las pruebas
4. Finalmente, ejecute el comando backstop test para iniciar las pruebas. Al finalizar, se le cargará un navegador con las comparaciones
