# Server Forms

Los server forms son formularios abiertos por un servidor, script o plugin.

Datos comunes:

- titulo: `#title_text`
- cuerpo: `#form_text`
- botones: `form_buttons`
- campos de custom form: `custom_form`

## Flujo

```text
servidor abre form
        ↓
Bedrock recibe datos
        ↓
server_form.json decide el render
        ↓
click o submit vuelve al servidor
```

Usa `server_form.json` como router y coloca la UI real en:

```text
ui/forms/my_feature/index.json
ui/forms/my_feature/templates.json
```
