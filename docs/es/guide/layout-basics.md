# Layout Basico

El layout usa principalmente:

- `size`
- `anchor_from`
- `anchor_to`
- `offset`
- controles padre e hijo

## size

```json
"size": [120, 40]
```

Tambien puedes usar porcentajes:

```json
"size": ["100%", "100%"]
```

## anchors

```json
"anchor_from": "center",
"anchor_to": "center"
```

El control se pega a un punto del padre.

## offset

```json
"offset": [0, -20]
```

Mueve el control despues del anclaje.

Regla practica: empieza con paneles de tamano fijo y despues mejora la adaptacion.
