# ¿Qué es JSON UI?

Minecraft Bedrock JSON UI es el sistema de interfaz del cliente que usan los resource packs para describir pantallas, paneles, labels, imágenes, botones, formularios, widgets del HUD y otras piezas de UI.

Se llama JSON UI porque la mayor parte de la interfaz se escribe como objetos JSON.

```json
{
  "type": "label",
  "text": "Hello JSON UI",
  "size": [120, 20],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

Ese objeto pequeño significa: crea un label, ponle texto, dale un tamaño y ánclalo al centro.

## Idea principal

JSON UI es un árbol de controles.

<img class="jsonui-diagram" src="/assets/diagrams/control-tree.svg" alt="Árbol de controles de JSON UI">

Una pantalla contiene controles. Esos controles pueden contener otros controles. Por ejemplo:

- un panel de pantalla contiene una imagen de fondo
- el mismo panel contiene un botón
- el botón contiene un label de texto
- el botón puede cambiar sus controles hijos cuando está en hover o pressed

## Qué puede cambiar JSON UI

JSON UI puede personalizar muchas interfaces del cliente Bedrock:

- overlays del HUD
- paneles de chat
- title y actionbar
- formularios del servidor
- pantallas parecidas al inventario
- partes de la pantalla de inicio y pausa
- capas visuales controladas por scoreboards, titles o formularios

## Qué no puede hacer JSON UI por sí solo

JSON UI no es un lenguaje de scripting.

No puede hacer directamente:

- ejecutar comandos del servidor
- guardar datos del jugador
- detectar eventos de bloques
- crear lógica de gameplay

Para la lógica de gameplay usa un servidor, un script de behavior pack o un plugin PMMP. JSON UI se encarga de la presentación en el cliente.

## Regla para principiantes

Piensa en JSON UI como:

> Archivos del resource pack que le dicen al cliente Bedrock cómo debe verse una pantalla y cómo debe reaccionar a datos de UI ya existentes.

Ese modelo evita la mayor parte de la confusión inicial.
