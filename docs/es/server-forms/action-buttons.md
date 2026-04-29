# Botones De Action Form

Los action forms renderizan una coleccion llamada `form_buttons`. Cada item es un boton del servidor.

Flujo normal:

```text
coleccion form_buttons
        -> grid o stack panel
        -> un template de boton por item
        -> #form_button_text y #form_button_texture dentro del template
```

## Grid De Botones

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

## Template De Boton

Mantén la conexion con `button.form_button_click`.

```json
{
  "menu_button": {
    "type": "button",
    "size": [190, 110],
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

Si el boton se ve presionado pero el servidor no recibe respuesta, revisa primero `button.form_button_click`.

## Botones Bloqueados

Para nodos de skill o items bloqueados, muestra un candado en JSON UI, pero valida tambien en el servidor. JSON UI no debe ser la unica autoridad del estado de desbloqueo.
