# Shells visuales

Un shell visual es el marco reutilizable alrededor de un form, panel HUD o menú.

<img class="jsonui-diagram" src="/assets/diagrams/visual-shell.svg" alt="Capas de un shell visual">

## Estructura de capas

```text
background
  outer frame
    header
    content region
    footer buttons
    overlays
```

## Textura contra JSON

Usa texturas para:

- fondos complejos
- gradientes
- bordes pixel-art
- sombras
- esquinas decorativas

Usa controles JSON para:

- layout
- bindings
- visibilidad
- estados focus y hover
- filas y botones repetidos

## Templates compartidos

En packs grandes, crea un shell template por familia visual:

```text
common/visuals/panel_shell.json
common/visuals/shop_card.json
common/visuals/dialog_shell.json
```

Después cada feature rellena la región de contenido en vez de reconstruir el marco.
