# Resumen de formularios del servidor

Los formularios del servidor son el punto de entrada más práctico para trabajar JSON UI desde código de servidor. Un plugin PMMP, un script de behavior pack o un sistema de comandos abre un formulario. Después, Bedrock lo renderiza mediante la pantalla `server_form` del resource pack.

La idea principal es simple:

<img class="jsonui-diagram" src="/assets/diagrams/server-form-flow.svg" alt="Flujo de server form">

```text
el código del servidor crea un formulario
        -> Bedrock recibe título, texto, botones o campos
        -> RP/ui/server_form.json decide el layout visual
        -> el jugador hace click o envía el formulario
        -> el resultado vuelve al código del servidor
```

## Qué puede leer JSON UI

En action forms normales, la UI suele leer:

- `#title_text`: el título enviado por el servidor
- `#form_text`: el cuerpo de texto enviado por el servidor
- `form_buttons`: la colección de botones
- `#form_button_text`: el texto de un botón al renderizar un item de la colección
- `#form_button_texture`: la ruta de imagen de un botón cuando el servidor envió una imagen

En custom forms, la UI usa la ruta `custom_form` y renderiza inputs, toggles, sliders, dropdowns o labels según el contenido del formulario.

## Estructura recomendada

Mantén pequeño `server_form.json`. Trátalo como router, no como el diseño completo.

```text
RP/
  ui/
    _ui_defs.json
    server_form.json
    forms/
      shop_menu/
        index.json
        templates.json
        motion.json
      trait_tree/
        index.json
        templates.json
```

Esta estructura importa porque los formularios crecen rápido. Una tienda, un panel de administración, un árbol de skills, un image form y un formulario de ajustes no deberían vivir dentro de un único `server_form.json` gigante.

## Contrato con el servidor

El RP y el servidor deben acordar cómo se selecciona una UI personalizada. Contratos comunes:

- prefijo en el título: `[shop] Main Menu`
- token oculto: `§0shop_menu`
- tipo de formulario: action form o custom form
- orden de botones: el índice `0`, `1`, `2` se asigna a acciones del servidor
- texto de payload: el texto del botón o del cuerpo contiene un marcador que JSON UI parsea

Escribe este contrato antes de construir la UI. La mayoría de server forms rotos no fallan por layout, sino por un contrato inconsistente entre servidor y resource pack.

## Páginas siguientes

1. [Enrutamiento](./routing.md)
2. [Contrato del servidor](./server-contract.md)
3. [Botones de acción](./action-buttons.md)
4. [Custom forms](./custom-forms.md)
5. [Barras de búsqueda](./search-bars.md)
6. [Estados bloqueados](./locked-states.md)
7. [Depuración](./debugging.md)
8. [Ejemplos con código](../examples/index.md)
