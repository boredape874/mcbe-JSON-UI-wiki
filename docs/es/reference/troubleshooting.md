# Solución de problemas

## La pantalla no aparece

Revisa:

1. ¿El archivo está listado en `_ui_defs.json`?
2. ¿El `namespace` es correcto?
3. ¿Estás editando la pantalla correcta?
4. ¿Minecraft está usando una versión vieja del resource pack en caché?

## Falta una textura

Revisa:

1. El archivo existe.
2. La ruta en JSON UI no incluye la extensión `.png`.
3. La ruta empieza desde la raíz del resource pack.

Ejemplo:

```json
"texture": "textures/ui/my_icon"
```

## `Type not specified`

Normalmente significa que el control no tiene `"type"` o que falló la referencia `@namespace.template`.

Ejemplo de referencia rota:

```json
"button@my_pack.unknown_template": {}
```

Corrige el namespace, registra el archivo o define el template.

## `Dangling number`

Bedrock esperaba un string de tamaño como `"20px"` o `"50%"`, pero recibió un número suelto no admitido en ese contexto.

Usa números directos o strings con unidad de forma consistente:

```json
"size": [20, 40]
"size": ["20px", "40px"]
```
