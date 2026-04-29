# Barras de progreso

Las barras de progreso en JSON UI normalmente se construyen con frame, panel de clipping e imagen de relleno.

<img class="jsonui-diagram" src="/assets/diagrams/progress-clip.svg" alt="Patrón de clipping para barra de progreso">

## Barra basada en clip

El patrón más estable:

```text
bar_frame
  clip_panel     <- este ancho representa el progreso
    fill_image   <- textura grande o de ancho completo
```

El frame queda fijo. Solo cambia el ancho visible del panel de clipping.

## Fuentes de datos

Una barra de progreso puede venir de:

- valor de scoreboard expuesto al HUD
- payload de title/actionbar
- payload de `#form_text` en un server form
- texto de custom form
- estado de carga solo animado

## Progreso en server forms

En server forms, el servidor puede codificar progreso en el texto del cuerpo.

```text
progress:75|Mining Level
```

JSON UI parsea el valor y ajusta el ancho visible o elige un segmento predefinido. Para menús simples, los segmentos predefinidos son más fáciles que calcular anchuras arbitrarias en píxeles.

## Loading bar animada

Cuando no hay un valor real, usa una animación indeterminada:

```json
{
  "anim_type": "offset",
  "duration": 1.2,
  "from": [-80, 0],
  "to": [220, 0],
  "play_event": "always",
  "loop": true
}
```

Úsala para estados de espera, no para progreso real.

## Progreso con iconos

Las barras tipo corazones o hambre suelen ser iconos repetidos con condiciones de visibilidad por segmento.

```text
segment 1 visible when value >= 1
segment 2 visible when value >= 2
segment 3 visible when value >= 3
```

Esto es más predecible que estirar una textura de icono.

## Depuración

Si la barra no se ve:

1. Revisa frame y fill por separado.
2. Desactiva temporalmente el clipping.
3. Imprime el valor crudo en un debug label.
4. Confirma que el panel padre no mida cero.
