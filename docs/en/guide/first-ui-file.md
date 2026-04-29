# Your First UI File

This page shows the smallest practical JSON UI pattern: a screen with a centered label.

## 1. Register the file

Create `ui/_ui_defs.json`:

```json
{
  "ui_defs": [
    "ui/hud_screen.json"
  ]
}
```

## 2. Modify a screen

Create `ui/hud_screen.json`:

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

This kind of path-based key modifies an existing control path. The exact path depends on the screen you are editing.

## 3. Reload the pack

Apply the RP in a world. If you change files and nothing updates, Minecraft may be using a cached copy. Increase the resource pack version in `manifest.json` or reapply the pack.

## Why this is not enough for every screen

Different screens have different control paths. HUD, chat, inventory, and server forms do not use the same insertion points.

The first skill in JSON UI is learning which screen you are editing.
