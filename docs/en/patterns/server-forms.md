# Server Forms

Server forms are UI screens opened by a server, behavior pack script, or plugin.

Common data sources:

- form title: `#title_text`
- form body: `#form_text`
- action form buttons: `form_buttons`
- modal/custom form fields: `custom_form`

## Basic flow

```text
server or script opens form
        ↓
Bedrock receives title, body, buttons, fields
        ↓
server_form.json decides how to render it
        ↓
button click or submit returns to server/script
```

## Action form pattern

Use `form_buttons` when the form has a list of buttons.

## Custom form pattern

Use `custom_form` when the form has inputs, toggles, sliders, or dropdowns.

## Practical routing pattern

For complex packs, keep `server_form.json` as a router:

```json
{
  "namespace": "server_form",
  "third_party_server_screen@common.base_screen": {
    "$screen_content": "server_form.main_screen_content"
  }
}
```

Then put the real UI under:

```text
ui/forms/my_feature/index.json
ui/forms/my_feature/templates.json
```
