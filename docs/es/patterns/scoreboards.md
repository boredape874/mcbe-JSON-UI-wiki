# Scoreboards

La UI de scoreboards es útil cuando el servidor ya expone valores por jugador mediante el sistema de scoreboard de Bedrock.

## Buenos usos

- paneles compactos de stats
- rango o moneda
- contadores de misiones
- overlays de estado del servidor
- reemplazos de sidebar

No es buena opción para menús interactivos complejos. El scoreboard sirve mejor para mostrar información que para recibir input.

## Estructura

```text
scoreboard data
        -> pantalla de scoreboard o inserción en HUD
        -> bindings de labels
        -> filas, iconos y separadores con estilo
```

## Consejo de diseño

Haz paneles densos y legibles. Usa iconos pequeños, números alineados y altura fija por fila. Evita fondos decorativos grandes que tapen el gameplay.

## Depuración

Si los valores no se actualizan:

1. Confirma que el valor del scoreboard cambia dentro del juego.
2. Confirma que editas el archivo de UI correcto.
3. Muestra texto crudo antes de estilizar.
4. Revisa si otro resource pack sobrescribe la misma pantalla.
