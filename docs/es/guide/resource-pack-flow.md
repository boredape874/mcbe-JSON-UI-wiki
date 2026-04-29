# Flujo Del Resource Pack

JSON UI vive dentro de un resource pack. Bedrock no carga archivos al azar: tienes que registrarlos.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="Flujo de resource pack">

## Estructura minima

```text
MyPack_RP/
  manifest.json
  ui/
    _ui_defs.json
    hud_screen.json
    server_form.json
  textures/
    ui/
      my_icon.png
```

## Roles

`manifest.json` define el resource pack.

`ui/_ui_defs.json` registra los archivos UI.

`ui/server_form.json` y `ui/hud_screen.json` modifican pantallas del cliente.

`textures/ui/` guarda imagenes para los controles.

## Ejemplo

```json
{
  "ui_defs": [
    "ui/server_form.json",
    "ui/hud_screen.json"
  ]
}
```
