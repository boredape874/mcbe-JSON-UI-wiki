# Resource Pack Flow

JSON UI lives inside a resource pack. The Bedrock client does not load random JSON files automatically. The files must be placed in the correct folder and registered.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="Resource pack UI loading flow">

## Minimal resource pack shape

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

## What each part does

`manifest.json` tells Minecraft that this folder is a resource pack.

`ui/_ui_defs.json` tells Minecraft which UI JSON files to load.

`ui/server_form.json`, `ui/hud_screen.json`, and similar files modify or replace specific built-in screens.

`textures/ui/` stores image files used by controls.

## Example `_ui_defs.json`

```json
{
  "ui_defs": [
    "ui/server_form.json",
    "ui/hud_screen.json"
  ]
}
```

If a UI file is not listed here, Bedrock may not load it.

## Common mistake

Do not create a nice `my_menu.json` file and expect it to show up by itself. You need:

1. a registered file in `_ui_defs.json`
2. the correct namespace
3. an insertion point into an existing screen
4. the textures used by that UI
