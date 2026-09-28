# Funcionalidades

## Calendario
Frame donde se muestra una representacion del google calendar en vivo
[] Mostrar 1 dia por columna
[] Mostrar las actividades de cada dia

### Actividades
Bloques de tiempo que definen una actividad en un mismo dia, tienen, nombre, horas y fecha, colores, descripcion y pueden ser hijos de un horario (Ej Horarios de Judo, Horario de clases de la U, ...)
[] Se pueden crear
[] Se pueden editar
[] Se pueden eliminar
[] Se conectan directamente con Google Calendar
[] Se les pueden asignar o deletar tareas

### Tareas
Son objetivos concretos chekeables para completar, tipo checklist, tienen titulo, descripccion, y son hijos de una actvidad, y pueden tener una duracion
[] Se pueden crear, actualizar y destruir
[] Se puede asignar y reasignar a una actividad
[] Se pueden checkear
[] Tienen una pestaña dedicada donde solo aparecen las tareas
[] Se visualizan en el calendario, como botones desplegables para ver su contenido.
## Chat
[] Se puede escribir, y enviar mensajes
[] Se pueden ver los mensajes y scrollear el historial
[] Un agente recive los mensaje y los responde
### Agente
Es el atributo de esta aplicacion, recive informacion por chat, y con ella, la organiza con la info que ya tiene, como los calendarios actuales, e informacion guardada de interes, por ejemplo, los horarios de los buses, o tiempo de traslado promedio de un lugar a otro, con esta informacion y la proporcionada, es capaz de modificar, crear, destruir o modificar el calendario, de la manera mas optima, tiene acces odirecto a las actividades y a las tareas, por cada respuesta, lo logico en su actuar seria.
[] Poder modificar y organizar su informacion de contexto
[] Hacer preguntas si es necesario si algo no queda del todo claro
[] Hacer varias modificaciones en cadena
[] Mostrar cada cambio que hace, a manera de un texto
[] Modificar varias actividades y tareas en cadenas en una sola iteracion si es necesario
## Comunicacion con Google Calendar
Estos debe de tener una comunicacion directa con google calendar, mediante un boton, que permita pasar como input el calendario actual, y que este lo reciva y actualize mi calendario.
[] Boton, que envia los calendarios directamente a Google calendar
[] El mismo boton las tareas se envian a Google tasks
[] No actualiza todo, solo lo necesario, a manera de un commit por ejemplo