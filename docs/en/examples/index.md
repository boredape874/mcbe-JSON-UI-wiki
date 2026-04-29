# Code Examples

This page is the copy-ready part of the wiki. The files below are bundled with the site, so you can inspect the complete RP/BP shape instead of reading only fragments.

## Server Form Starter

Use this first if you are learning server forms.

```text
server-form-starter/
  RP/
    manifest.json
    ui/
      _ui_defs.json
      server_form.json
  BP/
    manifest.json
    scripts/
      main.js
```

Direct files:

- [RP manifest](/examples/server-form-starter/RP/manifest.json)
- [RP ui/_ui_defs.json](/examples/server-form-starter/RP/ui/_ui_defs.json)
- [RP ui/server_form.json](/examples/server-form-starter/RP/ui/server_form.json)
- [BP manifest](/examples/server-form-starter/BP/manifest.json)
- [BP scripts/main.js](/examples/server-form-starter/BP/scripts/main.js)

The script opens a form when the player uses a compass. The resource pack replaces the default server form shell.

### RP/ui/server_form.json

<<< @/public/examples/server-form-starter/RP/ui/server_form.json{json}

### BP/scripts/main.js

<<< @/public/examples/server-form-starter/BP/scripts/main.js{js}

## Snippets

These snippets are not full packs. Drop them into your own namespace and adjust control names.

### Custom Toggle

<<< @/public/examples/snippets/custom_toggle.json{json}

### Progress Bar

<<< @/public/examples/snippets/progress_bar.json{json}

### Search Filter Button

<<< @/public/examples/snippets/search_button_filter.json{json}

## Version Note

The BP manifest uses `@minecraft/server` `2.0.0` and `@minecraft/server-ui` `2.0.0`. If your target beta requires a newer module version, update the dependency versions first, then keep the form contract the same.
