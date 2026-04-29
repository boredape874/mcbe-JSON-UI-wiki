# Estados bloqueados

Los estados bloqueados son comunes en árboles de traits, tiendas, quests, recompensas, kits y paneles de administración.

La regla importante:

> JSON UI puede mostrar el candado, pero el servidor debe hacer cumplir el bloqueo.

## Flujo recomendado

```text
el servidor envía el formulario con todos los nodos
        -> JSON UI dibuja los iconos
        -> los nodos bloqueados reciben un overlay de candado
        -> el jugador pulsa un nodo
        -> el servidor revisa el estado de desbloqueo
        -> el servidor acepta, rechaza o refresca el formulario
```

## Estabilidad de índices

No elimines botones bloqueados de la colección salvo que estés listo para remapear todos los índices.

Mejor:

- mantener el índice del botón
- mostrar un overlay de candado
- oscurecer el icono si hace falta
- dejar que el servidor rechace el click

## Patrón de payload

El servidor puede codificar estado en el título, cuerpo o texto del botón si la UI necesita mostrarlo.

```text
button 7 text: trait:combat_crit|locked|Critical Strike
button 8 text: trait:combat_speed|unlocked|Rush
```

La UI puede parsear marcadores, mientras el servidor sigue siendo dueño del estado real de desbloqueo.

## Patrón visual

Un nodo bloqueado suele tener:

- textura base del slot
- textura del icono
- overlay oscuro
- icono de candado
- label opcional de requisito

Usa una textura para el candado y sombras complejas. Usa controles JSON para estado, posición y visibilidad.

## Error común

No dependas de ocultar el botón como seguridad. Un elemento oculto o con apariencia desactivada no es un sistema de permisos. Revisa siempre el estado en el handler de respuesta del servidor.
