# Angular

## Cosas a saber sobre Angular

Desde Angular v17, por defecto los proyectos trabajan sin módulos 

Pero para trabajar de forma tradicional con modulos, a la hora de crear un proyecto se usa: ng new <nombre de la aplicación> --standalone false


## Comandos de cli angular

GENERALES:

ng g c user --dry-run -> con este comando, hace una simulación de lo que va crear.

COMPONENTES:

ng g c --inline-style (-s) -> crea los estilos css en el mismo componente. (no crea un fichero aparte).

ng g c about --skip-tests -> con esta bandera, crea los componentes y dentro de la carpeta, no crea el fichero para los test.


SERVICIOS:

ng g s auth



## Decoradores de angular 

Desde que angular incorporo el @Injectable providedIn: 'root', se puede inyectar cualquier servicio en la aplicación y angular lo va a reconocer sin que este importado en ningun modulo ni nada.
![decorador Injectable](/imgs/decoradorInjectable.PNG)
