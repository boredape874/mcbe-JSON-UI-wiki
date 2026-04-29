# Server Form Routing

Routing means choosing which custom UI should render a server form.

The safest pattern is:

1. Let `third_party_server_screen` load your `server_form.main_screen_content`.
2. Put a small router in `server_form.json`.
3. Use factories or conditional panels to send specific forms into `ui/forms/<feature>/index.json`.
4. Keep the title convention stable on the server side.

## Minimal Entry

```json
{
  "namespace": "server_form",
  "third_party_server_screen@common.base_screen": {
    "$screen_content": "server_form.main_screen_content",
    "$screen_bg_content": "common.screen_background",
    "render_game_behind": true
  },
  "main_screen_content": {
    "type": "panel",
    "size": ["100%", "100%"],
    "controls": [
      {
        "form_factory": {
          "type": "factory",
          "control_ids": {
            "long_form": "@server_form.long_form_router",
            "custom_form": "@server_form.custom_form_router"
          }
        }
      }
    ]
  }
}
```

`long_form` handles normal action forms. `custom_form` handles forms with fields.

## Title Prefix Contract

A common server-side contract is a title prefix:

```text
[shop] Shop Menu
[admin] Admin Console
[traits] Trait Tree
```

The JSON UI can bind `#title_text`, check for the marker, and show only the matching panel. The visible title can be cleaned by hiding or replacing the raw title label.

## Practical Rule

Use one route per real feature:

```text
server_form.json
  -> forms/shop_menu/index.json
  -> forms/admin_console/index.json
  -> forms/trait_tree/index.json
```

Avoid placing all controls directly under `server_form.json`. That file should answer "which form is this?", not "how does every form look?".
