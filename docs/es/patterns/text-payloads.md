# Payloads de texto

Los payloads de texto son una forma práctica de enviar pequeños estados desde el servidor hacia JSON UI.

<img class="jsonui-diagram" src="/assets/diagrams/payload-pipeline.svg" alt="Pipeline de payload de texto">

## Fuentes comunes

- `#title_text`
- `#form_text`
- `#form_button_text`
- texto de title/actionbar
- texto de chat
- valores de scoreboard expuestos por una pantalla

## Formato con token

Usa un formato predecible:

```text
[shop]|coins=120|page=2
```

Cuando sea posible, separa el label visible del token legible por máquina.

## Formato de ancho fijo

Para valores que necesitan slicing, un payload de ancho fijo es más fácil:

```text
HP:075MP:040XP:123
```

Esto evita parseos frágiles con delimitadores cuando el texto visible puede contener espacios o símbolos.

## Botones de server form

El texto del botón también puede llevar metadata:

```text
item|stone|price=32|name=Stone
```

La UI puede mostrar `Stone`, un label de precio y una textura, mientras el servidor sigue recibiendo el índice original del botón.

## Ocultar mensajes de protocolo

Si usas chat o actionbar como protocolo, oculta el mensaje crudo al jugador. Muestra solo la UI ya parseada.

## Regla de seguridad

Los payloads son datos de presentación. El servidor debe seguir validando permisos, precios, estados de desbloqueo y acciones seleccionadas.
