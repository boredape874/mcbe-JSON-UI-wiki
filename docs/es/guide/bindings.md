# Bindings

Los bindings copian o transforman datos de UI y los colocan en propiedades de controles.

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

Esto significa: lee `#title_text` y úsalo en este control.

## Binding de colección

Los botones de server form usan la colección `form_buttons`.

```json
{
  "binding_name": "#form_button_text",
  "binding_type": "collection",
  "binding_collection_name": "form_buttons"
}
```

Esto permite que un template de botón lea el texto del botón actual del formulario.

## View binding

Un view binding puede calcular una propiedad:

```json
{
  "binding_type": "view",
  "source_property_name": "(#form_button_text = 'Locked')",
  "target_property_name": "#visible"
}
```

Esta es la base de muchos trucos dinámicos de JSON UI.

## Advertencia importante

Los bindings son potentes, pero no son JavaScript completo. Usa expresiones simples y pruébalas dentro del juego.
