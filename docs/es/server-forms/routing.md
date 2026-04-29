# Enrutamiento de server forms

Enrutar significa elegir qué UI personalizada debe renderizar un formulario del servidor.

El patrón más seguro es:

1. Deja que `third_party_server_screen` cargue `server_form.main_screen_content`.
2. Coloca un router pequeño en `server_form.json`.
3. Usa factories o paneles condicionales para enviar formularios concretos a `ui/forms/<feature>/index.json`.
4. Mantén estable la convención del título en el lado del servidor.

## Entrada mínima

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

`long_form` maneja action forms normales. `custom_form` maneja formularios con campos.

## Contrato por prefijo de título

Un contrato común del lado del servidor es usar un prefijo en el título:

```text
[shop] Shop Menu
[admin] Admin Console
[traits] Trait Tree
```

JSON UI puede enlazar `#title_text`, revisar el marcador y mostrar solo el panel correspondiente. El título visible puede limpiarse ocultando o reemplazando el label original.

## Regla práctica

Usa una ruta por cada feature real:

```text
server_form.json
  -> forms/shop_menu/index.json
  -> forms/admin_console/index.json
  -> forms/trait_tree/index.json
```

Evita colocar todos los controles directamente bajo `server_form.json`. Ese archivo debería responder "¿qué formulario es este?", no "¿cómo se ve cada formulario?".
