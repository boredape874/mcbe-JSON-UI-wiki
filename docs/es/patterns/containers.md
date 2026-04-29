# Contenedores

Los patrones de contenedor cubren pantallas tipo chest, pocket containers, grids de inventario personalizados y paneles de almacenamiento.

<img class="jsonui-diagram" src="/assets/diagrams/container-grid.svg" alt="Layout de grid para contenedor">

## Estructura típica

```text
container shell
  title/header
  item grid
  detail panel
  action buttons
```

El grid debe ser regular. Usa un tamaño de celda y un gap consistente salvo que el diseño tenga una razón clara para romperlo.

## Forms tipo chest

Los server forms estilo chest suelen enrutar mediante archivos especiales de chest o furnace. El trigger del servidor debe coincidir con la ruta del resource pack. Documenta el token o tipo de form que activa el contenedor.

## Pocket containers

Los layouts para móvil o touch necesitan targets más grandes. Mantén controles importantes cerca del centro y evita botones laterales demasiado pequeños.

## Contenedores con scroll

Para listas largas, aplica scroll solo al área de colección, no a todo el shell.

```text
fixed shell
  fixed header
  scroll body
    item collection
  fixed footer
```

## Error común

Evita meter cards dentro de otras cards decorativas. Usa un shell, una región de contenido y un template repetido para los items.
