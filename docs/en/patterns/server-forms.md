# Server Form Patterns

This page collects practical patterns you can reuse after you understand the basic server-form flow.

## Thin Router Pattern

Use `server_form.json` only for screen entry and routing. Put each feature in its own folder.

```text
ui/server_form.json
ui/forms/shop_menu/index.json
ui/forms/shop_menu/templates.json
ui/forms/admin_console/index.json
ui/forms/traits/index.json
```

This keeps large server UI packs readable.

## Title Token Pattern

The server sends a stable marker in the title.

```text
[shop] Shop Menu
[admin] Admin Console
```

The RP uses that marker to choose a custom layout. The displayed title can be a clean local label, so the player does not need to see the marker.

## Collection Button Pattern

Use `form_buttons` for server-provided actions. Keep the button template reusable and bind collection details inside the template.

Best for:

- shop category cards
- warp menus
- admin action panels
- trait or skill nodes
- image-based menu tiles

## Search Bar Pattern

A server-form search UI usually combines:

- `common.text_edit_box` for the input
- a view binding that copies the input text into a search property
- a visibility expression on each button that compares `#form_button_text` against the search string

Search is case-sensitive unless you add a normalization layer. For production menus, consider sending a lowercase search key from the server to avoid expensive UI-side string tricks.

## Locked Node Pattern

For skill trees, quests, and progression menus:

1. Keep every node as a normal server button index.
2. Draw an icon and lock overlay in JSON UI.
3. Let the server reject clicks for locked nodes.
4. Use the next form refresh to remove the lock overlay after unlock.

The UI should communicate state. The server should enforce state.

## Texture-Backed Pattern

High quality forms often use custom textures for:

- panel background
- card background
- hover frame
- pressed state
- lock overlay
- icon slots

Use JSON controls for layout and state, but use textures for complex gradients, pixel-art borders, and decorative shadows. This is more stable than stacking many translucent panels.
