# Custom Forms

Los custom forms contienen campos: text input, toggle, slider, dropdown, step slider y labels.

En JSON UI entran por el control id `custom_form`. Por eso normalmente se disenan separado de los action forms.

## Cuando Usarlos

Usa custom form cuando el jugador debe enviar valores:

- codigo de admin
- toggles de configuracion
- cantidad numerica
- dropdown de region o sector
- confirmacion con varios campos

Si el jugador solo elige un boton, usa action form.

## Text Input

Los inputs suelen basarse en `common.text_edit_box`.

```json
{
  "admin_code_input@common.text_edit_box": {
    "size": [240, 28],
    "$text_box_name": "admin_code",
    "$place_holder_text": "Enter the admin code",
    "$text_alignment": "center"
  }
}
```

## Orden De Campos

El servidor recibe resultados por orden de campo.

```text
field 0: codigo de admin
field 1: execute-to sector dropdown
field 2: execute-from void dropdown
```

PMMP y Script API necesitan el mismo orden en codigo y documentacion.
