# Solucion De Errores

## La pantalla no aparece

Revisa:

1. El archivo esta en `_ui_defs.json`.
2. El namespace es correcto.
3. Estas modificando la pantalla correcta.
4. Minecraft no esta usando cache vieja.

## Falta una textura

```json
"texture": "textures/ui/my_icon"
```

No escribas `.png` en la ruta JSON UI.

## `Type not specified`

Normalmente significa que falta `"type"` o fallo una referencia `@namespace.template`.

## `Dangling number`

Usa numeros directos o strings con unidad:

```json
"size": [20, 40]
"size": ["20px", "40px"]
```
