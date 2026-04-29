# Start Screens

Start screen patterns modify the game's initial UI, background, panorama-like image, or menu shell.

## Static Background

The simplest pattern is replacing the screen background content with an image.

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

## Advice

Use a real texture for complex backgrounds. Do not build a large background from dozens of translucent JSON panels.

## Caution

Start screen files are sensitive to version changes. Keep the patch small and avoid replacing more controls than needed.
