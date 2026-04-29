# Custom Forms

Custom forms contain fields: text input, toggle, slider, dropdown, step slider, and labels.

In JSON UI, custom forms are routed through the `custom_form` factory control id. That means a custom-form design usually has a different layout from a normal action form.

## When To Use Custom Forms

Use a custom form when the player must submit values:

- admin code input
- settings toggles
- numeric amount selection
- region or sector dropdown
- confirmation with multiple fields

Use an action form when the player only chooses one button.

## Text Input Notes

Text boxes usually come from `common.text_edit_box`. Keep the input area large enough and make the placeholder clear. On the server side, validate the submitted string again.

```json
{
  "admin_code_input@common.text_edit_box": {
    "size": [240, 28],
    "$text_box_name": "admin_code",
    "$place_holder_text": "Enter the admin code",
    "$text_alignment": "center"
  }
}
```

## UI Contract

The server receives custom-form results by field order. If you rearrange fields in the server script, the UI meaning changes too. Document the order:

```text
field 0: admin code text
field 1: execute-to sector dropdown
field 2: execute-from void dropdown
```

This is especially important for PMMP plugins and beta Script API forms, because both sides must keep the same result order.
