# File Roles

This table explains common files in a JSON UI resource pack.

| File | Role |
| --- | --- |
| `manifest.json` | Defines the resource pack. |
| `ui/_ui_defs.json` | Registers UI files. |
| `ui/hud_screen.json` | Modifies HUD elements. |
| `ui/chat_screen.json` | Modifies chat UI. |
| `ui/server_form.json` | Customizes server forms. |
| `textures/ui/*.png` | UI images used by image controls. |
| `_global_variables.json` | Shared values used by UI files. |

## Thin entry file rule

Keep entry files thin:

- `_ui_defs.json` only registers files
- `server_form.json` routes forms
- `hud_screen.json` inserts HUD widgets

Put feature code in folders:

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
