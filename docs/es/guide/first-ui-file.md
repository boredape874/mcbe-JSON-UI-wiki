# Primer Archivo UI

El ejemplo mas simple es poner un label en el centro del HUD.

## 1. Registrar el archivo

`ui/_ui_defs.json`:

```json
{
  "ui_defs": [
    "ui/hud_screen.json"
  ]
}
```

## 2. Modificar una pantalla

`ui/hud_screen.json`:

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

Si no aparece, revisa `_ui_defs.json`, namespace y cache del resource pack.
