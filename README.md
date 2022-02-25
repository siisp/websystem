# websystem
Sistema de Web de la Secretaria de investigacion de la UNDAV

#¿Qué es SIISP?
Es el sistema web para la administración de Investigadores y proyectos de Investigación para la Secretaria de Investigación que se encuentra en la Sede Arenales.
En este proyecto participan estudiantes de la Carrera y miembros de LASOL. Desde LASOL se viene dando soporte en el proceso de desarrollo de este proyecto.
#Stack de Tecnologías del proyecto
Angular 1.x:Solución para nuestro sistema Web (Single Page Application)
Angular Material: Framework utilizado para diseño
Firebase: Solución para nuestra aplicación servidora

# Setup del IDE 
##Instalación
Crear una carpeta para alojar el proyect. Ej: projects/lasol/siisp
Instalar el IDE: Web Storm V 2016.1.2, debe ser esa versión para poder registrarlo (link)
Dentro del IDE: Registrarlo utilizando la opción License Server con la siguiente entrada: http://idea.qinxi1992.cn/. Esto se puede hacer en el menu Help->Register…

##Configuración del “Version Control”
Si no lo tiene instalado: Instalar GIT (link)
Abrir el IDE WebStorm (si instalo GIT y tenia abierto el IDE debe cerrarlo y volver a abrirlo) y crear un proyecto nuevo vacío en la carpeta siisp creada en la sección anterior
Ir al menu VCS->Checkout from version control->GitHub. 
Se le pedirán las credenciales de su cuenta en GitHub (si nos la tiene debe crear un usuario en GitHub)
Se le pedira establecer un nuevo password maestro dentro del IDE que se le requerira cada vez que desde el ide quiera realizar determinadas operaciones sobre el version control, entre ellas las de “push”
Se abrira el pop up para realizar un clonde de repositorio. Seleccionar el repositorio: https://github.com/siisp/websystem.git. Si no aparece esa opción,pedirle al administrador que se asocie su cuenta de github al proyecto (debe proveerle su user name de github)
Seleccione cómo paren directory el que corresponde a: siisp. 
Establezca cómo directory name: websystem y haga click en “clone”

##Comandos para set-up del ambiente de desarrollo
Instalar la última versión de node (link). Reiniciar el IDE si estaba abierto para proceder. Para más detalles sobre node y los próximos comandos a ejecutar puede consultar este link
Instalar la ultima version de gulp (link).
Instalar la ltima version de bower (link)
Ejecutar los siguientes comandos. Todos los comandos se pueden ejecutar desde la consola del IDE WebStorm. Para abrir la consola Alt+f12 o ábralo desde el menú View->ToolWindows->Terminal
Los siguientes comandos se ejecutan por única vez 
npm install ->instala el ambiente de desarrollo base: node Js. Todo esto especificado en package.json. Notará que se agrega la carpeta node_modules al finalizar esta instalación.

Los siguientes comandos se ejecutan siempre que se quiera levantar el ambiente de desarrollo (para probar la aplicación)
gulp init-dev: Instala las dependencias del proyecto que están especificadas en bower.json y configura la single page application. Deja el proceso activo en la terminal por lo tanto debe abrir otra consola dentro del IDE para ejecutar otros comandos
gulp connect-dev: Levantar el ambiente de desarrollo, luego de levantarlo se provee la url donde puede acceder a la aplicación. Asegúrese que su firewall no bloquee el puerto asignado.

Los siguientes comandos son para preparar los deploys. Todos los deploys se preparan en la carpeta “dist” (se crea al ejecutar gulp deploy) 
gulp deploy: prepara un ambiente en dist (subcarpeta) para deployar
gulp connect: levanta el ambiente que está en dist para probar el deploy que se preparó

##Deploys 
Instalar por única vez las herramientas de deploy provistas por firebase. Ejecutar desde la consola del IDE: npm install -g firebase-tools
Login a firebase desde la consola: firebase login
Preparar el directorio a publicar: gulp deploy este comando crea una versión mimificada y optima para deployar. Antes de correr este comando modificar las entradas de firebase para los distintos ambientes. Para ello debe modificar el archivor dataService con la configuración al servidor que se desea publicar.
Puede probar la version corriendo el comando: gulp connect que levanta el ambiente que esta en dist
Realizar el deploy: firebase deploy
