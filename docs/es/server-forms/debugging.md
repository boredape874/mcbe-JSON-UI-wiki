# Depuración de server forms

Cuando un server form falla, depura el contrato antes de depurar lo visual.

## Primera checklist

1. ¿El servidor realmente abre un formulario?
2. ¿Es un action form o un custom form?
3. ¿El título contiene el token esperado?
4. ¿`ui/server_form.json` está registrado en `_ui_defs.json`?
5. ¿Se está reemplazando `third_party_server_screen`?
6. ¿El botón todavía apunta a `button.form_button_click`?

## El form abre, pero no aparece el layout personalizado

Causas probables:

- token de título incorrecto
- factory id equivocado: `long_form` vs `custom_form`
- error en namespace
- la condición del panel de ruta nunca se vuelve visible
- falta registrar el archivo en `_ui_defs.json`

## El click del botón no hace nada

Revisa el template del botón:

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.form_button_click",
  "mapping_type": "pressed"
}
```

Si falta este mapping, el botón puede animarse visualmente, pero el servidor puede no recibir la respuesta.

## El custom form envía valores incorrectos

Normalmente es un problema de orden de campos.

Revisa:

- orden de campos en el form builder del servidor
- orden visual en JSON UI
- orden de índices en el response handler
- orden de opciones en dropdowns

## Falta una textura

Usa rutas del resource pack sin `.png`.

```json
"texture": "textures/ui/shop_menu/card"
```

Si la textura funciona en una pantalla pero no en otra, revisa que el pack que contiene esa textura esté activo y esté por encima del pack de UI si corresponde.

## Hábito de depuración

Muestra temporalmente valores crudos como labels:

```json
"text": "#title_text"
```

Cuando el valor sea visible, agrega rutas y condiciones paso a paso.
