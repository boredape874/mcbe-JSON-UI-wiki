# HUD y chat

La UI del HUD y del chat se usa a menudo para overlays en tiempo real.

## HUD

Usa modificaciones del HUD cuando quieras mostrar información persistente:

- barras de vida
- barras de maná
- seguimiento de misiones
- overlays con estilo de scoreboard

## Chat

La UI del chat puede usarse para mostrar u ocultar mensajes especiales. Algunos packs usan marcadores de texto ocultos como un protocolo ligero.

## Title y actionbar

Muchos servidores envían texto estructurado por title o actionbar. JSON UI puede parsear partes de ese texto con bindings y mostrarlas en paneles personalizados.

## Advertencia

No abuses de protocolos basados en chat o actionbar para datos que necesiten mucha fiabilidad. Para sistemas complejos, combina JSON UI con validación del lado del servidor.
