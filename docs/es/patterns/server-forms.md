# Patrones De Server Form

Esta pagina resume patrones practicos para reutilizar despues de entender el flujo basico.

## Router Pequeno

Usa `server_form.json` solo como entrada y router. Cada feature vive en su carpeta.

```text
ui/server_form.json
ui/forms/shop_menu/index.json
ui/forms/shop_menu/templates.json
ui/forms/admin_console/index.json
ui/forms/traits/index.json
```

## Token En Titulo

El servidor envia un marcador estable en el titulo.

```text
[shop] Shop Menu
[admin] Admin Console
```

El RP usa el marcador para elegir layout. El titulo visible puede ser otro label limpio.

## Botones Por Coleccion

Usa `form_buttons` para acciones enviadas por el servidor. El template del boton debe ser reutilizable y tener `collection_details`.

Usos comunes:

- shop category cards
- warp menus
- admin panels
- skill nodes
- image menu tiles

## Search Bar

Un search bar de server form normalmente combina:

- `common.text_edit_box`
- view binding para copiar el input a una propiedad de busqueda
- condicion de visibilidad que compara `#form_button_text` con el texto buscado

La busqueda es case-sensitive si no agregas normalizacion.

## Nodos Bloqueados

Para skill trees, quests y progression menus:

1. Mantén cada nodo como boton normal del servidor.
2. JSON UI dibuja icono y candado.
3. El servidor rechaza clicks bloqueados.
4. Despues de desbloquear, el servidor refresca el form.

La UI muestra estado. El servidor hace cumplir el estado.

## Texturas Para Diseno

Para forms de alta calidad, usa texturas en:

- background de panel
- background de cards
- hover frame
- pressed state
- lock overlay
- icon slots

JSON UI debe manejar layout y estado. Los bordes pixel-art, sombras y gradientes complejos suelen ser mejores como textura.
