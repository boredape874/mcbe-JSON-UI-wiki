# Barras de búsqueda

Una barra de búsqueda en un server form filtra los botones visibles dentro de la colección `form_buttons`.

Las piezas habituales son:

- `common.text_edit_box` para el input del jugador
- un view binding que guarda la búsqueda actual
- una expresión de visibilidad en cada template de botón
- un estado por defecto cuando la búsqueda está vacía

## Idea básica

```text
valor de text_edit_box
        -> #search
        -> cada botón compara #form_button_text con #search
        -> los botones que no coinciden se ocultan
```

## Mayúsculas y minúsculas

Las comparaciones de texto distinguen mayúsculas y minúsculas por defecto. Eso significa que `stone` y `Stone` son diferentes.

Para menús simples puede estar bien. Para menús de producción grandes, prefiere una de estas opciones:

- enviar labels en minúsculas desde el servidor
- enviar una clave de búsqueda en minúsculas dentro del payload del botón
- normalizar el input con un helper controlado

## Clave de búsqueda del servidor

El patrón más limpio es que el servidor envíe una clave predecible.

```text
visible label: Stone Bricks
search key: stone bricks
button index: 12
```

JSON UI puede filtrar con la clave y mostrar un label más pulido.

## Consejo de layout

Mantén la barra de búsqueda fuera del área con scroll de los botones. Si el input está dentro del mismo panel de colección que los resultados, los problemas de focus y clipping son más difíciles de depurar.

Estructura recomendada:

```text
form shell
  header
    search input
  body
    filtered button grid
```

## Autoridad del servidor

La búsqueda solo cambia lo que ve el jugador. No debe cambiar la validación del servidor. Si el jugador pulsa el botón con índice `12`, el servidor debe validar qué significa el botón `12`.
