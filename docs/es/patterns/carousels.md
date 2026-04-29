# Carruseles

JSON UI no ejecuta JavaScript ni trigonometría real. Un carrusel circular es una ilusión hecha con estados discretos.

<img class="jsonui-diagram" src="/assets/diagrams/carousel-orbit.svg" alt="Ilusión de carrusel orbital 2D">

## Ilusión de órbita

Para que las tarjetas parezcan moverse por una órbita circular, cambia estas propiedades entre estados:

- `offset`: posiciones izquierda, centro y derecha
- `size`: tarjeta central más grande, laterales más pequeñas
- `alpha`: tarjetas del fondo más tenues
- `layer`: tarjeta frontal por encima de las laterales

Esto aproxima el resultado visual de `cos(theta)` y `sin(theta)` sin calcularlos realmente.

## Opciones de estado

Usa uno de estos sistemas:

- `common_cycler`, `image_cycler` o `text_cycler` para ciclos simples
- radio toggles ocultos para escenas por página
- payload de title o body enviado por el servidor
- una ruta por item seleccionado en server forms

## Eventos fiables

Usa eventos next/previous:

```text
button.carousel_next
button.carousel_prev
```

Cada wrapper de tarjeta escucha el mismo evento, pero reproduce animaciones distintas de offset y size.

## Patrón de tres tarjetas

```text
left_card    pequeña, layer de fondo
center_card  grande, layer frontal
right_card   pequeña, layer de fondo
```

Al avanzar:

- center parece moverse hacia izquierda/fondo
- right parece moverse al centro/frente
- left parece envolver por detrás

En muchas pantallas de Bedrock es más estable animar wrappers de tarjetas y cambiar solo el contenido con cyclers.

## Error común

No destruyas y recrees todas las tarjetas en cada click salvo que sea necesario. Los wrappers estables repiten animaciones con más fiabilidad.
