# Resumen De Server Forms

Los server forms son la entrada mas practica para trabajar JSON UI desde un servidor. Un plugin PMMP, un script de behavior pack o un sistema de comandos abre un form. Bedrock lo renderiza con la pantalla `server_form` del resource pack.

Modelo basico:

<img class="jsonui-diagram" src="/assets/diagrams/server-form-flow.svg" alt="Flujo de server form">

```text
el servidor abre un form
        -> Bedrock recibe titulo, texto, botones o campos
        -> RP/ui/server_form.json decide el layout visual
        -> el jugador hace click o envia el form
        -> el resultado vuelve al servidor
```

## Datos Que JSON UI Puede Leer

En action forms normalmente se usan:

- `#title_text`: titulo enviado por el servidor
- `#form_text`: texto principal
- `form_buttons`: coleccion de botones
- `#form_button_text`: texto de un boton
- `#form_button_texture`: textura del boton si el servidor envio imagen

En custom forms se usa la ruta `custom_form`, con inputs, toggles, sliders, dropdowns o labels.

## Estructura Recomendada

Mantén `server_form.json` pequeno. Usalo como router, no como todo el diseno.

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

Un pack real crece rapido. Shop, admin panel, skill tree, image form y settings no deben vivir todos en un solo `server_form.json`.

## Contrato Con El Servidor

El RP y el servidor deben compartir una regla estable:

- prefijo en el titulo: `[shop] Main Menu`
- token oculto: `§0shop_menu`
- tipo de form: action form o custom form
- orden de botones: indice `0`, `1`, `2`
- payload: texto o body con marcadores que JSON UI puede leer

Define este contrato antes de disenar. Muchos errores de server forms son fallos de contrato, no fallos visuales.
