# Carousels

JSON UI does not run JavaScript or real trigonometry. A circular carousel is an illusion made from discrete states.

<img class="jsonui-diagram" src="/assets/diagrams/carousel-orbit.svg" alt="2D orbit carousel illusion">

## Orbit Illusion

To make cards feel like they move on a circular path, change these properties between states:

- `offset`: left, center, right positions
- `size`: center card larger, side cards smaller
- `alpha`: background cards dimmer
- `layer`: front card above side cards

This approximates the visual result of `cos(theta)` and `sin(theta)` without actually computing them.

## State Options

Use one of these state systems:

- `common_cycler`, `image_cycler`, or `text_cycler` for simple cycling
- hidden radio toggles for page-specific scenes
- server-provided page title or body payload
- one route per selected item in server forms

## Reliable Button Events

Use next/previous button events:

```text
button.carousel_next
button.carousel_prev
```

Each card wrapper listens to the same event but plays a different offset and size animation.

## Three-Card Pattern

```text
left_card    small, back layer
center_card  large, front layer
right_card   small, back layer
```

On next:

- center appears to move left/back
- right appears to move center/front
- left appears to wrap around behind

For many Bedrock screens, it is easier to swap content with cyclers while animating stable card wrappers.

## Common Mistake

Do not destroy and recreate every card on each click unless you need to. Stable wrappers replay animations more reliably than fully rebuilt controls.
