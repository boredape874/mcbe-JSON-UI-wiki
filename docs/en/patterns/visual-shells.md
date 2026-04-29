# Visual Shells

A visual shell is the reusable frame around a form, HUD panel, or menu.

<img class="jsonui-diagram" src="/assets/diagrams/visual-shell.svg" alt="Visual shell layers">

## Layer Structure

```text
background
  outer frame
    header
    content region
    footer buttons
    overlays
```

## Texture Versus JSON

Use textures for:

- complex backgrounds
- gradients
- pixel borders
- shadows
- decorative corners

Use JSON controls for:

- layout
- bindings
- visibility
- focus and hover states
- repeated rows and buttons

## Shared Shell Templates

For a large pack, create one shell template per visual family:

```text
common/visuals/panel_shell.json
common/visuals/shop_card.json
common/visuals/dialog_shell.json
```

Then each feature fills the content region instead of rebuilding the frame.
