# Ejemplos con código

Esta es la parte práctica de la wiki. Los archivos están incluidos en el sitio, así que puedes revisar la estructura completa de RP/BP y no solo fragmentos sueltos.

## Server Form Starter

Empieza con este ejemplo si estás aprendiendo formularios del servidor.

```text
server-form-starter/
  RP/
    manifest.json
    ui/
      _ui_defs.json
      server_form.json
  BP/
    manifest.json
    scripts/
      main.js
```

Archivos directos:

- [RP manifest](/examples/server-form-starter/RP/manifest.json)
- [RP ui/_ui_defs.json](/examples/server-form-starter/RP/ui/_ui_defs.json)
- [RP ui/server_form.json](/examples/server-form-starter/RP/ui/server_form.json)
- [BP manifest](/examples/server-form-starter/BP/manifest.json)
- [BP scripts/main.js](/examples/server-form-starter/BP/scripts/main.js)

El script abre un formulario cuando el jugador usa una brújula. El resource pack reemplaza la presentación visual del `server_form`.

### RP/ui/server_form.json

<<< @/public/examples/server-form-starter/RP/ui/server_form.json{json}

### BP/scripts/main.js

<<< @/public/examples/server-form-starter/BP/scripts/main.js{js}

## Snippets

Estos snippets no son packs completos. Copia la pieza que necesites y ajusta namespace, nombres de controles y rutas de texturas.

### Toggle personalizado

<<< @/public/examples/snippets/custom_toggle.json{json}

### Barra de progreso

<<< @/public/examples/snippets/progress_bar.json{json}

### Botón con filtro de búsqueda

<<< @/public/examples/snippets/search_button_filter.json{json}

## Nota de versiones

El manifest del BP usa `@minecraft/server` `2.0.0` y `@minecraft/server-ui` `2.0.0`. Si tu beta objetivo pide otra versión, actualiza las dependencias primero y conserva el contrato del formulario.
