# Que Es JSON UI?

Minecraft Bedrock JSON UI es el sistema que usa un resource pack para describir pantallas, paneles, labels, imagenes, botones, formularios y HUD.

Se llama JSON UI porque la estructura se escribe como objetos JSON.

```json
{
  "type": "label",
  "text": "Hello JSON UI",
  "size": [120, 20],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

## Idea principal

JSON UI es un arbol de controles.

<img class="jsonui-diagram" src="/assets/diagrams/control-tree.svg" alt="Arbol de controles JSON UI">

Una pantalla contiene controles. Un control puede contener mas controles.

## Que puede cambiar

- HUD
- chat
- title y actionbar
- server forms
- pantallas parecidas a inventario
- capas visuales controladas por datos del juego

## Que no hace solo

JSON UI no ejecuta logica de juego. Para comandos, datos de jugador o reglas del servidor usa un servidor, BP Script o un plugin PMMP.
