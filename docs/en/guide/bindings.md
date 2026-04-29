# Bindings

Bindings copy or transform UI data into control properties.

<img class="jsonui-diagram" src="/assets/diagrams/binding-flow.svg" alt="Binding flow">

## Simple binding

```json
{
  "type": "label",
  "text": "#title_text",
  "bindings": [
    {
      "binding_name": "#title_text"
    }
  ]
}
```

This says: read `#title_text` and use it in this control.

## Collection binding

Server form buttons use the `form_buttons` collection.

```json
{
  "binding_name": "#form_button_text",
  "binding_type": "collection",
  "binding_collection_name": "form_buttons"
}
```

This lets a button template read the text for the current form button.

## View binding

A view binding can calculate a property:

```json
{
  "binding_type": "view",
  "source_property_name": "(#form_button_text = 'Locked')",
  "target_property_name": "#visible"
}
```

This is the basis of many dynamic JSON UI tricks.

## Important warning

Bindings are powerful, but they are not full JavaScript. Use simple expressions and test in game.
