# Server Form Debugging

When a server form breaks, debug the contract before debugging the visuals.

## First Checklist

1. Does the server actually open a form?
2. Is it an action form or a custom form?
3. Does the title contain the expected token?
4. Is `ui/server_form.json` registered in `_ui_defs.json`?
5. Is `third_party_server_screen` being replaced?
6. Does the button still map to `button.form_button_click`?

## Form Opens But Custom Layout Does Not

Likely causes:

- title token mismatch
- wrong factory id: `long_form` vs `custom_form`
- namespace typo
- route panel condition never becomes visible
- file not registered in `_ui_defs.json`

## Button Click Does Nothing

Check the button template:

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.form_button_click",
  "mapping_type": "pressed"
}
```

If this mapping is missing, the visual button can still animate, but the server may not receive the response.

## Custom Form Submits Wrong Values

This is usually a field order problem.

Check:

- server form builder field order
- visual order in JSON UI
- response handler index order
- dropdown option order

## Texture Missing

Use resource-pack paths without `.png`.

```json
"texture": "textures/ui/shop_menu/card"
```

If the texture works in one screen but not another, check whether the target pack with that texture is actually active above the UI pack.

## Debugging Habit

Temporarily show raw values as labels:

```json
"text": "#title_text"
```

Once the value is visible, add routing and conditions gradually.
