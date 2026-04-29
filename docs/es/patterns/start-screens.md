# Pantallas de inicio

Los patrones de start screen modifican la UI inicial del juego, el fondo, una imagen estilo panorama o el shell del menú.

## Fondo estático

El patrón más simple es reemplazar el contenido de fondo por una imagen.

```json
{
  "namespace": "start",
  "start_screen": {
    "$screen_bg_content": "start.background",
    "$screen_content": "start.start_screen_content"
  },
  "background": {
    "type": "image",
    "texture": "textures/ui/my_start_background",
    "size": ["100%", "100%"]
  }
}
```

## Consejo

Usa una textura real para fondos complejos. No construyas un fondo grande apilando decenas de paneles translúcidos.

## Precaución

Los archivos de start screen son sensibles a cambios de versión. Mantén el patch pequeño y no reemplaces más controles de los necesarios.
