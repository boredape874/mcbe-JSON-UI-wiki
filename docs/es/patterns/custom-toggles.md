# Toggles personalizados

Los toggles personalizados son útiles cuando un control necesita estado persistente on/off, visuales distintos para checked/unchecked o un efecto animado de switch.

<img class="jsonui-diagram" src="/assets/diagrams/toggle-illusion.svg" alt="Ilusión de toggle animado">

## Elegir el control correcto

Usa un toggle real cuando necesitas estado persistente:

- ajustes on/off
- pestaña seleccionada
- estado visible/oculto
- menú con comportamiento parecido a radio buttons

Usa un botón cuando solo necesitas un evento de click:

- reproducir una animación
- pasar a la página siguiente
- hacer pulse en una tarjeta
- enviar un botón de server form

No fuerces `common.toggle` para que actúe como un emisor genérico de eventos. `toggle_on_button` y `toggle_off_button` son eventos que el toggle escucha; no son una API de salida fiable para otros controles.

## Animación simple por click

Para una animación activada por click, normalmente es más simple usar un botón con evento pressed personalizado.

```json
{
  "type": "button",
  "size": [40, 20],
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.my_feature.play",
      "mapping_type": "pressed"
    }
  ]
}
```

El hijo animado escucha ese evento:

```json
{
  "anim_type": "offset",
  "duration": 0.25,
  "from": [16, 0],
  "to": [0, 0],
  "play_event": "button.my_feature.play",
  "resettable": true
}
```

Para ver un snippet listo para copiar, abre [Ejemplos con código](../examples/index.md#toggle-personalizado).

## Ilusión de toggle animado

Para una animación on/off, divide el problema:

- el toggle real posee `#toggle_state`
- un binding convierte el estado en `#collection_length`
- una factory crea un hijo de entrada o salida
- ese hijo reproduce la animación al crearse

Se llama ilusión porque el toggle no se anima por sí mismo. Cambia el estado y luego los controles hijos recién creados dan la sensación de animación.

## Estados múltiples

Para UI de varios pasos como página 1 -> página 2 -> página 3, usa un grupo de radio toggles, toggles ocultos de estado o un cycler. Un toggle normal solo es on/off.

## Hover y focus

Los visuales de hover y focus vienen de los controles asignados a:

- `checked_control`
- `unchecked_control`
- `checked_hover_control`
- `unchecked_hover_control`
- variantes locked si existen

Si quieres cambiar el borde de focus, reemplaza los controles visuales de estado. No dependas de una propiedad mágica de color de focus.

## Depuración

Si la animación del toggle solo se reproduce una vez:

1. Revisa si el control animado se recrea.
2. Usa `resettable: true` en animaciones que deben repetirse.
3. Mantén estable el wrapper animado cuando uses `play_event`.
4. Separa eventos de estado y eventos de movimiento.
