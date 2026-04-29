# Botones de action form

Los action forms renderizan una colección llamada `form_buttons`. Cada item de esa colección es un botón enviado por el servidor.

La ruta normal de renderizado es:

```text
colección form_buttons
        -> grid o stack panel
        -> un template de botón por item
        -> #form_button_text y #form_button_texture dentro del template
```

## Grid de botones

Usa un grid cuando el formulario sea un menú:

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

## Template de botón

El template debe mantener el click conectado a `button.form_button_click`.

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

Si el botón se ve presionado pero el servidor no recibe respuesta, revisa primero el mapping hacia `button.form_button_click`.

## Botones bloqueados

Para nodos de skills o items de tienda bloqueados, mantén estable el índice real del botón. Renderiza un overlay de candado y bloquea la acción visual solo si el servidor también rechaza el click. JSON UI no debe ser la única autoridad sobre el estado de desbloqueo.
