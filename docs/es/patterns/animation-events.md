# Eventos de animación

Las animaciones en JSON UI suelen reproducirse desde un evento de UI con nombre. Una buena arquitectura separa la fuente del evento y el objetivo animado.

<img class="jsonui-diagram" src="/assets/diagrams/animation-event-flow.svg" alt="Flujo de eventos de animación">

## Patrón básico

El control de entrada emite un evento de botón personalizado:

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.panel.slide_in",
  "mapping_type": "pressed"
}
```

El control animado escucha con `play_event`:

```json
{
  "anim_type": "offset",
  "duration": 0.35,
  "easing": "out_cubic",
  "from": [80, 0],
  "to": [0, 0],
  "play_event": "button.panel.slide_in",
  "resettable": true
}
```

## Regla del wrapper estable

Si un control se destruye y se recrea, el timing de eventos se vuelve difícil de razonar. Mantén vivo un wrapper estable y anima un hijo dentro de él.

```text
stable_panel
  motion_panel  <- aquí viven las animaciones
    content
```

## Estado contra movimiento

No hagas que un solo evento haga todo cuando la UI es compleja.

Mejor separación:

- evento de estado: cambia tab seleccionada o ruta visible
- evento de movimiento: reproduce la animación de transición

En server forms, ten cuidado con mappings personalizados que envíen o cierren el form sin querer. Si dudas, deja el envío real del formulario solo en `button.form_button_click`.

## Tipos comunes

| Tipo | Uso |
| --- | --- |
| `offset` | paneles deslizantes, movimiento de tarjetas |
| `size` | crecer, reducir, pulse, ilusión de progreso |
| `alpha` | fade in/out |
| `uv` o valores de sprite | animación de textura si la pantalla lo soporta |

## Checklist de repetición

Si una animación se reproduce una vez y se detiene:

1. ¿Tiene `play_event`?
2. ¿`resettable` es true?
3. ¿El evento se emite otra vez?
4. ¿El control animado sigue vivo?
5. ¿Otro cambio de estado reemplaza el control antes de la animación?
