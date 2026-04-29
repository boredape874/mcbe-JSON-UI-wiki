# Rol de cada archivo

Esta tabla explica los archivos comunes de un resource pack con JSON UI.

| Archivo | Rol |
| --- | --- |
| `manifest.json` | Define el resource pack. |
| `ui/_ui_defs.json` | Registra archivos de UI. |
| `ui/hud_screen.json` | Modifica elementos del HUD. |
| `ui/chat_screen.json` | Modifica la UI del chat. |
| `ui/server_form.json` | Personaliza y enruta formularios del servidor. |
| `textures/ui/*.png` | Imágenes de UI usadas por controles de imagen. |
| `_global_variables.json` | Valores compartidos por archivos de UI. |

## Regla de archivos de entrada pequeños

Mantén pequeños los archivos de entrada:

- `_ui_defs.json` solo registra archivos
- `server_form.json` enruta formularios
- `hud_screen.json` inserta widgets del HUD

Coloca el código de cada feature en carpetas:

```text
ui/
  forms/
    shop_menu/
      index.json
      templates.json
  hud/
    status/
      index.json
      templates.json
```
