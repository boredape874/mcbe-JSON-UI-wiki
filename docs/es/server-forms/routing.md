# Rutas De Server Form

Routing significa elegir que UI personalizada debe mostrar un server form.

Patron recomendado:

1. `third_party_server_screen` carga `server_form.main_screen_content`.
2. `server_form.json` contiene un router pequeno.
3. La UI real vive en `ui/forms/<feature>/index.json`.
4. El servidor mantiene una regla de titulo estable.

## Entrada Minima

```json
{
  "namespace": "server_form",
  "third_party_server_screen@common.base_screen": {
    "$screen_content": "server_form.main_screen_content",
    "$screen_bg_content": "common.screen_background",
    "render_game_behind": true
  }
}
```

`long_form` suele manejar action forms. `custom_form` maneja forms con campos.

## Contrato Por Titulo

Ejemplo:

```text
[shop] Shop Menu
[admin] Admin Console
[traits] Trait Tree
```

JSON UI puede leer `#title_text` y mostrar solo el panel correcto. El titulo visible puede ser otro label limpio.

## Regla Practica

Una ruta por feature:

```text
server_form.json
  -> forms/shop_menu/index.json
  -> forms/admin_console/index.json
  -> forms/trait_tree/index.json
```
