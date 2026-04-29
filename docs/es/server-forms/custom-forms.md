# Custom forms

Los custom forms contienen campos: input de texto, toggle, slider, dropdown, step slider y labels.

En JSON UI, los custom forms se enrutan mediante el control id `custom_form`. Por eso un diseño de custom form normalmente usa un layout distinto al de un action form.

## Cuándo usar custom forms

Usa un custom form cuando el jugador debe enviar valores:

- input de código de administrador
- toggles de ajustes
- selección de cantidad numérica
- dropdown de región o sector
- confirmación con varios campos

Usa un action form cuando el jugador solo debe elegir un botón.

## Notas sobre input de texto

Los cuadros de texto suelen venir de `common.text_edit_box`. Mantén el área de input suficientemente grande y usa un placeholder claro. En el lado del servidor, vuelve a validar siempre el texto enviado.

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

## Contrato de UI

El servidor recibe los resultados del custom form por orden de campos. Si reordenas campos en el script del servidor, también cambia el significado de la UI. Documenta el orden:

```text
field 0: texto del código de administrador
field 1: dropdown de sector de destino
field 2: dropdown de origen void
```

Esto es especialmente importante en plugins PMMP y formularios de la beta Script API, porque ambos lados deben mantener el mismo orden de resultados.
