# Bases de layout

El layout de Bedrock JSON UI se controla principalmente con:

- `size`
- `anchor_from`
- `anchor_to`
- `offset`
- la estructura padre-hijo de los controles

## Size

```json
"size": [120, 40]
```

Significa ancho `120` y alto `40`.

También puedes ver valores como strings:

```json
"size": ["100%", "100%"]
```

Eso significa usar todo el tamaño del control padre.

## Anchors

```json
"anchor_from": "center",
"anchor_to": "center"
```

Los anchors deciden qué punto de este control se pega a qué punto de su padre.

## Offset

```json
"offset": [0, -20]
```

`offset` mueve el control después de aplicar el anchor. Un `x` positivo mueve a la derecha. Un `y` positivo mueve hacia abajo.

## El tamaño del padre importa

Un control hijo se posiciona respecto a su padre. Si el padre mide `[0, 0]`, los hijos con `"100%"` pueden comportarse de forma extraña.

## Regla práctica

Para empezar, dale un tamaño estable a cada panel importante:

```json
{
  "type": "panel",
  "size": [300, 180],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

Cuando la estructura ya funcione, puedes volverla responsive.
