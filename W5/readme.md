# Grupo 13 - MISW4103 - Pruebas automatizadas de Software


| Nombre                      | Correo                         |
|-----------------------------|--------------------------------|
| Jose Manuel Garcia          | jm.garciad1@uniandes.edu.co    |
| Juan Pablo Lora Hernández   | j.lora@uniandes.edu.co         |
| Julian Camilo Mora Valvuena | j.morav@uniandes.edu.co        |
| Juan Pablo Rodriguez Garcia | jp.rodriguez22@uniandes.edu.co |

## Semana 5
Para ejecutar las pruebas construidas en la semana 5, siga los siguientes pasos:

### Preparación antes de las pruebas:
1. En el directorio raíz del repositorio, ejecute el comando "npm install"
2. Asegurese de tener instalado Ghost. Estas pruebas fueron construidas con la versión 5.72.2 de la aplicación
3. Ghost ya debe estar configurado con un usuario y contraseña de administrador para la ejecución de las pruebas y debe haber accedido al dashboard de forma manual
4. Inicialize Ghost en el puerto por defecto -2368- antes de cada prueba. Puede verificar el puerto con el que inicializa Ghost en el archivo de configuración, ubicado en la carpeta donde tiene la instalación local del programa
5. Si ya tiene información en Ghost, le solicitamos que borre el contenido de la aplicación haciendo lo siguiente: Settings -> Labs -> Delete all content. El no hacerlo puede provocar errores en la ejecución de las pruebas
6. Ingrese a la carpeta e2e-tests y acceda al archivo properties.json. En este encontrará lo siguiente: 

| Propiedad                      | Valor                         |
|-----------------------------|--------------------------------|
| LOGINEMAIL         | admin@uniandes.edu.co    |
| LOGINPASSWORD   | administrador        |

Asegurese de modificar estos valores por los valores con los de su usuario administrador en Ghost. De lo contrario, las pruebas no funcionarán. Puede modificar la propiedad NEWPASSWORD, sin embargo, no se recomienda que lo haga para garantizar la estabilidad de las pruebas

### Kraken:
1. Kraken se debe ejecutar con Node.js versión 16.14.2
2. Navegue a la carpeta e2e-tests y ejecute el script "Kraken-tests_Win". Este es un script que corre de manera secuencial las pruebas en Windows debido a que el código de Kraken no interactua completamente bien con las nuevas versiones de algunos paquetes
3. Una vez finalizadas todas las pruebas, podrá observar los diferentes reportes que genera la aplicación en la carpeta "Reports".

### Cypress:
1. Dirijase a la carpeta e2e-tests y en la términal o en CMD escriba "npx cypress run"
2. Podrá ver los videos de las pruebas en la carpeta "./e2e-tests/cypress/videos"
