# Tooltips

Los tooltips son paneles pequeños de contexto que aparecen cerca de controles con hover o focus.

## Usos

- descripción de items
- requisitos de desbloqueo
- detalles de nodos de skill
- descripción de botones
- mensajes cortos de error

## Estructura

```text
control con hover
        -> estado hover/focus
        -> tooltip visible
        -> label con texto descriptivo
```

## Ajuste de texto

Cada label de tooltip necesita un `size` explícito. El texto largo debe envolver o recortarse de forma intencional. Un tooltip no debería redimensionar todo el layout.

## Tooltip animado

Un tooltip puede hacer fade o slide desde un evento hover. Mantén estable el panel del tooltip y anima el contenido interno.
