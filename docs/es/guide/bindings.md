# Bindings

Los bindings copian o transforman datos hacia propiedades de controles.

<img class="jsonui-diagram" src="/assets/diagrams/binding-flow.svg" alt="Flujo de bindings">

## Binding simple

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

## Binding de coleccion

Los botones de server form usan `form_buttons`.

```json
{
  "binding_name": "#form_button_text",
  "binding_type": "collection",
  "binding_collection_name": "form_buttons"
}
```

## View binding

```json
{
  "binding_type": "view",
  "source_property_name": "(#form_button_text = 'Locked')",
  "target_property_name": "#visible"
}
```

Usa expresiones simples y prueba dentro del juego.
