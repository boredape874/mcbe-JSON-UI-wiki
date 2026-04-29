# Flujo del resource pack

JSON UI vive dentro de un resource pack. El cliente Bedrock no carga cualquier archivo JSON de forma automática. Los archivos deben estar en la carpeta correcta y deben estar registrados.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="Flujo de carga de UI en un resource pack">

## Estructura mínima de un resource pack

```text
MyPack_RP/
  manifest.json
  ui/
    _ui_defs.json
    hud_screen.json
    server_form.json
  textures/
    ui/
      my_icon.png
```

## Qué hace cada parte

`manifest.json` le dice a Minecraft que esta carpeta es un resource pack.

`ui/_ui_defs.json` le dice a Minecraft qué archivos JSON de UI debe cargar.

`ui/server_form.json`, `ui/hud_screen.json` y archivos similares modifican o reemplazan pantallas internas concretas.

`textures/ui/` guarda las imágenes que usan los controles.

## Ejemplo de `_ui_defs.json`

```json
{
  "ui_defs": [
    "ui/server_form.json",
    "ui/hud_screen.json"
  ]
}
```

Si un archivo de UI no aparece aquí, Bedrock puede no cargarlo.

## Error común

No basta con crear un archivo bonito llamado `my_menu.json` y esperar que aparezca solo. Necesitas:

1. un archivo registrado en `_ui_defs.json`
2. el `namespace` correcto
3. un punto de inserción dentro de una pantalla existente
4. las texturas que usa esa UI
