# Primer archivo UI

Esta página muestra el patrón práctico más pequeño de JSON UI: una pantalla con un label centrado.

## 1. Registrar el archivo

Crea `ui/_ui_defs.json`:

```json
{
  "ui_defs": [
    "ui/hud_screen.json"
  ]
}
```

## 2. Modificar una pantalla

Crea `ui/hud_screen.json`:

```json
{
  "namespace": "hud",
  "root_panel/root_panel/test_label": {
    "type": "label",
    "text": "Hello Bedrock UI",
    "localize": false,
    "size": [160, 20],
    "anchor_from": "center",
    "anchor_to": "center",
    "color": [1, 1, 1],
    "shadow": true
  }
}
```

Este tipo de clave basada en ruta modifica una ruta de controles que ya existe. La ruta exacta depende de la pantalla que estés editando.

## 3. Recargar el pack

Aplica el RP en un mundo. Si cambias archivos y nada se actualiza, Minecraft puede estar usando una copia en caché. Sube la versión del resource pack en `manifest.json` o vuelve a aplicar el pack.

## Por qué esto no sirve para todas las pantallas

Cada pantalla tiene rutas de control distintas. HUD, chat, inventario y server forms no usan los mismos puntos de inserción.

La primera habilidad en JSON UI es saber qué pantalla estás editando.
