# Action Form Buttons

Action forms render a collection named `form_buttons`. Each item in that collection is one server button.

The normal render path is:

```text
form_buttons collection
        -> grid or stack panel
        -> one button template per item
        -> #form_button_text and #form_button_texture inside the template
```

## Button Grid

Use a grid when the form is a menu:

```json
{
  "button_grid": {
    "type": "grid",
    "collection_name": "form_buttons",
    "grid_dimensions": [3, 1],
    "maximum_grid_items": 3,
    "grid_item_template": "server_form.menu_button",
    "size": [620, 140]
  }
}
```

## Button Template

The template should keep the click event connected to `button.form_button_click`.

```json
{
  "menu_button": {
    "type": "button",
    "size": [190, 110],
    "default_control": "default",
    "hover_control": "hover",
    "pressed_control": "pressed",
    "button_mappings": [
      {
        "from_button_id": "button.menu_select",
        "to_button_id": "button.form_button_click",
        "mapping_type": "pressed"
      }
    ],
    "bindings": [
      {
        "binding_type": "collection_details",
        "binding_collection_name": "form_buttons"
      }
    ]
  }
}
```

If the visual button works but the server receives no response, check the mapping to `button.form_button_click` first.

## Locked Buttons

For locked skill nodes or shop items, keep the real button index stable. Render a lock overlay and block the visual action only if the server also rejects the click. JSON UI should not be the only authority for unlock state.
