# Paneles de chat

Los paneles de chat sirven cuando un mensaje del servidor debe mostrarse como UI visual y no como una línea normal de chat.

## Usos

- mensajes de protocolo ocultos
- pistas de comandos
- paneles de notificación
- texto de diálogo
- anuncios del servidor con estilo

## Ocultar mensajes de protocolo

Un flujo común:

```text
el servidor envía texto con marcador
        -> chat UI detecta el marcador
        -> la línea cruda se oculta
        -> un panel muestra el contenido parseado
```

Usa un marcador que un jugador normal no escriba por accidente.

## Mantener el chat usable

Si el mensaje no es de tu protocolo, déjalo renderizar de forma normal. No rompas el chat completo para resolver un caso especial.

## Riesgo

El chat no es un transporte estructurado fuerte. Úsalo para visualización ligera, no para estado crítico del servidor.
