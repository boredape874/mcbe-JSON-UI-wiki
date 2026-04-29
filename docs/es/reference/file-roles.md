# Roles De Archivos

| Archivo | Rol |
| --- | --- |
| `manifest.json` | Define el resource pack. |
| `ui/_ui_defs.json` | Registra archivos UI. |
| `ui/hud_screen.json` | Modifica el HUD. |
| `ui/chat_screen.json` | Modifica el chat. |
| `ui/server_form.json` | Personaliza server forms. |
| `textures/ui/*.png` | Imagenes para UI. |
| `_global_variables.json` | Valores compartidos. |

Mantén los archivos de entrada pequenos y separa funciones:

```text
ui/forms/shop_menu/index.json
ui/forms/shop_menu/templates.json
```
