# Server Forms Overview

Server forms are the most practical entry point for server-side JSON UI work. A PMMP plugin, behavior-pack script, or command system opens a form. Bedrock then renders that form through the resource pack screen named `server_form`.

The important mental model is simple:

<img class="jsonui-diagram" src="/assets/diagrams/server-form-flow.svg" alt="Server form flow">

```text
server code creates a form
        -> Bedrock receives title, body, buttons, or fields
        -> RP/ui/server_form.json decides the visual layout
        -> the player clicks or submits
        -> the result returns to server code
```

## What JSON UI Can Read

For normal action forms, the UI usually reads:

- `#title_text`: the title sent by the server
- `#form_text`: the body text sent by the server
- `form_buttons`: the button collection
- `#form_button_text`: one button's text while rendering a collection item
- `#form_button_texture`: one button's image path when the server supplied an image

For custom forms, the UI uses the `custom_form` route and renders inputs, toggles, sliders, dropdowns, or labels depending on the form content.

## Recommended File Shape

Keep `server_form.json` thin. Treat it as the router, not the whole design.

```text
RP/
  ui/
    _ui_defs.json
    server_form.json
    forms/
      shop_menu/
        index.json
        templates.json
        motion.json
      trait_tree/
        index.json
        templates.json
```

This shape matters because server forms grow quickly. A shop, admin panel, skill tree, image form, and settings form should not all live as one giant `server_form.json`.

## Server-Side Contract

The RP and the server must agree on how a custom form is selected. Common contracts are:

- title prefix: `[shop] Main Menu`
- hidden token: `§0shop_menu`
- form type: action form vs custom form
- button order: button index `0`, `1`, `2` maps to server actions
- payload text: button text or body text carries a marker that JSON UI parses

Write the contract down before building the UI. Most broken server forms are not layout bugs; they are contract mismatches between the server and the resource pack.

## Next Pages

1. [Routing](./routing.md)
2. [Server Contract](./server-contract.md)
3. [Action Buttons](./action-buttons.md)
4. [Custom Forms](./custom-forms.md)
5. [Search Bars](./search-bars.md)
6. [Locked States](./locked-states.md)
7. [Debugging](./debugging.md)
