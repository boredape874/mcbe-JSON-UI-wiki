# HUD por protocolo

Un HUD por protocolo usa texto enviado por el servidor o valores de scoreboard como un canal ligero de datos. JSON UI parsea esos datos y actualiza widgets del HUD.

<img class="jsonui-diagram" src="/assets/diagrams/protocol-hud.svg" alt="Flujo de HUD por protocolo">

## Fuentes de datos

- title
- actionbar
- mensaje de chat
- valor de scoreboard

## Regla del payload

El payload debe ser predecible.

```text
[hud]|hp=18|mana=42|zone=spawn
```

Usa keys fijas. No cambies nombres de keys entre versiones del servidor sin actualizar la UI.

## Regla visual

La cadena cruda del protocolo no debería ser la UI final. Ocúltala o reemplázala y muestra panels ya parseados.

## Fiabilidad

Este patrón es práctico, pero no es una base de datos. Úsalo para estado visual. Mantén permisos, compras, desbloqueos y acciones importantes en el servidor.

## Depuración

Primero muestra el payload crudo como label. Cuando el valor esté confirmado, agrega slicing, visibilidad y formato.
